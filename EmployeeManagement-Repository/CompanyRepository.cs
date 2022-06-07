using EmployeeManagement_Repository.Entities;

namespace EmployeeManagement_Repository
{
    public class CompanyRepository
    {
        private readonly EmployeeManagementContext dbContext;
        public CompanyRepository()
        {
            this.dbContext = new EmployeeManagementContext();
        }

        public async Task Create(Company company)
        {
            object value = dbContext.Companies.Add(company);
            await dbContext.SaveChangesAsync();
        }

        public Task GetById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task Update(Company company)
        {
            var existingCompany = dbContext.Companies.Where(h => h.Id == company.Id).FirstOrDefault();
            if (existingCompany != null)
            {
                existingCompany.CompanyName = company.CompanyName; // update only changeable properties
                await this.dbContext.SaveChangesAsync();
            }
        }
        public async Task<List<Company>> GetAllCompaniesAsync()
        {
         return   dbContext.Companies.ToList();
        }

        public Task Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
