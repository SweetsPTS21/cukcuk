using Microsoft.AspNetCore.Mvc;
using Misa.Cukcuk.Core.Entities;
using Misa.Cukcuk.Core.Exceptions;
using Misa.Cukcuk.Core.Interface.Infrastructure;
using Misa.Cukcuk.Core.Interface.Services;

namespace Misa.Cukcuk.Api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        ICustomerRepository _customerRepository;
        ICustomerService _customerService;

        public CustomerController(ICustomerRepository customerRepository, ICustomerService customerService)
        {
            _customerRepository = customerRepository;
            _customerService = customerService;
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var customerList = _customerRepository.GetAll();
                return new OkObjectResult(customerList);
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
        [HttpPost]
        public IActionResult Post(Customer customer)
        {
            return new OkObjectResult(customer);
        }

    }
}
