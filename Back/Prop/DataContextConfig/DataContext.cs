using Microsoft.EntityFrameworkCore;
using Prop.Entity;

namespace Prop.DataContextConfig
{
    public class DataContext : DbContext
    {
     
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Data Source=PC2\\SQLEXPRESS;Database=Property;Trusted_Connection=true;TrustServerCertificate=true");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasMany(e => e.FavoriteProperties)
                .WithMany(e => e.FavoriteUsers);
                

        }

        public DbSet<Property> Properties { get; }
        public DbSet<User> Users { get; }
    }
}
