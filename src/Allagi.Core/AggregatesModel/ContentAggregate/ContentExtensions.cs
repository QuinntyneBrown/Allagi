using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;

namespace Allagi.Core
{
    public static class ContentExtensions
    {
        public static ContentDto ToDto(this Content content)
        {
            return new ()
            {
                ContentId = content.ContentId.Value,
                Json = content.Json,
                Name = content.Name,
            };
        }
        
        public static async Task<List<ContentDto>> ToDtosAsync(this IQueryable<Content> contents, CancellationToken cancellationToken)
        {
            return await contents.Select(x => x.ToDto()).ToListAsync(cancellationToken);
        }
        
        public static List<ContentDto> ToDtos(this IEnumerable<Content> contents)
        {
            return contents.Select(x => x.ToDto()).ToList();
        }
        
    }
}
