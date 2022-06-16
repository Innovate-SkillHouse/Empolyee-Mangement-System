using EmployeeManagement_Repository;
using EmployeeManagement_Repository.Entities;
using Empolyee_Mangement.Data;
using Empolyee_Mangement.Data.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Security.Claims;
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
        public async Task<HttpStatusCode> SaveUserAsync(UserAddModel user)
        {
            var usr=new User();
            usr.FirstName=user.FirstName;
            usr.UserEmail=user.UserEmail;
            usr.Password=user.Password;
            usr.CompanyId = user.CompanyId;
            usr.ProjectId = user.ProjectId;
             await userRepository.Create(usr);
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
        public async Task<AuthenticationModel> Login(LoginModel loginmodel)
        {
            var login = await userRepository.Login(loginmodel.UserEmail, loginmodel.Password);
            var authmodel = new AuthenticationModel();
            authmodel.Name = login.FirstName;
            authmodel.UserId = login.Id;
            authmodel.Email = login.UserEmail;
            return authmodel;
        }
        
    }
}
