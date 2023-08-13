using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Misa.Cukcuk.Core.Exceptions;
using Misa.Cukcuk.Core.Interface.Infrastructure;
using Misa.Cukcuk.Core.Interface.Services;

namespace Misa.Cukcuk.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MISABaseController<MISAEntity> : ControllerBase
    {
        IBaseService<MISAEntity> _baseService;
        IBaseRepository<MISAEntity> _baseRepository;

        public MISABaseController(IBaseService<MISAEntity> baseService, IBaseRepository<MISAEntity> baseRepository)
        {
            _baseService = baseService;
            _baseRepository = baseRepository;
        }

        /// <summary>
        /// Lấy toàn bộ dữ liệu
        /// </summary>
        /// <returns>200 - nếu có dữ liệu
        /// 400 - nếu có lỗi nghiệp vụ
        /// 500 - lỗi exception
        /// </returns>
        /// CREATED BY: PTSON (6/08/2023)
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var data = _baseRepository.GetAll();
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

        [HttpGet("{entityId}")]
        public IActionResult GetById(Guid entityId)
        {
            try
            {
                var data = _baseRepository.GetById(entityId);
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

        [HttpPost]
        public IActionResult Post(MISAEntity entity)
        {
            try
            {
                var data = _baseService.InsertService(entity);
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

        [HttpPut("{entityId}")]
        public IActionResult Put(MISAEntity entity, Guid entityId)
        {
            try
            {
                var data = _baseService.UpdateService(entity, entityId);
                return StatusCode(201, data);
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

        [HttpDelete("{entityId}")]
        public IActionResult Delete(Guid entityId)
        {
            try
            {
                var data = _baseService.DeleteService(entityId);
                return StatusCode(201, data);
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
