using System.Text.Json;
using PortfolioApp.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Net.Http;
using System.Linq;

namespace PortfolioApp.Api.Services
{
    public interface IServicoGitHub
    {
        Task<IEnumerable<RepositorioGitHub>> ObterRepositoriosUsuarioAsync(string usuario);
    }

    public class ServicoGitHub : IServicoGitHub
    {
        private readonly HttpClient _httpClient;

        public ServicoGitHub(HttpClient httpClient)
        {
            _httpClient = httpClient;
            _httpClient.DefaultRequestHeaders.Add("User-Agent", "PortfolioApp");
        }

        public async Task<IEnumerable<RepositorioGitHub>> ObterRepositoriosUsuarioAsync(string usuario)
        {
            var resposta = await _httpClient.GetAsync($"https://api.github.com/users/{usuario}/repos?sort=updated&per_page=6");
            
            if (!resposta.IsSuccessStatusCode)
                return Enumerable.Empty<RepositorioGitHub>();

            var conteudo = await resposta.Content.ReadAsStringAsync();
            var opcoes = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower };
            
            var githubRepos = JsonSerializer.Deserialize<List<RepositorioDto>>(conteudo, opcoes);
            
            return githubRepos?.Select(r => new RepositorioGitHub
            {
                Nome = r.Name,
                Descricao = r.Description,
                UrlHtml = r.HtmlUrl,
                Linguagem = r.Language,
                ContagemEstrelas = r.StargazersCount
            }) ?? Enumerable.Empty<RepositorioGitHub>();
        }

        private class RepositorioDto
        {
            public string Name { get; set; } = string.Empty;
            public string Description { get; set; } = string.Empty;
            public string HtmlUrl { get; set; } = string.Empty;
            public string Language { get; set; } = string.Empty;
            public int StargazersCount { get; set; }
        }
    }

}
