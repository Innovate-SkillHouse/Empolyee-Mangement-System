using Microsoft.AspNetCore.Mvc;
using EmployeeManagement_Business;
using EmployeeManagement_Repository.Entities;
using System.Net;
using Empolyee_Mangement.Data;
using Empolyee_Mangement.Data.Models;
using System.Web;
using Newtonsoft.Json;

namespace EmployeeManagement_Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly ILogger<UserController> _logger;
        private readonly UserBusiness userBusiness;


        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
            userBusiness = new UserBusiness();
        }

        [HttpGet("GetAllUser")]
        public async Task<List<User>> GetAllUser()
        {
            return await userBusiness.GetAllUserAsync();
        }
        [HttpGet(Name = "GetUser")]
        public async Task<IActionResult> GetById(int Id)
        {            var usrs = await userBusiness.GetUserAsync(Id);
            return Ok(usrs);
        }
        [HttpPost(Name = "SaveUser")]
        public async Task<HttpStatusCode> SaveUser(User user)
        {
            return await userBusiness.SaveUserAsync(user);
        }
        [HttpPut(Name = "UpdateUser")]
        public async Task<HttpStatusCode> UpdateUser(User user)
        {
            return await userBusiness.UpdateUserAsync(user);
        }
        [HttpDelete(Name = "DeleteUser")]
        public async Task<IActionResult> DeleteById(int Id)
        {
            var usrs = await userBusiness.DeleteUserAsync(Id);
            return Ok(usrs);
        }
        [HttpPost("Login")]
        public async Task<AuthenticationModel> Login(LoginModel loginmodel)
        {
            var login = await userBusiness.Login(loginmodel);
            return login;
        }
    }
}
