using Misa.Cukcuk.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Interface.Services
{
    public interface IBaseService<MISAEntity>
    {
        /// <summary>
        /// Service dùng để lấy dữ liệu từ DB
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        /// CREATED BY: PTSON (03/08/2023)
        int InsertService(MISAEntity entity);
        /// <summary>
        /// Service dùng để cập nhật dữ liệu
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="entityId"></param>
        /// <returns></returns>
        /// CREATED BY: PTSON (03/08/2023)
        int UpdateService(MISAEntity entity, Guid entityId);
        /// <summary>
        /// Service dùng để xóa dữ liệu
        /// </summary>
        /// <param name="entityId"></param>
        /// <returns></returns>
        /// CREATED BY: PTSON (03/08/2023)
        int DeleteService(Guid entityId);
    }
}
