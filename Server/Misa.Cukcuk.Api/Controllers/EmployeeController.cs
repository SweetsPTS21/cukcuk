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
        
    }
}
