using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CarWebApi.Models;
using Xunit.Abstractions;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace CarWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly CarSystemDBContext _context;

        public CarsController(CarSystemDBContext context)
        {
            _context = context;
        }

        // GET: api/Cars
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Car>>> GetCarDB()
        {
            List<Car> cars = await _context.CarDB.ToListAsync();
            cars.ForEach(car =>
            {
                car.carType = _context.CarTypeDB.Find(car.carType_Id);
                if (car.employee_Id > 0)
                {
                    car.Employee = _context.EmployeeDB.Find(car.employee_Id);
                }
            });
            return cars;
        }

        // GET: api/Cars/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Car>> GetCar(int id)
        {
            var car = await _context.CarDB.FindAsync(id);

            if (car == null)
            {
                return NotFound();
            }

            return car;
        }

        // PUT: api/Cars/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCar(int id, Car car)
        {
            if (id != car.car_Id)
            {
                return BadRequest();
            }

            if (_context.CarDB.Any(c => (c.car_Number.Equals(car.car_Number)) && (c.car_Id != id )))
            {
                return BadRequest("Car Number already exists. Please enter a different Car Number.");
            }

            _context.Entry(car).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cars
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Car>> PostCar(Car car)
        {
            if (_context.CarDB.Any(c => c.car_Number.Equals(car.car_Number)))
            {
                return BadRequest("Car Number already exists. Please enter a different Car Number.");
            }

            _context.CarDB.Add(car);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCar", new { id = car.car_Id }, car);
        }

        // DELETE: api/Cars/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Car>> DeleteCar(int id)
        {
            var car = await _context.CarDB.FindAsync(id);
            if (car == null)
            {
                return NotFound();
            }

            _context.CarDB.Remove(car);
            await _context.SaveChangesAsync();

            return car;
        }

        private bool CarExists(int id)
        {
            return _context.CarDB.Any(e => e.car_Id == id);
        }
    }
}
