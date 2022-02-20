namespace Allagi.Core
{
    public class User
    {
        public UserId UserId { get; set; }  = new UserId(Guid.NewGuid());
        public string Username { get; set; }
        public string Password { get; set; }

        public User(CreateUserDomainEvent @event)
        {

        }

        private User()
        {

        }
    }
}
