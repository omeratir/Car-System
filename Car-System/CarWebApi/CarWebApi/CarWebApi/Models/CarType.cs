using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CarWebApi.Models
{
    public class CarType
    {
        [Key]
        public int carType_Id { get; set; }

        [Required]
        public string carType_Name { get; set; }

    }
}
