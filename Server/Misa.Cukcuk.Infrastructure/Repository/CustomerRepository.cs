using Misa.Cukcuk.Core.Entities;
using Misa.Cukcuk.Core.Interface.Infrastructure;

namespace Misa.Cukcuk.Infrastructure.Repository
{
    public class CustomerRepository : BaseRepository<Customer>, ICustomerRepository
    {
        public int Delete(Guid entityId)
        {
            throw new NotImplementedException();
        }

        public override int Insert(Customer customer)
        {
            throw new NotImplementedException();
        }

        public override int Update(Customer customer, Guid customerId)
        {
            throw new NotImplementedException();
        }
    }
}
