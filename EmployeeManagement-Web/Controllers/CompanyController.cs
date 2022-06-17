﻿using System.Net;
using EmployeeManagement_Business;
using EmployeeManagement_Repository.Entities;
using Empolyee_Mangement.Data.Models;
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

        public CompanyController()
        {
                _logger = logger;
            companyBusiness = new CompanyBuisness();
        }

        [HttpPost("CreateCompany")]
        public async Task<HttpStatusCode> CreateCompany(CompanyAddModel company)
        {
            return await companyBusiness.CreateCompany(company);
        }
        [HttpGet(Name = "GetCompany")]
        public async Task<IActionResult> GetById(int companyId)
        {
            var alumnus = await companyBusiness.GetCompanyAsync(companyId);
            return Ok(alumnus);
        }
        [HttpDelete(Name = "DeleteCompany")]
        public async Task<IActionResult> DeleteById(int companyId)
        {
            var alumnus = await companyBusiness.DeleteCompanyAsync(companyId);
            return Ok(alumnus);
        }
        [HttpGet("GetAllCompanies")]
        public async Task<List<Company>> GetAllCompanies()
        {
            return await companyBusiness.GetAllCompanyAsync();
        }
        [HttpPut("UpdateCompany")]
        public async Task<HttpStatusCode> UpdateCompany(CompanyUpdateModel company)
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
