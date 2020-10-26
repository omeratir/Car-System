using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Configuration;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace CarWebApi.Models
{
    public class Car
    {
        [Key]
        public int car_Id { get; set; }

        [Required]
        [MinLength(7)]
        [MaxLength(8)]
        public string car_Number { get; set; }

        [Required]
        [ForeignKey("carType_Id")]
        public int carType_Id { get; set; }
        public CarType carType { get; set; }

        [Required]
        public bool car_4X4 { get; set; }

        public int car_EngineCapacity { get; set; }

        [Required]
        [Range(1700, 2020, ErrorMessage = "Please enter a valid year")]
        public int car_YearProduction { get; set; }

        public string car_Remarks { get; set; }

        [ForeignKey("employee_Id")]
        [AllowNull]
        public int employee_Id { get; set; }
        public Employee Employee { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime car_CareDate { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime car_UpdateDate { get; set; }

    }
}
