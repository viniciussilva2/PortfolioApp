namespace PortfolioApp.Api.Models
{
    public class RepositorioGitHub
    {
        public string Nome { get; set; } = string.Empty;
        public string Descricao { get; set; } = string.Empty;
        public string UrlHtml { get; set; } = string.Empty;
        public string Linguagem { get; set; } = string.Empty;
        public int ContagemEstrelas { get; set; }
    }
}


