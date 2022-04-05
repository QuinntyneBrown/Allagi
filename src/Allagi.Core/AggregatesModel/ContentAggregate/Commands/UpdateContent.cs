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

    public class UpdateContentValidator: AbstractValidator<UpdateContentRequest>
    {
        public UpdateContentValidator()
        {
            RuleFor(request => request.Content).NotNull();
            RuleFor(request => request.Content).SetValidator(new ContentValidator());
        }
    
    }
    public class UpdateContentRequest: IRequest<UpdateContentResponse>
    {
        public ContentDto Content { get; set; }
    }
    public class UpdateContentResponse: ResponseBase
    {
        public ContentDto Content { get; set; }
    }
    public class UpdateContentHandler: IRequestHandler<UpdateContentRequest, UpdateContentResponse>
    {
        private readonly IAllagiDbContext _context;
        private readonly ILogger<UpdateContentHandler> _logger;
    
        public UpdateContentHandler(IAllagiDbContext context, ILogger<UpdateContentHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<UpdateContentResponse> Handle(UpdateContentRequest request, CancellationToken cancellationToken)
        {
            var content = await _context.Contents.SingleAsync(x => x.ContentId == new ContentId(request.Content.ContentId.Value));
            
            content.Json = request.Content.Json;
            content.Name = request.Content.Name;
            
            await _context.SaveChangesAsync(cancellationToken);
            
            return new ()
            {
                Content = content.ToDto()
            };
        }
        
    }

}
