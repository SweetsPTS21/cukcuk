using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Entities
{
    public class FilterObj
    {
        /// <summary>
        /// Trang hiện tại
        /// </summary>
        public int Page { get; set; }
        /// <summary>
        /// Tổng số bản ghi trên 1 trang
        /// </summary>
        public int PageSize { get; set; }
        /// <summary>
        /// Tổng số bản ghi
        /// </summary>
        public int TotalPage { get; set; }
        /// <summary>
        /// Giá trị tìm kiếm
        /// </summary>
        public string? Search { get; set; }
        /// <summary>
        /// Id phòng ban
        /// </summary>
        public string? DepartmentId { get; set; }
        /// <summary>
        /// Id vị trí
        /// </summary>
        public string? PositionId { get; set; }
    }
}
