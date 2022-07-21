using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Empolyee_Mangement.Data.Models
{
    public class ProjectUpdateModel
    {
        private string projectId { get; set; }
        public string ProjectName { get; set; }
        public string ProjectDescription { get; set; }
        public string Projectduration { get; set; }

    }
}
