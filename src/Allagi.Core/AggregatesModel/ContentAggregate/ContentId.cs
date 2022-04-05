using StronglyTypedIds;

namespace Allagi.Core
{
    [StronglyTypedId(backingType: StronglyTypedIdBackingType.Guid, converters: StronglyTypedIdConverter.EfCoreValueConverter)]
    public partial struct ContentId { }
}
