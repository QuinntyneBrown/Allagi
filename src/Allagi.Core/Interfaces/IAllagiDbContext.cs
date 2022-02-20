using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Threading;

namespace Allagi.Core.Interfaces
{
    public interface IAllagiDbContext
    {
        DbSet<User> Users { get; }
        DbSet<Role> Roles { get; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
        
    }
}
