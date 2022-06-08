using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement_Web.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
