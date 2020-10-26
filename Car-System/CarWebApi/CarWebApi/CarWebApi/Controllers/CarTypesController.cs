using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CarWebApi.Models;

namespace CarWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarTypesController : ControllerBase
    {
        private readonly CarSystemDBContext _context;

        public CarTypesController(CarSystemDBContext context)
        {
            _context = context;
        }

        // GET: api/CarTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CarType>>> GetCarTypeDB()
        {
            return await _context.CarTypeDB.ToListAsync();
        }

        // GET: api/CarTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CarType>> GetCarType(int id)
        {
            var carType = await _context.CarTypeDB.FindAsync(id);

            if (carType == null)
            {
                return NotFound();
            }

            return carType;
        }

        // PUT: api/CarTypes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCarType(int id, CarType carType)
        {
            if (id != carType.carType_Id)
            {
                return BadRequest();
            }

            _context.Entry(carType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarTypeExists(id))
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

        // POST: api/CarTypes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<CarType>> PostCarType(CarType carType)
        {
            _context.CarTypeDB.Add(carType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCarType", new { id = carType.carType_Id }, carType);
        }

        // DELETE: api/CarTypes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CarType>> DeleteCarType(int id)
        {
            var carType = await _context.CarTypeDB.FindAsync(id);
            if (carType == null)
            {
                return NotFound();
            }

            _context.CarTypeDB.Remove(carType);
            await _context.SaveChangesAsync();

            return carType;
        }

        private bool CarTypeExists(int id)
        {
            return _context.CarTypeDB.Any(e => e.carType_Id == id);
        }
    }
}
