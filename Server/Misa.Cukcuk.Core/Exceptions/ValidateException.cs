using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Exceptions
{
    public class ValidateException:Exception
    {
        string msgErrorValidate;
        public ValidateException(string msg)
        {
            this.msgErrorValidate = msg;
        }
        public override string Message { get 
            {
                return msgErrorValidate;
            }
        }

    }
}
