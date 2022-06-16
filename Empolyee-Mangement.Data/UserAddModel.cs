using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Empolyee_Mangement.Data
{
    public  class UserAddModel
    {
        public string FirstName { get; set; }
        public string UserEmail { get; set; }
        public string Password { get; set; }
        public string ProjectId { get; set; }
        public string CompanyId { get; set; }

    }
}
