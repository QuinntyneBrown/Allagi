using Newtonsoft.Json.Linq;

namespace Allagi.Core
{
    public class ContentDto
    {
        public Guid? ContentId { get; set; }
        public JObject Json { get; set; }
        public string Name { get; set; }
    }
}
