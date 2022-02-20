using Allagi.Core;
using Allagi.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Linq;

namespace Allagi.Infrastructure.Data
{
    public class AllagiDbContext: DbContext, IAllagiDbContext
    {
        public DbSet<User> Users { get; private set; }
        public DbSet<Role> Roles { get; private set; }
        public AllagiDbContext(DbContextOptions options)
            :base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(AllagiDbContext).Assembly);
        }
        
    }
}
