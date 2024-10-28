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
      return Ok(jobs);
    }
  }
}
