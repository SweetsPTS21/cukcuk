using Misa.Cukcuk.Core.Attributes;
using Misa.Cukcuk.Core.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Entities
{
    public class Employee
    {
        #region Constructor
        public Employee() 
        { 
            
        }
        #endregion

        #region Property

        /// <summary>
        /// Id nhân viên
        /// </summary>
        ///
        [PrimaryKey]
        public Guid EmployeeId { get; set; }
        /// <summary>
        /// Mã nhân viên
        /// </summary>
        /// Đặt các attribute cho property
        [NotEmpty]
        [PropertyName("Mã nhân viên")]
        public string? EmployeeCode { get; set; }
        /// <summary>
        /// Tên nhân viên
        /// </summary>
        /// 
        [NotEmpty]
        [PropertyName("Họ và tên")]
        public string? FullName { get; set; }
        /// <summary>
        /// Giới tính
        /// </summary>
        public Gender? Gender { get; set; }
        /// <summary>
        /// Số điện thoại
        /// </summary>
        /// 
        [NotEmpty]
        [PropertyName("Số điện thoại")]
        public string? PhoneNumber { get; set; }
        /// <summary>
        /// Email
        /// </summary>
        /// 
        [NotEmpty]
        [PropertyName("Email")]
        public string? Email { get; set; }
        /// <summary>
        /// Ngày sinh
        /// </summary>
        public DateTime? DateOfBirth { get; set; }
        /// <summary>
        /// Số chứng minh nhân dân
        /// </summary>
        public string? IdentityNumber { get; set; }
        /// <summary>
        /// Ngày cấp
        /// </summary>
        public DateTime? IdentityDate { get; set; }
        /// <summary>
        /// Nơi cấp
        /// </summary>
        public string? IdentityPlace { get; set; }
        /// <summary>
        /// Mã số thuế
        /// </summary>
        public string? TaxCode { get; set; }
        /// <summary>
        /// Mức lương
        /// </summary>
        public string? Salary { get; set; }
        /// <summary>
        /// Ngày gia nhập
        /// </summary>
        public DateTime? JoinDate { get; set; } 
        /// <summary>
        /// Tình trạng công việc
        /// </summary>
        public int? WorkStatus { get; set; }
        /// <summary>
        /// Id phòng ban
        /// </summary>
        /// 
        public Guid? DepartmentId { get; set; }
        /// <summary>
        /// Id vị trí
        /// </summary>
        ///
        public Guid PositionId { get; set; }
        /// <summary>
        /// Ngày tạo
        /// </summary>
        /// 
        public DateTime? CreatedDate { get; set; }
        /// <summary>
        /// Người tạo
        /// </summary>
        /// 
        public string? CreatedBy { get; set; }
        /// <summary>
        /// Ngày chỉnh sửa
        /// </summary>
        /// 
        public DateTime? ModifiedDate { get; set; }
        /// <summary>
        /// Người chỉnh sửa
        /// </summary>
        public string? ModifiedBy { get; set; }

        /// <summary>
        /// Chuyển đổi giới tính từ số sang chữ
        /// </summary>
        [NotMap]
        public string? GenderName {
            get
            {
                switch (Gender)
                {
                    case Enum.Gender.Male:
                        return Resource.ResourceVN.Gender_Male;
                    case Enum.Gender.Female:
                        return Resource.ResourceVN.Gender_Female;
                    case Enum.Gender.Other:
                        return Resource.ResourceVN.Gender_Other;
                    default:
                        return null;
                }
            }
        }
        #endregion
    }
}
