using System;
using ActivitiesApp.Domain;
using ActivitiesApp.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ActivitiesApp.Application.Activities.Queries;

public class GetActivityList
{
    public class Query : IRequest<List<Activity>> { }
    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>>
    {
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Activities.ToListAsync(cancellationToken);
        }
    }
}
