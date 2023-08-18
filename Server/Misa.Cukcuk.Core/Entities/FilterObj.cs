using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Entities
{
    public class FilterObj
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public int TotalPage { get; set; }

        public string? Search { get; set; }
        public string? DepartmentId { get; set; }
        public string? PositionId { get; set; }
    }
}
