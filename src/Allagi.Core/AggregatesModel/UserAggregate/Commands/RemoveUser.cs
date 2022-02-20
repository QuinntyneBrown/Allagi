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

    public class RemoveUserRequest: IRequest<RemoveUserResponse>
    {
        public Guid UserId { get; set; }
    }
    public class RemoveUserResponse: ResponseBase
    {
        public UserDto User { get; set; }
    }
    public class RemoveUserHandler: IRequestHandler<RemoveUserRequest, RemoveUserResponse>
    {
        private readonly IAllagiDbContext _context;
        private readonly ILogger<RemoveUserHandler> _logger;
    
        public RemoveUserHandler(IAllagiDbContext context, ILogger<RemoveUserHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<RemoveUserResponse> Handle(RemoveUserRequest request, CancellationToken cancellationToken)
        {
            var user = await _context.Users.FindAsync(new UserId(request.UserId));
            
            _context.Users.Remove(user);
            
            await _context.SaveChangesAsync(cancellationToken);
            
            return new ()
            {
                User = user.ToDto()
            };
        }
        
    }

}
