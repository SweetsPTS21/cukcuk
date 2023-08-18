using Misa.Cukcuk.Core.Entities;
using Misa.Cukcuk.Core.Exceptions;
using Misa.Cukcuk.Core.Interface.Infrastructure;
using Misa.Cukcuk.Core.Interface.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Services
{
    public class EmployeeSerive : BaseService<Employee>, IEmployeeService
    {
        IEmployeeRepository _employeeRepository;
        public EmployeeSerive(IEmployeeRepository employeeRepository):base(employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        protected override void CheckDuplicateEmployeeCode(Employee employee, Guid employeeId)
        {
            if (employee != null)
            {
                var isDuplicate = _employeeRepository.CheckDuplicateEmployeeCode(employee.EmployeeCode, employeeId);
                if (isDuplicate == 1)
                {
                    throw new ValidateException(Resource.ResourceVN.DuplicateEmployeeCode);
                }
            }
            
        }


    }
}
