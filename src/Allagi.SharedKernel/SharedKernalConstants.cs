using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Allagi.SharedKernel
{
    public static class SharedKernalConstants
    {
        public static class ClaimTypes
        {
            public const string UserId = nameof(UserId);
            public const string Username = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name";
            public const string Privilege = nameof(Privilege);
            public const string Role = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
        }

        public static class AccessRights
        {
            public static List<AccessRight> Read => new() { AccessRight.Read };
            public static List<AccessRight> ReadWrite => new() { AccessRight.Read, AccessRight.Write };
            public static List<AccessRight> FullAccess => new() { AccessRight.Read, AccessRight.Write, AccessRight.Create, AccessRight.Delete };
        }

        public static class Roles
        {

        }

        public static class ProfileTypes
        {

            public static List<string> All => new() {  };
        }

      



    }
}
