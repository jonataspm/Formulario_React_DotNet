using System.ComponentModel.DataAnnotations;

namespace FormApi.Entities
{
    public class Pessoa
    {
        public int Id { get; set; }

        [Required]
        public TipoPessoa Tipo { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public string NumeroDocumento { get; set; }

        [Required]
        public string Telefone { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public List<Endereco> Enderecos { get; set; }

    }
}
