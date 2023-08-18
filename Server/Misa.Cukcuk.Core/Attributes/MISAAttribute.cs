using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Misa.Cukcuk.Core.Attributes
{
    [AttributeUsage(AttributeTargets.Property)]
    public class NotEmpty : Attribute
    {
    }

    [AttributeUsage(AttributeTargets.Property)]
    public class PrimaryKey : Attribute
    {
    }

    [AttributeUsage(AttributeTargets.Property)]
    public class PropertyName : Attribute
    {
        public string Name { get; set; }
        public PropertyName(string name)
        {
            Name = name; 
        }
    }
    [AttributeUsage(AttributeTargets.Property)]
    public class NotMap : Attribute
    {

    }
    [AttributeUsage(AttributeTargets.Property)]
    public class CanNull : Attribute
    {

    }
    [AttributeUsage(AttributeTargets.Property)]
    public class Filterable : Attribute
    {

    }
}
