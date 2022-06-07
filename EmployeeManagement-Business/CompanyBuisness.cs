using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using EmployeeManagement_Repository;
using EmployeeManagement_Repository.Entities;
using System.Net;

namespace EmployeeManagement_Business
{
    public class CompanyBuisness
    {
        private readonly CompanyRepository companyRepository;

        public CompanyBuisness()
        {
            companyRepository =new CompanyRepository();
        }

        public async Task<HttpStatusCode> CreateCompany(Company company)
    {
            await companyRepository.Create(company);
            return HttpStatusCode.OK;   
    }
        public async Task<HttpStatusCode> DeleteCompanyAsync(int Id)
        {
            await companyRepository.Delete(Id);
            return HttpStatusCode.OK;

        }
        public async Task<Company> GetCompanyAsync(int Id)
        {
            var alumnus = await companyRepository.GetById(Id);
            return alumnus;
        }
        public async Task<List<Company>> GetAllCompanyAsync()
        {
            return await companyRepository.GetAllCompanyAsync();
        }

        public async Task<HttpStatusCode> UpdateCompanyAsync(Company company)
        {
            await companyRepository.Update(company);
            return HttpStatusCode.OK;

        }

        public Task GetCompanyAsync()
        {
            throw new NotImplementedException();
    }

        public async Task<HttpStatusCode> DeleteCompanyAsync(int Id)
        {
            await companyRepository.Delete(Id);
            return HttpStatusCode.OK;
        }
        public async Task<List<Company>> GetAllCompaniesAsync()
        {
            return await companyRepository.GetAllCompaniesAsync();
        }
    }
}
