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

    public class GetContentByIdRequest: IRequest<GetContentByIdResponse>
    {
        public Guid ContentId { get; set; }
    }
    public class GetContentByIdResponse: ResponseBase
    {
        public ContentDto Content { get; set; }
    }
    public class GetContentByIdHandler: IRequestHandler<GetContentByIdRequest, GetContentByIdResponse>
    {
        private readonly IAllagiDbContext _context;
        private readonly ILogger<GetContentByIdHandler> _logger;
    
        public GetContentByIdHandler(IAllagiDbContext context, ILogger<GetContentByIdHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<GetContentByIdResponse> Handle(GetContentByIdRequest request, CancellationToken cancellationToken)
        {
            return new () {
                Content = (await _context.Contents.AsNoTracking().SingleOrDefaultAsync(x => x.ContentId == new ContentId(request.ContentId))).ToDto()
            };
        }
        
    }

}
