using Allagi.Core;
using Allagi.Core.Interfaces;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Allagi.Core
{

    public class RemoveRoleRequest: IRequest<RemoveRoleResponse>
    {
        public Guid RoleId { get; set; }
    }
    public class RemoveRoleResponse: ResponseBase
    {
        public RoleDto Role { get; set; }
    }
    public class RemoveRoleHandler: IRequestHandler<RemoveRoleRequest, RemoveRoleResponse>
    {
        private readonly IAllagiDbContext _context;
        private readonly ILogger<RemoveRoleHandler> _logger;
    
        public RemoveRoleHandler(IAllagiDbContext context, ILogger<RemoveRoleHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<RemoveRoleResponse> Handle(RemoveRoleRequest request, CancellationToken cancellationToken)
        {
            var role = await _context.Roles.FindAsync(new RoleId(request.RoleId));
            
            _context.Roles.Remove(role);
            
            await _context.SaveChangesAsync(cancellationToken);
            
            return new ()
            {
                Role = role.ToDto()
            };
        }
        
    }

}
