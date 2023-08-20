using Misa.Cukcuk.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Interface.Services
{
    public interface ICustomerService : IBaseService<Customer>
    {
        /// <summary>
        /// Service dùng để cập nhật dữ liệu nhiều bản ghi
        /// </summary>
        /// <param name="customerIds"></param>
        /// <returns></returns>
        /// CREATED BY: PTSON (03/08/2023)
        int UpdateMultipleService(List<Guid> customerIds);

    }
}
