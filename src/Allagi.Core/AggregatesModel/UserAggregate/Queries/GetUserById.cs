using Allagi.Core;
using Allagi.Core.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Allagi.Core
{

    public class GetUserByIdRequest: IRequest<GetUserByIdResponse>
    {
        public Guid UserId { get; set; }
    }
    public class GetUserByIdResponse: ResponseBase
    {
        public UserDto User { get; set; }
    }
    public class GetUserByIdHandler: IRequestHandler<GetUserByIdRequest, GetUserByIdResponse>
    {
        private readonly IAllagiDbContext _context;
        private readonly ILogger<GetUserByIdHandler> _logger;
    
        public GetUserByIdHandler(IAllagiDbContext context, ILogger<GetUserByIdHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<GetUserByIdResponse> Handle(GetUserByIdRequest request, CancellationToken cancellationToken)
        {
            return new () {
                User = (await _context.Users.AsNoTracking().SingleOrDefaultAsync(x => x.UserId == new UserId(request.UserId))).ToDto()
            };
        }
        
    }

}
