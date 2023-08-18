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
        public int InsertService(MISAEntity entity)
        {
            Guid entityId = Guid.NewGuid();
            ValidateData(entity, entityId);
            var res = _baseRepository.Insert(entity);
            return res;
        }

        public int UpdateService(MISAEntity entity, Guid entityId)
        {
            ValidateData(entity, entityId);
            var res = _baseRepository.Update(entity, entityId);
            return res;
        }


        public int DeleteService(Guid entityId)
        {
            var res = _baseRepository.Delete(entityId);
            return res;
        }

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

        protected virtual void CheckDuplicateEmployeeCode (MISAEntity entity, Guid entityId)
        {
            //Đã được override ở các class con (EmployeeService, CustomerService)
        }

    }
}
