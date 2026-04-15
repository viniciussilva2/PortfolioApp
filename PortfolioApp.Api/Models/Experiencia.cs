using System.Collections.Generic;

namespace PortfolioApp.Api.Models
{
    public class Experiencia
    {
        public string Empresa { get; set; } = string.Empty;
        public string Cargo { get; set; } = string.Empty;
        public string Periodo { get; set; } = string.Empty;
        public string Localizacao { get; set; } = string.Empty;
        public List<string> Atividades { get; set; } = new();
        public List<string> Tecnologias { get; set; } = new();
    }
}
