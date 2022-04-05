using Newtonsoft.Json.Linq;

namespace Allagi.Core
{
    public class Content
    {
        public ContentId ContentId { get; set; }  = new ContentId(Guid.NewGuid());
        public JObject Json { get; set; }
        public string Name { get; set; }
    }
}
