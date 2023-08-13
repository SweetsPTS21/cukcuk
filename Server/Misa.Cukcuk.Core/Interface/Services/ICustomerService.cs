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
        int DeleteService(Guid customerId);
        int UpdateMultipleService(List<Guid> customerIds);

    }
}
