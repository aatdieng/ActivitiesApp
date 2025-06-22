using System;
using ActivitiesApp.Domain;
using AutoMapper;

namespace ActivitiesApp.Application.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
    }
}
