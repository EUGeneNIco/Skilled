using Bogus;
using Microsoft.AspNetCore.Mvc;
using Skilled.API.Models.Jobs;
using Skilled.API.Repositories;

namespace Skilled.API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class JobController : ControllerBase
  {
    private readonly IJobRepository _jobRepository;

    public JobController(IJobRepository jobRepository)
    {
      _jobRepository = jobRepository;
    }

    [HttpGet]
    public IActionResult Get()
    {
      var jobs = _jobRepository.GetJobs();
      var jobsResponse = jobs.Select(x => new JobViewModel
      {
        Id = x.Id,
        Title = x.Title,
        CompanyName = x.CompanyName,
        Location = x.Location,
        Setup = x.Setup,
        EmploymentType = x.EmploymentType,
        JobDescription = x.JobDescription,
        Requirements = x.Requirements,
        Salary = x.Salary,
        PostedDate = x.PostedDate
      });
      return Ok(jobsResponse);
    }
  }
}
