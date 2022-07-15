using EmployeeManagement_Business;
using EmployeeManagement_Repository.Entities;
using Empolyee_Mangement.Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace EmployeeManagement_Web.Controllers
{
    [ApiController]
    [Route("Empolyee")]
    public class EmployeeController : ApiBaseController
    {

        private readonly ILogger<EmployeeController> _logger;
        private readonly EmployeeBuisness employeeBusiness;


        public EmployeeController(ILogger<EmployeeController> logger)
        {
            _logger = logger;
            employeeBusiness = new EmployeeBuisness();
        }
        [HttpGet("GetAllEmployee")]
        public async Task<List<Employee>> GetAllEmployee()
        {
            var a=await employeeBusiness.GetAllEmployeesAsync();
            return a;
        }
        [HttpGet(Name = "GetEmployee")]
        public async Task<IActionResult> GetById(int employeeId)
        {
            var alumnus = await employeeBusiness.GetEmployeeAsync(employeeId);
            return Ok(alumnus);
        }
        [HttpPost(Name = "SaveEmployee")]
        public async Task<HttpStatusCode> SaveEmployee(EmployeeAddModel employee)
        {
            return await employeeBusiness.SaveEmployeeAsync(employee);
        }
        [HttpPut(Name = "UpdateEmployee")]
        public async Task<HttpStatusCode> UpdateEmployee(EmployeUpdateModel employee)
        {
            return await employeeBusiness.UpdateEmployeeAsync(employee);
        }
        [HttpDelete(Name = "DeleteById")]
        public async Task<IActionResult> DeleteById(int employeeId)
        {
            var alumnus = await employeeBusiness.DeleteEmployeeAsync(employeeId);
            return Ok(alumnus);
        }
    }
}
