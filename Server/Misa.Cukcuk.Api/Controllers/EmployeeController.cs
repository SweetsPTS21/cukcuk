using Microsoft.AspNetCore.Mvc;
using Misa.Cukcuk.Core.Entities;
using Misa.Cukcuk.Core.Exceptions;
using Misa.Cukcuk.Core.Interface.Infrastructure;
using Misa.Cukcuk.Core.Interface.Services;
using Misa.Cukcuk.Core.Services;
using Misa.Cukcuk.Infrastructure.Repository;

namespace Misa.Cukcuk.Api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class EmployeeController : MISABaseController<Employee>
    {
        IEmployeeService _employeeService;
        IEmployeeRepository _employeeRepository;
        public EmployeeController(IEmployeeService employeeService, IEmployeeRepository employeeRepository) : base(employeeService, employeeRepository)
        {
            _employeeService = employeeService;
            _employeeRepository = employeeRepository;
        }

        //Phải implement interface
        //Các class không làm việc trực tiếp với nhau
        //mà phải qua interface

        //Các hàm get, getById, post, put, delete đã được implement ở MISABaseController

        [HttpPost("filter")]
        public IActionResult GetEmployee(FilterObj filterObj)
        {
            try
            {
                var data = _employeeRepository.GetWithFilter(filterObj);

                foreach (var item in data)
                {
                    item.PositionName = _employeeRepository.GetPositionName(item.PositionId);
                    item.DepartmentName = _employeeRepository.GetDepartmentName(item.DepartmentId);
                }
                return Ok(data);
            }
            catch (ValidateException e)
            {
                var response = new
                {
                    devMsg = e.Message,
                    userMsg = e.Message,
                    errorCode = "misa-001",
                };
                return BadRequest(response);
            }
            catch (Exception ex)
            {
                var response = new
                {
                    devMsg = ex.Message,
                    userMsg = Core.Resource.ResourceVN.ErrorException,
                    errorCode = "misa-001",
                };
                return StatusCode(500, response);
            }
        }
        
    }
}
