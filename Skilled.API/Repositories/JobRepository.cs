using Bogus;
using Skilled.API.Controllers;
using Skilled.API.Models.Jobs;

namespace Skilled.API.Repositories
{
  public interface IJobRepository
  {
    List<JobModel> GetJobs();
  }

  public class JobRepository : IJobRepository
  {
    public List<JobModel> GetJobs()
    {
      var jobs = GenerateFakeData();
      return jobs;
    }

    private List<JobModel> GenerateFakeData()
    {
      var jobIds = 1;
      var testJobs = new Faker<JobModel>()
        .StrictMode(true)
        .RuleFor(x => x.Id, f => jobIds++)
        .RuleFor(j => j.Title, f => f.Name.JobTitle())
        .RuleFor(j => j.CompanyName, f => f.Company.CompanyName())
        .RuleFor(x => x.Setup, f => f.PickRandom<Setup>())
        .RuleFor(j => j.Location, f => f.Address.City())
        .RuleFor(j => j.JobDescription, f => f.Lorem.Paragraphs(4,5))
        .RuleFor(j => j.Requirements, f => f.Lorem.Sentences(3, ","))
        .RuleFor(j => j.Salary, f => $"${f.Random.Int(50000, 150000)} - ${f.Random.Int(150001, 300000)}")
        .RuleFor(x => x.EmploymentType, f => f.PickRandom<EmploymentType>())
        .RuleFor(j => j.PostedDate, f => f.Date.Past(1));

      var jobs = testJobs.Generate(8);
      return jobs;
    }
  }
}
