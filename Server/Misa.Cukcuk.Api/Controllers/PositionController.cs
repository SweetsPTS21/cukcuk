using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Misa.Cukcuk.Core.Entities;
using Misa.Cukcuk.Core.Interface.Infrastructure;
using Misa.Cukcuk.Core.Interface.Services;

namespace Misa.Cukcuk.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PositionController : MISABaseController<Position>
    {
        public PositionController(IBaseService<Position> baseService, IBaseRepository<Position> baseRepository) : base(baseService, baseRepository)
        {

        }
    }   
}
