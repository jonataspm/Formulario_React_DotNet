using FormApi.Entities;

namespace FormApi.Service
{
    public interface IFormService
    {

        Task<ServiceResponse<List<Pessoa>>> GetPessoas();
        Task<ServiceResponse<Pessoa>> GetPessoaByDocumento(string number);
        Task<ServiceResponse<List<Pessoa>>> AddPessoa(Pessoa pessoa);


    }
}
