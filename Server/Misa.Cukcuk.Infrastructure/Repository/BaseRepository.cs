using MySqlConnector;
using Dapper;
using Misa.Cukcuk.Core.Entities;
using Misa.Cukcuk.Core.Interface.Infrastructure;
using System.Text;
using Misa.Cukcuk.Core.Attributes;

namespace Misa.Cukcuk.Infrastructure.Repository
{
    public class BaseRepository<MISAEntity> : IBaseRepository<MISAEntity>
    {
        //protected phạm vi trong các lớp kế thừa, không truy cập từ bên ngoài được
        protected readonly string ConnectionString = "" +
                "Server = 127.0.0.1;" +
                "Port = 3308;" +
                "Database = misa.cukcuk.ptson;" +
                "User Id = root;" +
                "Password = 2001;";
        protected MySqlConnection? MySqlConnection;

        /// <summary>
        /// Lấy toàn bộ dữ liệu
        /// </summary>
        /// <typeparam name="MISAEntity">type of object</typeparam>
        /// Author: PTSon(4/8/2023)
        /// <returns></returns>
        public IEnumerable<MISAEntity> GetAll()
        {
            //lấy ra tên của class
            var className = typeof(MISAEntity).Name;
            using (MySqlConnection = new MySqlConnection(ConnectionString))
            {
                var sqlCommand = $"SELECT * FROM {className}";
                var entities = MySqlConnection.Query<MISAEntity>(sqlCommand);
                return entities;
            }
        }
        public MISAEntity GetById(Guid MISAEntityId)
        {
            //1. Khởi tạo kết nối
            //2. Sử dụng using để tự động đóng kết nối sau khi thực hiện xong
            string className = typeof(MISAEntity).Name;
            using (MySqlConnection = new MySqlConnection(ConnectionString))
            {
                var sql = $"select * from {className} where {className}Id = @{className}Id";
                DynamicParameters dynamicParameters = new();
                dynamicParameters.Add("@EmployeeId", MISAEntityId);
                var entity = MySqlConnection.QueryFirstOrDefault<MISAEntity>(sql, param: dynamicParameters);
                return entity;
            }
        }

        public int Delete(Guid entityId)
        {
            string className = typeof(MISAEntity).Name;
            using (MySqlConnection = new MySqlConnection(ConnectionString))
            {
                var sql = $"delete from {className} where {className}Id = @{className}Id";
                DynamicParameters dynamicParameters = new();
                dynamicParameters.Add($"@{className}Id", entityId);

                var res = MySqlConnection.Execute(sql, param: dynamicParameters);

                return res;
            }
        }

        public virtual int Insert(MISAEntity entity)
        {
            //Build sql command để thực hiện thêm mới dữ liệu
            //1. Khởi tạo kết nối
            //2. Sử dụng using để tự động đóng kết nối sau khi thực hiện xong
            var className = typeof(MISAEntity).Name;

            //Duyệt tất cả các proprety của đối tượng
            var properties = typeof(MISAEntity).GetProperties();

            var sqlColumnName = new StringBuilder();
            var sqlColumnvalues = new StringBuilder();
            var delimeter = "";

            DynamicParameters dynamicParameters = new();
            foreach (var prop in properties)
            {
                //Lấy ra tên của các property
                var propName = prop.Name;
                var propValue = prop.GetValue(entity);

                //Kiểm tra prop có attribute là PrimaryKey hay không
                var primaryKeyAttr = prop.GetCustomAttributes(typeof(PrimaryKey), true);
                var notMapAttr = prop.GetCustomAttributes(typeof(NotMap), true);

                //Nếu property có attribute NotMap thì bỏ qua
                if (notMapAttr.Length > 0) continue;
                
                //Nếu property có attribute PrimaryKey thì gán giá trị mới
                if (primaryKeyAttr.Length > 0 && propName == $"{className}Id")
                {
                    propValue = Guid.NewGuid();
                }


                //Thực hiện build câu lệnh sql
                var paramName = $"@{propName}";
                sqlColumnName.Append($"{delimeter}{propName}");
                sqlColumnvalues.Append($"{delimeter}{paramName}");
                delimeter = ",";
                dynamicParameters.Add(paramName, propValue);
            }


            var sqlCommand = $"INSERT INTO {className}({sqlColumnName}) VALUES ({sqlColumnvalues})";
            using (MySqlConnection = new MySqlConnection(ConnectionString))
            {
                var res = MySqlConnection.Execute(sqlCommand, param: dynamicParameters);
                return res;
            }
            
        }

        public virtual int Update(MISAEntity entity, Guid entityId)
        {
            //Build sql command để thực hiện thêm mới dữ liệu
            //1. Khởi tạo kết nối
            //2. Sử dụng using để tự động đóng kết nối sau khi thực hiện xong
            var className = typeof(MISAEntity).Name;

            //Duyệt tất cả các proprety của đối tượng
            var properties = typeof(MISAEntity).GetProperties();

            var sqlColumnSet = new StringBuilder();
            var delimeter = "";

            DynamicParameters dynamicParameters = new();
            foreach (var prop in properties)
            {
                //Lấy ra tên của các property
                var propName = prop.Name;
                var propValue = prop.GetValue(entity);

                //Kiểm tra prop có attribute là PrimaryKey hay không
                var primaryKeyAttr = prop.GetCustomAttributes(typeof(PrimaryKey), true);
                var notMapAttr = prop.GetCustomAttributes(typeof(NotMap), true);

                //Nếu property có attribute NotMap thì bỏ qua
                if (notMapAttr.Length > 0) continue;

                //Nếu property có attribute PrimaryKey thì bỏ qua
                if (primaryKeyAttr.Length > 0 && propName == $"{className}Id")
                {
                    continue;
                }
                //Thực hiện build câu lệnh sql
                var paramName = $"@{propName}";
                sqlColumnSet.Append($"{delimeter}{propName} = {paramName}");
                delimeter = ",";
                dynamicParameters.Add(paramName, propValue);
            }
            dynamicParameters.Add($"@{className}Id", entityId); 

            var sqlCommand = $"UPDATE {className} SET {sqlColumnSet} WHERE {className}Id = @{className}Id";
            using (MySqlConnection = new MySqlConnection(ConnectionString))
            {
                var res = MySqlConnection.Execute(sqlCommand, param: dynamicParameters);
                return res;
            }
        }
    }
}
