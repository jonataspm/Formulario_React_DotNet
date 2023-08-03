using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FormApi.Entities
{
    public class Endereco
    {
        public int Id { get; set; }

        [Required]
        [ForeignKey("PessoaId")]
        public Pessoa Pessoa { get; set; }

        [Required]
        public TipoEndereco Tipo { get; set; }

        [Required]
        public string Logradouro { get; set; }

        [Required]
        public string Numero { get; set; }

        [Required]
        public string Complemento { get; set; }

        [Required]
        public string Bairro { get; set; }

        [Required]
        public string Cidade { get; set; }

        [Required]
        public string Uf { get; set; }
    }
}
