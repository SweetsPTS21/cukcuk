﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Interface.Infrastructure
{
    public interface IBaseRepository<MISAEntity>
    {
        //Comment trên interface thay vì trên class
        IEnumerable<MISAEntity> GetAll();
        MISAEntity GetById(Guid entityId);
        int Insert(MISAEntity entity);
        int Update(MISAEntity entity, Guid entityId);
        int Delete(Guid entityId);
    }
}
