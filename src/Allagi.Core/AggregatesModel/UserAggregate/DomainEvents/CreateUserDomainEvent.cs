namespace Allagi.Core
{
    public class CreateUserDomainEvent
    {
        public UserId UserId { get; private set; } = new UserId(Guid.NewGuid());
        public string Username { get; private set; }

    }
}
