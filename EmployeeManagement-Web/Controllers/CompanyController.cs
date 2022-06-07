using EmployeeManagement_Business;
using EmployeeManagement_Repository.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace EmployeeManagement_Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CompanyController : Controller
    {

            private readonly ILogger<CompanyController> _logger;
            private readonly CompanyBuisness companyBusiness;
        private int companyId;

        public CompanyController(ILogger<CompanyController> logger)
            {
                _logger = logger;
                companyBusiness = new CompanyBuisness();
            }

            [HttpGet("GetAllCompany")]
            public async Task<List<Company>> GetAllCompany()
            {
                return await companyBusiness.GetAllCompanyAsync();
            }

        public CompanyBuisness GetCompanyBusiness()
        {
            return companyBusiness;
        }

       /* [HttpGet( "GetCompany")]
        public async Task<IActionResult> GetById(int companyId)
        {
            var alumnus = await companyBusiness.GetCompanyAsync(companyId);
            return Ok(alumnus);
        }*/
        [HttpPost( "SaveCompany")]
            public async Task<HttpStatusCode> SaveCompany(Company company)
            {
                return await companyBusinesCompanyAsync(company);
            }

        private Task<HttpStatusCode> companyBusinesCompanyAsync(Company company)
        {
            throw new NotImplementedException();
        }

        [HttpPut( "UpdateCompany")]
            public async Task<HttpStatusCode> UpdateCompany(Company company)
            {
                return await companyBusiness.UpdateCompanyAsync(company);
            }
            [HttpDelete("DeleteCompany")]
            public async Task<IActionResult> DeleteById(Company company)
            {
                var alumnus = await companyBusiness.DeleteCompanyAsync(companyId);
                return Ok(alumnus);
            }
        }
    }