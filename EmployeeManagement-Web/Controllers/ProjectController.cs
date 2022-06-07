using EmployeeManagement_Business;
using EmployeeManagement_Repository.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace EmployeeManagement_Web.Controllers;

    [ApiController]
    [Route("[controller]")]
        public class ProjectController : Controller
        {
        private readonly ProjectBuisness projectBusiness;
        public ProjectController()
        {
            this.projectBusiness = new ProjectBuisness();
        }
    [HttpGet("GetAllProject")]
    public async Task<List<Project>> GetAllProject()
    {
        return await projectBusiness.GetAllProjectsAsync();
    }
    [HttpGet(Name = "GetProject")]
    public async Task<IActionResult> GetById(int projectId)
    {
        var alumnus = await projectBusiness.GetProjectAsync(projectId);
        return Ok(alumnus);
    }
    [HttpPost(Name ="SaveProject")]
        public async Task<HttpStatusCode> SaveEmployee(Project project)
        {
            return await this.projectBusiness.SaveProjectAsync(project);
        }
    [HttpPut(Name = "UpdateProject")]
    public async Task<HttpStatusCode> UpdateProject(Project project)
    {
        return await projectBusiness.UpdateProjectAsync(project);
    }
    [HttpDelete(Name = "DeleteProject")]
        public async Task<IActionResult> DeleteById(int projectId)
        {
            var alumnus=await projectBusiness.DeleteProjectAsync(projectId);
            return Ok(alumnus);
        }
}
