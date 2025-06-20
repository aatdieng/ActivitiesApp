using System;
using ActivitiesApp.Domain;
using Microsoft.EntityFrameworkCore;

namespace ActivitiesApp.Persistence;

public class AppDbContext(DbContextOptions options) : DbContext(options)
{
 public required DbSet<Activity> Activities { get; set; }
}
