using System.ComponentModel.DataAnnotations;

namespace API_fatch.Models
{
    public class UserInfo
    {
        [Key]
        public int UserId { get; set; }
        public string? UserName { get; set; }
        public string? Password { get; set; }
        public string? Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
