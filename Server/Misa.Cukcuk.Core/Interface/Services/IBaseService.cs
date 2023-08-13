using Misa.Cukcuk.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Interface.Services
{
    public interface IBaseService<MISAEntity>
    {
        int InsertService(MISAEntity entity);
        int UpdateService(MISAEntity entity, Guid entityId);
        int DeleteService(Guid entityId);
    }
}
