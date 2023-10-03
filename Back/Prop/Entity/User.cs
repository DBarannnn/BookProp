using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Prop.Entity
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Contacts { get; set; } = string.Empty;
        

        public ICollection<Property> FavoriteProperties { get; } = new List<Property>();
    }
}
