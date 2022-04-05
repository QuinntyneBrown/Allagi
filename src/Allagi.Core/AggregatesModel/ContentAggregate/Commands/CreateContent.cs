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

    public class CreateContentValidator: AbstractValidator<CreateContentRequest>
    {
        public CreateContentValidator()
        {
            RuleFor(request => request.Content).NotNull();
            RuleFor(request => request.Content).SetValidator(new ContentValidator());
        }
    
    }
    public class CreateContentRequest: IRequest<CreateContentResponse>
    {
        public ContentDto Content { get; set; }
    }
    public class CreateContentResponse: ResponseBase
    {
        public ContentDto Content { get; set; }
    }
    public class CreateContentHandler: IRequestHandler<CreateContentRequest, CreateContentResponse>
    {
        private readonly IAllagiDbContext _context;
        private readonly ILogger<CreateContentHandler> _logger;
    
        public CreateContentHandler(IAllagiDbContext context, ILogger<CreateContentHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<CreateContentResponse> Handle(CreateContentRequest request, CancellationToken cancellationToken)
        {
            var content = new Content();
            
            _context.Contents.Add(content);
            
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
