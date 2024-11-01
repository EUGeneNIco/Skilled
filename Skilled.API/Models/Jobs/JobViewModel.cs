using Skilled.API.Controllers;
using Skilled.API.Helpers;

namespace Skilled.API.Models.Jobs
{
  public class JobViewModel
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public string CompanyName { get; set; }
    public string Location { get; set; }
    public Setup Setup { get; set; }
    public EmploymentType EmploymentType { get; set; }
    public string JobDescription { get; set; }
    public string Requirements { get; set; }
    public string Salary { get; set; }
    public DateTime PostedDate { get; set; }
    public string PostedDateString => DateTimeHelper.MapToWordValue(PostedDate);
  }
}
