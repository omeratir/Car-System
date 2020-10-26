using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CarWebApi.Models
{
    public class Employee
    {
        [Key]
        public int employee_Id { get; set; }

        [Required]
        public string employee_FirstName { get; set; }

        [Required]
        public string employee_LastName { get; set; }
    }
}
