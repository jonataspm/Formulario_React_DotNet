using FormApi.Entities;
using FormApi.Service;
using Microsoft.AspNetCore.Mvc;

namespace FormApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FormsController : ControllerBase
    {
        private readonly IFormService _formService;

        public FormsController(IFormService formService)
        {
            _formService = formService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<List<Pessoa>>> Get()
        {
            return Ok(await _formService.GetPessoas());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Pessoa>>> GetSingle(string id)
        {
            return Ok(await _formService.GetPessoaByDocumento(id));
        }

        [HttpPost("NewPerson")]
        public async Task<ActionResult<List<Pessoa>>> AddPessoa(Pessoa newPerson)
        {
            return Ok(await _formService.AddPessoa(newPerson));
        }
    }
}
