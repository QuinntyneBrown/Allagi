using System;

namespace Allagi.Core
{
    public class Role
    {
        public RoleId RoleId { get; set; }  = new RoleId(Guid.NewGuid());
        public string Name { get; set; }
    }
}
