using System;
using ActivitiesApp.Domain;
using ActivitiesApp.Persistence;
using MediatR;

namespace ActivitiesApp.Application.Activities.Queries;

public class GetActivityDetails
{
    public class Query : IRequest<Activity>
    {
        public required string Id { get; set; }
    }
    public class Handler(AppDbContext context) : IRequestHandler<Query, Activity>
    {
        public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Id], cancellationToken);
            if (activity == null) throw new Exception("Activity not found");
            return activity;
        }
    }
}
