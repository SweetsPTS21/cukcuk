using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Entities
{
    public class Customer
    {
        public int? Id { get; set; }
        public string? CustomerCode { get; set; }
        public string? FullName { get; set; }
        public string? MemberCardCode { get; set; }
        public string? PhoneNumber { get; set; }

    }
}
