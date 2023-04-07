using Microsoft.EntityFrameworkCore;
using ProjMan23API.Models;

namespace ProjMan23API.Data
{
    public class ProjManDbContext : DbContext
    {
       public ProjManDbContext(DbContextOptions<ProjManDbContext> options) : base(options) { 
        }

        public DbSet<User> Users { get; set; }  
    }
}
