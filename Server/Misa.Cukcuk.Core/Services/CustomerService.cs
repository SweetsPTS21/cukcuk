﻿using Misa.Cukcuk.Core.Entities;
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
    public class CustomerService : BaseService<Customer>,  ICustomerService
    {
        ICustomerRepository _customerRepository;

        //Phải kế thừa từ hàm khởi tạo của cha
        public CustomerService(ICustomerRepository customerRepository):base(customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public int DeleteService(Guid customerId)
        {
            throw new NotImplementedException();
        }

        public int UpdateMultipleService(List<Guid> customerIds)
        {
            ///Thực hiện validate dữ liệu khách hàng
            throw new NotImplementedException();
        }

        protected override void ValidateInputField(Customer customer)
        {
            if (customer.PhoneNumber != null && customer.PhoneNumber.Length != 10)
            {
                throw new ValidateException(Core.Resource.ResourceVN.InvalidPhoneNumber);
            }
        }
    }
}