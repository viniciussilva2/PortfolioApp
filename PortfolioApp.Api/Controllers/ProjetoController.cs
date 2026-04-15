using Microsoft.AspNetCore.Mvc;
using PortfolioApp.Api.Services;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

namespace PortfolioApp.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjetoController : ControllerBase
    {
        private readonly IServicoGitHub _servicoGitHub;
        private readonly IConfiguration _configuracao;

        public ProjetoController(IServicoGitHub servicoGitHub, IConfiguration configuracao)
        {
            _servicoGitHub = servicoGitHub;
            _configuracao = configuracao;
        }

        [HttpGet]
        public async Task<IActionResult> Obter()
        {
            var usuario = _configuracao["GitHub:Username"] ?? "viniciussilva2";
            var projetos = await _servicoGitHub.ObterRepositoriosUsuarioAsync(usuario);
            return Ok(projetos);
        }
    }
}
