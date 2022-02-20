﻿using Microsoft.AspNetCore.Authorization;

namespace Allagi.SharedKernel
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct)]
    public class AuthorizeResourceOperationAttribute : Attribute
    {
        public string Resource;
        public string Operation { get; set; }

        public AuthorizeResourceOperationAttribute(string operation, string resource)
        {
            Operation = operation;
            Resource = resource;
        }

        public IAuthorizationRequirement Requirement => Operation switch
        {
            nameof(Operations.Create) => Operations.Create,
            nameof(Operations.Read) => Operations.Read,
            nameof(Operations.Write) => Operations.Write,
            nameof(Operations.Delete) => Operations.Delete,
            _ => null,
        };
    }
}
