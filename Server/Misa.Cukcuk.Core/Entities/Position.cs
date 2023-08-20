using Misa.Cukcuk.Core.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Entities
{
    public class Position
    {
        /// <summary>
        /// Id vị trí
        /// </summary>
        [PrimaryKey]
        public Guid PositionId { get; set; }
        /// <summary>
        /// Mã vị trí
        /// </summary>
        public string? PositionCode { get; set; }
        /// <summary>
        /// Tên vị trí
        /// </summary>
        public string? PositionName { get; set; }

    }
}
