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

    public class UpdateRoleValidator: AbstractValidator<UpdateRoleRequest>
    {
        public UpdateRoleValidator()
        {
            RuleFor(request => request.Role).NotNull();
            RuleFor(request => request.Role).SetValidator(new RoleValidator());
        }
    
    }
    public class UpdateRoleRequest: IRequest<UpdateRoleResponse>
    {
        public RoleDto Role { get; set; }
    }
    public class UpdateRoleResponse: ResponseBase
    {
        public RoleDto Role { get; set; }
    }
    public class UpdateRoleHandler: IRequestHandler<UpdateRoleRequest, UpdateRoleResponse>
    {
        private readonly IAllagiDbContext _context;
        private readonly ILogger<UpdateRoleHandler> _logger;
    
        public UpdateRoleHandler(IAllagiDbContext context, ILogger<UpdateRoleHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<UpdateRoleResponse> Handle(UpdateRoleRequest request, CancellationToken cancellationToken)
        {
            var role = await _context.Roles.SingleAsync(x => x.RoleId == new RoleId(request.Role.RoleId.Value));
            
            role.Name = request.Role.Name;
            
            await _context.SaveChangesAsync(cancellationToken);
            
            return new ()
            {
                Role = role.ToDto()
            };
        }
        
    }

}
