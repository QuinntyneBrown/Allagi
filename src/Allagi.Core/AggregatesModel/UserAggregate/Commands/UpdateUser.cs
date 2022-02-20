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

    public class UpdateUserValidator: AbstractValidator<UpdateUserRequest>
    {
        public UpdateUserValidator()
        {
            RuleFor(request => request.User).NotNull();
            RuleFor(request => request.User).SetValidator(new UserValidator());
        }
    
    }
    public class UpdateUserRequest: IRequest<UpdateUserResponse>
    {
        public UserDto User { get; set; }
    }
    public class UpdateUserResponse: ResponseBase
    {
        public UserDto User { get; set; }
    }
    public class UpdateUserHandler: IRequestHandler<UpdateUserRequest, UpdateUserResponse>
    {
        private readonly IAllagiDbContext _context;
        private readonly ILogger<UpdateUserHandler> _logger;
    
        public UpdateUserHandler(IAllagiDbContext context, ILogger<UpdateUserHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<UpdateUserResponse> Handle(UpdateUserRequest request, CancellationToken cancellationToken)
        {
            var user = await _context.Users.SingleAsync(x => x.UserId == new UserId(request.User.UserId.Value));
            
            user.Username = request.User.Username;
            user.Password = request.User.Password;
            
            await _context.SaveChangesAsync(cancellationToken);
            
            return new ()
            {
                User = user.ToDto()
            };
        }
        
    }

}
