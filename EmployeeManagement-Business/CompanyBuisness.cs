
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
            this.companyRepository = new CompanyRepository();
        }

        public CompanyRepository GetCompanyRepository()
        {
            return companyRepository;
        }

     

        public async Task<HttpStatusCode> SaveCompanyAsync(Company company)
        {
            await companyRepository.Create(company);
            return HttpStatusCode.OK;

        }

        public Task<List<Company>> GetAllCompanyAsync()
        {
            throw new NotImplementedException();
        }

        public Task GetAsync(int companyId)
        {
            throw new NotImplementedException();
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