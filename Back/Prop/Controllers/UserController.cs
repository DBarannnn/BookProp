using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Prop.DataContextConfig;
using Prop.Entity;

namespace Prop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;
        public UserController(DataContext context)
        {
            _context = context; 
        }

        [HttpGet(Name = "GetUsers")]
        public async Task<ActionResult<List<Property>>> GetProperties()
        {
            return Ok(await _context.Users.ToListAsync());
        }
        
        
        





    }
}
