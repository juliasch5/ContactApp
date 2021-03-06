using System;
using System.Collections.Generic;

namespace ContactsApp.Models
{
    public partial class Contact
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? Category { get; set; }
        public string? Phone { get; set; }
        public DateTime? DateOfBirth { get; set; }
    }
}
