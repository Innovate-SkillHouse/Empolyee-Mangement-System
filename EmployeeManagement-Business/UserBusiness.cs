using EmployeeManagement_Repository;
using EmployeeManagement_Repository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement_Business
{
    public class UserBusiness
    {
        private readonly UserRepository userRepository;
        public UserBusiness()
        {
            this.userRepository = new UserRepository();
        }


         public async Task<User> GetUserAsync(int Id)
        {
            var usrs = await userRepository.GetById(Id);
            return usrs;
        }
        public async Task<HttpStatusCode> SaveUserAsync(User user)
        {
             await userRepository.Create(user);
            return HttpStatusCode.OK;

        }
        public async Task<HttpStatusCode> UpdateUserAsync(User user)
        {
            await userRepository.Update(user);
            return HttpStatusCode.OK;

        }
        public async Task<HttpStatusCode> DeleteUserAsync(int Id)
        {
             await userRepository.Delete(Id);
            return HttpStatusCode.OK;
        }
        public async Task<List<User>> GetAllUserAsync()
        {
            return await userRepository.GetAllUserAsync();
        }
    }
}
