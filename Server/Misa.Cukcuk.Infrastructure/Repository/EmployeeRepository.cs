using Misa.Cukcuk.Core.Entities;
using Misa.Cukcuk.Core.Interface.Infrastructure;
using Dapper;
using MySqlConnector;

namespace Misa.Cukcuk.Infrastructure.Repository
{
    public class EmployeeRepository : BaseRepository<Employee>, IEmployeeRepository
    {

        public EmployeeRepository()
        {
            
        }

        public IEnumerable<Employee> GetPaging(int pageSize, int pageIndex)
        {
            throw new NotImplementedException();
        }

        public int CheckDuplicateEmployeeCode(string employeeCode)
        {
            using(MySqlConnection = new MySqlConnection(ConnectionString))
            {
                var sql = $"select * from employee where EmployeeCode = @EmployeeCode";
                var employeeCodeDuplicate = MySqlConnection.QueryFirstOrDefault<Employee>(sql, param: new { EmployeeCode = employeeCode });

                return employeeCodeDuplicate != null ? 1 : 0;
            }
            
        }
    }
}
