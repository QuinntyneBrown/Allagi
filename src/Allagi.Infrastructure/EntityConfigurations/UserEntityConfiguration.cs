using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Allagi.Core;

namespace Allagi.Infrastructure.EntityConfigurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(e => e.UserId).HasConversion(new UserId.EfCoreValueConverter());
        }
    }
}
