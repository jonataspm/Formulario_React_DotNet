using FormApi.Entities;

namespace FormApi.Service
{
    public class FormService : IFormService
    {
        private static List<Pessoa> pessoas = new List<Pessoa> {
            new Pessoa(),
            new Pessoa{Id = 1,Nome = "egua"}
        };

        public async Task<ServiceResponse<List<Pessoa>>> AddPessoa(Pessoa pessoa)
        {
            var serviceResponse = new ServiceResponse<List<Pessoa>>();

            pessoas.Add(pessoa);

            serviceResponse.Data = pessoas;

            return serviceResponse;
        }

        public async Task<ServiceResponse<Pessoa>> GetPessoaByDocumento(string number)
        {
            var serviceResponse = new ServiceResponse<Pessoa>();
            var person = pessoas.FirstOrDefault(pessoa => pessoa.NumeroDocumento == number);

            if (person != null)
            {
                serviceResponse.Data = person;
                return serviceResponse;
            }
            else
            {
                serviceResponse.Sucess = false;    
                serviceResponse.Mensage = "Não Encontrado";
                return serviceResponse;
            }
        }

        public async Task<ServiceResponse<List<Pessoa>>>GetPessoas()
        {
            var serviceResponse = new ServiceResponse<List<Pessoa>>();
            serviceResponse.Data = pessoas;
            return serviceResponse;
        }
    }
}
