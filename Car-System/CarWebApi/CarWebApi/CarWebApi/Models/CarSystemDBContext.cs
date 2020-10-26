using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarWebApi.Models
{
    public class CarSystemDBContext: DbContext
    {
        // Datasets of models
        public DbSet<Car> CarDB { get; set; }
        public DbSet<CarType> CarTypeDB { get; set; }
        public DbSet<Employee> EmployeeDB { get; set; }

        public CarSystemDBContext(DbContextOptions<CarSystemDBContext> options) : base(options)
        {

        }
    }
}
