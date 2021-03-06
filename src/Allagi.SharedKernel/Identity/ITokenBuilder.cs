using System.Security.Claims;

namespace Allagi.SharedKernel
{
    public interface ITokenBuilder
    {
        TokenBuilder AddOrUpdateClaim(Claim claim);
        TokenBuilder AddClaim(Claim claim);
        TokenBuilder AddUsername(string username);
        string Build();
        TokenBuilder FromClaimsPrincipal(ClaimsPrincipal claimsPrincipal);
        TokenBuilder RemoveClaim(Claim claim);
    }
}
