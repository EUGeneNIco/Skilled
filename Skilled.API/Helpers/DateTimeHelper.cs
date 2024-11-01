namespace Skilled.API.Helpers
{
  public class DateTimeHelper
  {
    public static string MapToWordValue(DateTime date)
    {
      var timeSpan = DateTime.Now - date;
      var hours = Convert.ToInt32(timeSpan.TotalHours);

      if (hours == 0)
        return string.Empty;

      if (hours <= 24)
      {
        return $"{hours}h ago";
      }
      else
      {
        var days = Convert.ToInt32(timeSpan.TotalDays);
        var res = $"{days}d ago";

        if (days > 30)
          res = days > 60 ? "months ago" : "1 month ago";

        return res;
      }
    }
  }
}
