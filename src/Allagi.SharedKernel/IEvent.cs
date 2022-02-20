using MediatR;
using System;

namespace Allagi.SharedKernel
{
    public interface IEvent : INotification
    {
        DateTime Created { get; }
        Guid CorrelationId { get; }
        void WithCorrelationIdFrom(IEvent @event);
    }
}