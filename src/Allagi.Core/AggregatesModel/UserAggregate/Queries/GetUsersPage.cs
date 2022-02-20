using Allagi.Core;
using Allagi.Core.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Allagi.Core
{

    public class GetUsersPageRequest: IRequest<GetUsersPageResponse>
    {
        public int PageSize { get; set; }
        public int Index { get; set; }
    }
    public class GetUsersPageResponse: ResponseBase
    {
        public int Length { get; set; }
        public List<UserDto> Entities { get; set; }
    }
    public class GetUsersPageHandler: IRequestHandler<GetUsersPageRequest, GetUsersPageResponse>
    {
        private readonly IAllagiDbContext _context;
        private readonly ILogger<GetUsersPageHandler> _logger;
    
        public GetUsersPageHandler(IAllagiDbContext context, ILogger<GetUsersPageHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<GetUsersPageResponse> Handle(GetUsersPageRequest request, CancellationToken cancellationToken)
        {
            var query = from user in _context.Users
                select user;
            
            var length = await _context.Users.AsNoTracking().CountAsync();
            
            var users = await query.Page(request.Index, request.PageSize).AsNoTracking()
                .Select(x => x.ToDto()).ToListAsync();
            
            return new ()
            {
                Length = length,
                Entities = users
            };
        }
        
    }

}
