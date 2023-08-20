using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Entities
{
    public class PaginatedList<T> : List<T>
    {
        /// <summary>
        /// Trang hiện tại
        /// </summary>
        public int PageIndex { get; private set; }
        /// <summary>
        /// Tổng số trang
        /// </summary>
        /// CREATED BY: PTSON (03/08/2023)
        public int TotalPage { get; private set; }
        public PaginatedList(List<T> items, int count, int pageIndex, int pageSize)
        {
            PageIndex = pageIndex;
            TotalPage = (int)Math.Ceiling(count / (double)pageSize);
            this.AddRange(items);
        }
        /// <summary>
        /// Nếu có trang trước đó
        /// </summary>
        /// CREATED BY: PTSON (03/08/2023)
        public bool HasPreviousPage
        {
            get
            {
                return (PageIndex > 1);
            }
        }
        /// <summary>
        /// Nếu có trang tiếp theo
        /// </summary>
        /// CREATED BY: PTSON (03/08/2023)
        public bool HasNextPage
        {
            get
            {
                return (PageIndex < TotalPage);
            }
        }
        /// <summary>
        /// Tạo danh sách phân trang
        /// </summary>
        /// <param name="source"></param>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        /// CREATED BY: PTSON (03/08/2023)
        public static PaginatedList<T> Create(IEnumerable<T> source, int pageIndex, int pageSize)
        {
            var count = source.Count();
            var items = source.Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList();
            return new PaginatedList<T>(items, count, pageIndex, pageSize);
        }
    }
}
