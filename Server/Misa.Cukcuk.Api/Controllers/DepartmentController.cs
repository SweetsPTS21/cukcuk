using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Misa.Cukcuk.Core.Entities;
using Misa.Cukcuk.Core.Interface.Infrastructure;
using Misa.Cukcuk.Core.Interface.Services;

namespace Misa.Cukcuk.Api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class DepartmentController : MISABaseController<Department>
    {
        public DepartmentController(IBaseService<Department> baseService, IBaseRepository<Department> baseRepository) : base(baseService, baseRepository)
        {

        }
    }
}
