namespace ProjMan23API.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string ContactNo { get; set; }
        public int Department { get; set; }
        public int Unit { get; set; }

    }
}
