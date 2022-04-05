using Allagi.Core;
using Allagi.Core.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Allagi.Core
{

    public class GetContentsRequest: IRequest<GetContentsResponse> { }
    public class GetContentsResponse: ResponseBase
    {
        public List<ContentDto> Contents { get; set; }
    }
    public class GetContentsHandler: IRequestHandler<GetContentsRequest, GetContentsResponse>
    {
        private readonly IAllagiDbContext _context;
        private readonly ILogger<GetContentsHandler> _logger;
    
        public GetContentsHandler(IAllagiDbContext context, ILogger<GetContentsHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<GetContentsResponse> Handle(GetContentsRequest request, CancellationToken cancellationToken)
        {
            return new () {
                Contents = await _context.Contents.AsNoTracking().ToDtosAsync(cancellationToken)
            };
        }
        
    }

}
