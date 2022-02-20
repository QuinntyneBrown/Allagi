using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Threading;

namespace Allagi.Core.Interfaces
{
    public interface IAllagiDbContext
    {
        DbSet<User> Users { get; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
        
    }
}
