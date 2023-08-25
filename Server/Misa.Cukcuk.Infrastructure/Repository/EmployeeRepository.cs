using Misa.Cukcuk.Core.Entities;
using Misa.Cukcuk.Core.Interface.Infrastructure;
using Dapper;
using MySqlConnector;
using Misa.Cukcuk.Core.Attributes;
using System;
using System.Data.Common;
using System.Text.RegularExpressions;
using System.IO;
using Misa.Cukcuk.Core.Exceptions;

namespace Misa.Cukcuk.Infrastructure.Repository
{
    public class EmployeeRepository : BaseRepository<Employee>, IEmployeeRepository
    {

        public EmployeeRepository()
        {
            
        }
        /// <summary>
        /// Lấy dữ liệu nhân viên theo tiêu chí lọc
        /// </summary>
        /// <param name="filterObj"></param>
        /// <returns>
        /// employees: danh sách nhân viên
        /// </returns>
        /// CREATED BY: PTSON (01/08/2023)
        public IEnumerable<Employee> GetWithFilter(int pageIndex, int pageSize, string? search, string? departmentId, string? positionId)
        {
            try
            {
                var key = search;
                var pid = positionId != null ? positionId : "";
                var did = departmentId != null ? departmentId : "";

                var sql = $"SELECT * FROM employee WHERE (EmployeeCode LIKE \"%{key}%\" " +
                    $"OR FullName LIKE \"%{key}%\" OR PhoneNumber LIKE \"%{key}%\") " +
                    $"AND (PositionId LIKE \"%{pid}%\" OR PositionId IS NULL) AND (DepartmentId LIKE \"%{did}%\" OR DepartmentId IS NULL)";
                using (MySqlConnection = new MySqlConnection(ConnectionString))
                {
                    var employees = MySqlConnection.Query<Employee>(sql);
                    return employees;
                }
            }
            catch (ValidateException e)
            {
                throw new ValidateException(e.Message);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }
        /// <summary>
        /// Lấy dữ liệu phân trang
        /// </summary>
        /// <param name="pageSize"></param>
        /// <param name="pageIndex"></param>
        /// <returns>
        /// employees: Danh sách nhân viên
        /// </returns>
        /// CREATED BY: PTSON (01/08/2023)
        public IEnumerable<Employee> GetPaging(int pageSize, int pageIndex)
        {
            try
            {
                var sql = $"select * from employee limit {pageSize} offset {pageIndex}";
                using (MySqlConnection = new MySqlConnection(ConnectionString))
                {
                    var employees = MySqlConnection.Query<Employee>(sql);
                    return employees;
                }
            }
            catch (ValidateException e)
            {             
                throw new ValidateException(e.Message);
            }
            catch (Exception ex)
            {               
                throw new Exception(ex.Message);
            }

        }
        /// <summary>
        /// Check trùng mã nhân viên
        /// </summary>
        /// <param name="employeeCode"></param>
        /// <param name="employeeId"></param>
        /// <returns>
        /// 1: Trùng mã nhân viên
        /// 0: Không trùng mã nhân viên
        /// </returns>
        /// CREATED BY: PTSON (01/08/2023)
        public int CheckDuplicateEmployeeCode(string employeeCode, Guid employeeId)
        {
            using(MySqlConnection = new MySqlConnection(ConnectionString))
            {
                var sql = $"select * from employee where EmployeeCode = @EmployeeCode and EmployeeId != @EmployeeId";
                var employeeCodeDuplicate = MySqlConnection.QueryFirstOrDefault<Employee>(sql, param: new { EmployeeCode = employeeCode, EmployeeId = employeeId });

                return employeeCodeDuplicate != null ? 1 : 0;
            }
            
        }
        /// <summary>
        /// Lấy tên vị trí
        /// </summary>
        /// <param name="positionId"></param>
        /// <returns>
        /// String: Tên vị trí
        /// </returns>
        /// CREATED BY: PTSON (01/08/2023)
        public string GetPositionName(Guid? positionId)
        {
            using(MySqlConnection = new MySqlConnection(ConnectionString))
            {
                var sql = $"select PositionName from position where PositionId = @PositionId";
                var positionName = MySqlConnection.QueryFirstOrDefault<string>(sql, param: new { PositionId = positionId });

                return positionName;
            }
        }
        /// <summary>
        /// Lấy tên phòng ban
        /// </summary>
        /// <param name="departmentId"></param>
        /// <returns>
        /// String: Tên phòng ban
        /// </returns>
        /// CREATED BY: PTSON (01/08/2023)
        public string GetDepartmentName(Guid? departmentId)
        {
            using(MySqlConnection = new MySqlConnection(ConnectionString))
            {
                var sql = $"select DepartmentName from department where DepartmentId = @DepartmentId";
                var departmentName = MySqlConnection.QueryFirstOrDefault<string>(sql, param: new { DepartmentId = departmentId });

                return departmentName;
            }
        }
        /// <summary>
        /// Lấy mã nhân viên mới
        /// </summary>
        /// <returns>
        /// String: Mã nhân viên mới
        /// </returns>
        /// CREATED BY: PTSON (20/08/2023)
        public string GetNewEmployeeCode()
        {
            using (MySqlConnection = new MySqlConnection(ConnectionString))
            {
                var sql = "SELECT EmployeeCode FROM employee LIMIT 1";
                var employeeCode = MySqlConnection.QueryFirstOrDefault<string>(sql);
                string newEmployeeCode = "NV-001";

                if (employeeCode != null)
                {
                    string pattern = @"([A-Za-z-]+)(\d+)";
                    Match match = Regex.Match(employeeCode, pattern);
                    int code = int.Parse(match.Groups[2].Value) + 1;
                    if (match.Success)
                    {
                        newEmployeeCode = $"{match.Groups[1].Value}{code}";                     
                    }
                    while (CheckDuplicateEmployeeCode(newEmployeeCode, Guid.Empty) == 1)
                    {
                        code++;
                        newEmployeeCode = $"{match.Groups[1].Value}{code}";
                    }
                }              
                return newEmployeeCode;
            }
        }

    }
}
