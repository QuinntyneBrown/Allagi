using Allagi.Core;
using Allagi.Core.Interfaces;
using FluentValidation;
using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Allagi.Core
{

    public class CreateUserValidator: AbstractValidator<CreateUserRequest>
    {
        public CreateUserValidator()
        {
            RuleFor(request => request.User).NotNull();
            RuleFor(request => request.User).SetValidator(new UserValidator());
        }
    
    }
    public class CreateUserRequest: IRequest<CreateUserResponse>
    {
        public UserDto User { get; set; }
    }
    public class CreateUserResponse: ResponseBase
    {
        public UserDto User { get; set; }
    }
    public class CreateUserHandler: IRequestHandler<CreateUserRequest, CreateUserResponse>
    {
        private readonly IAllagiDbContext _context;
        private readonly ILogger<CreateUserHandler> _logger;
    
        public CreateUserHandler(IAllagiDbContext context, ILogger<CreateUserHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<CreateUserResponse> Handle(CreateUserRequest request, CancellationToken cancellationToken)
        {
            var user = new User(new CreateUserDomainEvent());
            
            _context.Users.Add(user);
            
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
