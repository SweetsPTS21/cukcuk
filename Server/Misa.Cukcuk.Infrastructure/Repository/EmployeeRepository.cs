using Misa.Cukcuk.Core.Entities;
using Misa.Cukcuk.Core.Interface.Infrastructure;
using Dapper;
using MySqlConnector;
using Misa.Cukcuk.Core.Attributes;
using System;

namespace Misa.Cukcuk.Infrastructure.Repository
{
    public class EmployeeRepository : BaseRepository<Employee>, IEmployeeRepository
    {

        public EmployeeRepository()
        {
            
        }

        public IEnumerable<Employee> GetWithFilter(FilterObj filterObj)
        {
            var entities = GetAll();
            #region Filter
            //Lọc dữ liệu
            var filter = new 
            {
                key = filterObj.Search,
                did = filterObj.DepartmentId,
                pid = filterObj.PositionId
            };
            //Kiểm tra xem có phải là object rỗng không
            var filterable = filter.GetType().GetProperties().Any(property => property.GetValue(filter) != null);

            if (filterable)
            {
                var properties = typeof(Employee).GetProperties().Where(p => p.IsDefined(typeof(Filterable), true));
                entities = entities.Where(entity =>
                {             
                    foreach (var property in properties)
                    {
                        if (property.GetValue(entity) != null)
                        {
                            var name = property.Name;
                            var value = property.GetValue(entity).ToString();
                            if (name == "FullName" && !value.ToLower().Contains(filter.key.ToLower()) ||
                                name == "DepartmentId" && filter.did != null &&  !value.Contains(filter.did) ||
                                name == "PositionId" && filter.pid != null &&  !value.Contains(filter.pid))
                            {
                                return false;
                            }
                            }

                    }
                    return true;
                    
                });
            }
            #endregion

            #region Paging
            //Phân trang
            entities = PaginatedList<Employee>.Create(entities.AsQueryable(), filterObj.Page, filterObj.PageSize);
            #endregion
            return entities;
        }

        public IEnumerable<Employee> GetPaging(int pageSize, int pageIndex)
        {
            var sql = $"select * from employee limit {pageSize} offset {pageIndex}";
            using(MySqlConnection = new MySqlConnection(ConnectionString))
            {
                var employees = MySqlConnection.Query<Employee>(sql);
                return employees;
            }
        }

        public int CheckDuplicateEmployeeCode(string employeeCode, Guid employeeId)
        {
            using(MySqlConnection = new MySqlConnection(ConnectionString))
            {
                var sql = $"select * from employee where EmployeeCode = @EmployeeCode and EmployeeId != @EmployeeId";
                var employeeCodeDuplicate = MySqlConnection.QueryFirstOrDefault<Employee>(sql, param: new { EmployeeCode = employeeCode, EmployeeId = employeeId });

                return employeeCodeDuplicate != null ? 1 : 0;
            }
            
        }

        public string GetPositionName(Guid? positionId)
        {
            using(MySqlConnection = new MySqlConnection(ConnectionString))
            {
                var sql = $"select PositionName from position where PositionId = @PositionId";
                var positionName = MySqlConnection.QueryFirstOrDefault<string>(sql, param: new { PositionId = positionId });

                return positionName;
            }
        }

        public string GetDepartmentName(Guid? departmentId)
        {
            using(MySqlConnection = new MySqlConnection(ConnectionString))
            {
                var sql = $"select DepartmentName from department where DepartmentId = @DepartmentId";
                var departmentName = MySqlConnection.QueryFirstOrDefault<string>(sql, param: new { DepartmentId = departmentId });

                return departmentName;
            }
        }

    }
}
