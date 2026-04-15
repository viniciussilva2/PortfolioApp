using Microsoft.AspNetCore.Mvc;
using PortfolioApp.Api.Services;

namespace PortfolioApp.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExperienciaController : ControllerBase
    {
        private readonly IServicoExperiencia _servicoExperiencia;

        public ExperienciaController(IServicoExperiencia servicoExperiencia)
        {
            _servicoExperiencia = servicoExperiencia;
        }

        [HttpGet]
        public IActionResult Obter()
        {
            return Ok(_servicoExperiencia.ObterExperiencias());
        }
    }
}
