using FormApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace FormApi.Persistence
{
    public class FormDbContext:DbContext
    {
        public FormDbContext(DbContextOptions<FormDbContext> options) : base(options) { }

        public DbSet<Pessoa> Pessoas { get; set; }
        public DbSet<Endereco> Enderecos { get; set; }  
    }
}
