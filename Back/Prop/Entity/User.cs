using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

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
        [JsonIgnore]        
        
        public ICollection<Property> Properties { get; set; } = new List<Property>();
        [JsonIgnore]

        public ICollection<Property> FavoriteProperties { get; } = new List<Property>();
    }
}
