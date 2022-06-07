namespace EmployeeManagement_Repository
{
    internal class CompanyManagementContext
    {
        public object Companies { get; internal set; }

        internal Task SaveChangesAsync()
        {
            throw new NotImplementedException();
        }
    }
}