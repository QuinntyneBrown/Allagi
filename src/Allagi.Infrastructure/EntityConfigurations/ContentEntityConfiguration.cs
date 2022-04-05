using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Allagi.Core;
using Innofactor.EfCoreJsonValueConverter;

namespace Allagi.Infrastructure.EntityConfigurations
{
    public class ContentConfiguration : IEntityTypeConfiguration<Content>
    {
        public void Configure(EntityTypeBuilder<Content> builder)
        {
            builder.Property(e => e.ContentId).HasConversion(new ContentId.EfCoreValueConverter());
            builder.Property(e => e.Json).HasJsonValueConversion();
        }
    }
}
