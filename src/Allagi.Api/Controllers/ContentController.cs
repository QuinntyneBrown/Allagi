using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Allagi.Core;
using MediatR;
using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Swashbuckle.AspNetCore.Annotations;
using System.Net.Mime;

namespace Allagi.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces(MediaTypeNames.Application.Json)]
    [Consumes(MediaTypeNames.Application.Json)]
    public class ContentController
    {
        private readonly IMediator _mediator;
        private readonly ILogger<ContentController> _logger;

        public ContentController(IMediator mediator, ILogger<ContentController> logger)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [SwaggerOperation(
            Summary = "Get Content by id.",
            Description = @"Get Content by id."
        )]
        [HttpGet("{contentId:guid}", Name = "getContentById")]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetContentByIdResponse), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<GetContentByIdResponse>> GetById([FromRoute]Guid contentId, CancellationToken cancellationToken)
        {
            var request = new GetContentByIdRequest() { ContentId = contentId };
        
            var response = await _mediator.Send(request, cancellationToken);
        
            if (response.Content == null)
            {
                return new NotFoundObjectResult(request.ContentId);
            }
        
            return response;
        }
        
        [SwaggerOperation(
            Summary = "Get Contents.",
            Description = @"Get Contents."
        )]
        [HttpGet(Name = "getContents")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetContentsResponse), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<GetContentsResponse>> Get(CancellationToken cancellationToken)
        {
            return await _mediator.Send(new GetContentsRequest(), cancellationToken);
        }
        
        [SwaggerOperation(
            Summary = "Create Content.",
            Description = @"Create Content."
        )]
        [HttpPost(Name = "createContent")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(CreateContentResponse), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<CreateContentResponse>> Create([FromBody]CreateContentRequest request, CancellationToken cancellationToken)
        {
            _logger.LogInformation(
                "----- Sending command: {CommandName}: ({@Command})",
                nameof(CreateContentRequest),
                request);
        
            return await _mediator.Send(request, cancellationToken);
        }
        
        [SwaggerOperation(
            Summary = "Get Content Page.",
            Description = @"Get Content Page."
        )]
        [HttpGet("page/{pageSize}/{index}", Name = "getContentsPage")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetContentsPageResponse), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<GetContentsPageResponse>> Page([FromRoute]int pageSize, [FromRoute]int index, CancellationToken cancellationToken)
        {
            var request = new GetContentsPageRequest { Index = index, PageSize = pageSize };
        
            return await _mediator.Send(request, cancellationToken);
        }
        
        [SwaggerOperation(
            Summary = "Update Content.",
            Description = @"Update Content."
        )]
        [HttpPut(Name = "updateContent")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(UpdateContentResponse), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<UpdateContentResponse>> Update([FromBody]UpdateContentRequest request, CancellationToken cancellationToken)
        {
            _logger.LogInformation(
                "----- Sending command: {CommandName} - {IdProperty}: {CommandId} ({@Command})",
                nameof(UpdateContentRequest),
                nameof(request.Content.ContentId),
                request.Content.ContentId,
                request);
        
            return await _mediator.Send(request, cancellationToken);
        }
        
        [SwaggerOperation(
            Summary = "Delete Content.",
            Description = @"Delete Content."
        )]
        [HttpDelete("{contentId:guid}", Name = "removeContent")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(RemoveContentResponse), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<RemoveContentResponse>> Remove([FromRoute]Guid contentId, CancellationToken cancellationToken)
        {
            var request = new RemoveContentRequest() { ContentId = contentId };
        
            _logger.LogInformation(
                "----- Sending command: {CommandName} - {IdProperty}: {CommandId} ({@Command})",
                nameof(RemoveContentRequest),
                nameof(request.ContentId),
                request.ContentId,
                request);
        
            return await _mediator.Send(request, cancellationToken);
        }
        
    }
}
