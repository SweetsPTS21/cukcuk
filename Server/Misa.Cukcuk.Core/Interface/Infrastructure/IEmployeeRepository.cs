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

        int CheckDuplicateEmployeeCode(string EmployeeCode);
    }
}
