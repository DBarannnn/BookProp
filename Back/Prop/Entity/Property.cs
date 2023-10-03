using Prop.Enum;
using System.ComponentModel.DataAnnotations;

namespace Prop.Entity
{
    public class Property
    {
        public int Id { get; set; }
        public PropType Type { get; set; } 

        public int Price { get; set; }
        public string Description { get; set; } = string.Empty;

        public DateTime CreatedAt { get; set; }

        public ICollection<User> FavoriteUsers { get; }
        
    }
}
