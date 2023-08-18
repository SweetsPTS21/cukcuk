using Misa.Cukcuk.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Interface.Infrastructure
{
    public interface IEmployeeRepository:IBaseRepository<Employee>
    {
        /// <summary>
        /// Interface dùng để lấy dữ liệu từ DB
        /// </summary>
        /// <returns></returns>
        IEnumerable<Employee> GetPaging(int pageSize, int pageIndex);
        IEnumerable<Employee> GetWithFilter(FilterObj filterObj);
        /// <summary>
        /// Kiểm tra trùng mã nhân viên khi thêm mới
        /// </summary>
        /// <param name="employeeCode"></param>
        /// <returns></returns>
        int CheckDuplicateEmployeeCode(string employeeCode, Guid employeeId);
        /// <summary>
        /// Get tên vị trí
        /// </summary>
        /// <param name="positionId"></param>
        /// <returns></returns>
        string GetPositionName(Guid? positionId);
        /// <summary>
        /// Get tên phòng ban
        /// </summary>
        /// <param name="departmentId"></param>
        /// <returns></returns>
        string GetDepartmentName(Guid? departmentId);
    }
}
