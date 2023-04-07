using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjMan23API.Data;
using ProjMan23API.Models;

namespace ProjMan23API.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController : Controller
    {
        private readonly ProjManDbContext _projManDbContext;
        public UsersController(ProjManDbContext projManDbContext)
        {
            this._projManDbContext= projManDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _projManDbContext.Users.ToListAsync();
            return Ok(users);
        }

        [HttpPost]
        public async Task<IActionResult> AddUsers([FromBody]User user)
        {
            user.Id = Guid.NewGuid();
            await this._projManDbContext.Users.AddAsync(user);
            await this._projManDbContext.SaveChangesAsync();

            return Ok(user);
        }


        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetUsersById([FromRoute] Guid id)
        {
           
           var user =  await this._projManDbContext.Users.FirstOrDefaultAsync(x => x.Id == id);

           if(user == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(user);
            }
        }


        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> EditUser([FromRoute] Guid id, User updatedUserRequest)
        {

            var user = await this._projManDbContext.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }
            else
            {
               user.Name= updatedUserRequest.Name; 
               user.Email= updatedUserRequest.Email;
               user.ContactNo= updatedUserRequest.ContactNo;
               user.Unit= updatedUserRequest.Unit;
               user.Department= updatedUserRequest.Department;

               await this._projManDbContext.SaveChangesAsync();

               return Ok(user);


            }
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteUser([FromRoute] Guid id)
        {

            var user = await this._projManDbContext.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }
            else
            {
                _projManDbContext.Remove(user);
                await _projManDbContext.SaveChangesAsync();    
                return Ok(user);


            }
        }
    }
}
