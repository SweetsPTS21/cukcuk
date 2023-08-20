using Misa.Cukcuk.Core.Attributes;
using Misa.Cukcuk.Core.Entities;
using Misa.Cukcuk.Core.Exceptions;
using Misa.Cukcuk.Core.Interface.Infrastructure;
using Misa.Cukcuk.Core.Interface.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Services
{
    public class BaseService<MISAEntity> : IBaseService<MISAEntity>
    {
        readonly IBaseRepository<MISAEntity> _baseRepository;
        public BaseService(IBaseRepository<MISAEntity> baseRepository)
        {
            _baseRepository = baseRepository;
        }
        /// <summary>
        /// Service thêm mới dữ liệu
        /// </summary>
        /// <param name="entity"></param>
        /// <returns>
        /// 1: Thêm mới thành công
        /// 0: Thêm mới thất bại
        /// </returns>
        /// CREATED BY: PTSON (01/08/2023)
        public int InsertService(MISAEntity entity)
        {
            Guid entityId = Guid.NewGuid();
            ValidateData(entity, entityId);
            var res = _baseRepository.Insert(entity);
            return res;
        }
        /// <summary>
        /// Service cập nhật dữ liệu
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="entityId"></param>
        /// <returns>
        /// 1: Cập nhật thành công
        /// 0: Cập nhật thất bại
        /// </returns>
        /// CREATED BY: PTSON (01/08/2023)
        public int UpdateService(MISAEntity entity, Guid entityId)
        {
            ValidateData(entity, entityId);
            var res = _baseRepository.Update(entity, entityId);
            return res;
        }

        /// <summary>
        /// Service xóa dữ liệu
        /// </summary>
        /// <param name="entityId"></param>
        /// <returns>
        /// 1: Xóa thành công
        /// 0: Xóa thất bại
        /// </returns>
        /// CREATED BY: PTSON (01/08/2023)
        public int DeleteService(Guid entityId)
        {
            var res = _baseRepository.Delete(entityId);
            return res;
        }
        /// <summary>
        /// Validate dữ liệu
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="entityId"></param>
        /// <exception cref="ValidateException"></exception>
        /// CREATED BY: PTSON (01/08/2023)
        private void ValidateData(MISAEntity entity, Guid entityId)
        {
            //Check trùng mã
            CheckDuplicateEmployeeCode(entity, entityId);
            //Check trùng dữ liệu

            //Không được trống
            //get tất cả các property của entity
            var properties = entity.GetType().GetProperties();
            //Lấy ra tất cả các property có attribute là NotEmpty
            var propertyHasNotEmpty = properties.Where(p => p.IsDefined(typeof(NotEmpty), false));
            
            foreach(var prop in propertyHasNotEmpty)
            {
                var propValue = prop.GetValue(entity);
                //Lấy ra kiểu dữ liệu của prop
                var propertyName  = prop.GetCustomAttributes(typeof(PropertyName), true);
                var propType = prop.PropertyType;
                var nameDisplay = string.Empty;

                if (propertyName.Length > 0)
                {
                    nameDisplay = ((PropertyName)propertyName[0]).Name;
                }
                var propName = prop.Name;
                if (propValue == null || propValue.ToString() == "")
                {
                    throw new ValidateException(string.Format(Core.Resource.ResourceVN.InfoNotEmpty, nameDisplay));
                }
            }
            
        }
        /// <summary>
        /// Check trùng mã nhân viên
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="entityId"></param>
        /// CREATED BY: PTSON (01/08/2023)
        protected virtual void CheckDuplicateEmployeeCode (MISAEntity entity, Guid entityId)
        {
            //Đã được override ở các class con (EmployeeService, CustomerService)
        }

    }
}
