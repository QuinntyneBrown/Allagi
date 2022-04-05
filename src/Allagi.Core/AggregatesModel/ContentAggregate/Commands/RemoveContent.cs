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

    public class RemoveContentRequest: IRequest<RemoveContentResponse>
    {
        public Guid ContentId { get; set; }
    }
    public class RemoveContentResponse: ResponseBase
    {
        public ContentDto Content { get; set; }
    }
    public class RemoveContentHandler: IRequestHandler<RemoveContentRequest, RemoveContentResponse>
    {
        private readonly IAllagiDbContext _context;
        private readonly ILogger<RemoveContentHandler> _logger;
    
        public RemoveContentHandler(IAllagiDbContext context, ILogger<RemoveContentHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<RemoveContentResponse> Handle(RemoveContentRequest request, CancellationToken cancellationToken)
        {
            var content = await _context.Contents.FindAsync(new ContentId(request.ContentId));
            
            _context.Contents.Remove(content);
            
            await _context.SaveChangesAsync(cancellationToken);
            
            return new ()
            {
                Content = content.ToDto()
            };
        }
        
    }

}
