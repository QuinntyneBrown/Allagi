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

    public class GetContentsPageRequest: IRequest<GetContentsPageResponse>
    {
        public int PageSize { get; set; }
        public int Index { get; set; }
    }
    public class GetContentsPageResponse: ResponseBase
    {
        public int Length { get; set; }
        public List<ContentDto> Entities { get; set; }
    }
    public class GetContentsPageHandler: IRequestHandler<GetContentsPageRequest, GetContentsPageResponse>
    {
        private readonly IAllagiDbContext _context;
        private readonly ILogger<GetContentsPageHandler> _logger;
    
        public GetContentsPageHandler(IAllagiDbContext context, ILogger<GetContentsPageHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<GetContentsPageResponse> Handle(GetContentsPageRequest request, CancellationToken cancellationToken)
        {
            var query = from content in _context.Contents
                select content;
            
            var length = await _context.Contents.AsNoTracking().CountAsync();
            
            var contents = await query.Page(request.Index, request.PageSize).AsNoTracking()
                .Select(x => x.ToDto()).ToListAsync();
            
            return new ()
            {
                Length = length,
                Entities = contents
            };
        }
        
    }

}
