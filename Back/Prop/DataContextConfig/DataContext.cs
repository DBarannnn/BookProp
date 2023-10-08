using Microsoft.EntityFrameworkCore;
using Prop.Entity;

namespace Prop.DataContextConfig
{
    public class DataContext : DbContext
    {


        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
       
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasMany(e => e.FavoriteProperties)
                .WithMany(e => e.FavoriteUsers);

            modelBuilder.Entity<User>()
                .HasMany(e => e.Properties)
                .WithOne(e => e.UserOwner);
                

        }

        public DbSet<Property> Properties { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
