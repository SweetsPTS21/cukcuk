using Misa.Cukcuk.Core.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Entities
{
    public class Department
    {
        /// <summary>
        /// Id phòng ban
        /// </summary>
        [PrimaryKey]
        public Guid DepartmentId { get; set; }
        /// <summary>
        /// Mã phòng ban
        /// </summary>
        public string? DepartmentCode { get; set; }
        /// <summary>
        /// Tên phòng ban
        /// </summary>
        public string? DepartmentName { get; set; }

    }
}
