using PortfolioApp.Api.Models;
using System.Collections.Generic;

namespace PortfolioApp.Api.Services
{
    public interface IServicoExperiencia
    {
        IEnumerable<Experiencia> ObterExperiencias();
    }

    public class ServicoExperiencia : IServicoExperiencia
    {
        public IEnumerable<Experiencia> ObterExperiencias()
        {
            return new List<Experiencia>
            {
                new Experiencia
                {
                    Empresa = "Netra Tecnologia",
                    Cargo = "Analista de Sistemas",
                    Periodo = "dez de 2025 - o momento",
                    Localizacao = "Salvador, Bahia, Brasil",
                    Atividades = new List<string>
                    {
                        "Desenvolvimento e manutenção do SICCO (Sistema de Controle de Contas).",
                        "Integração de dados com o Portal TCM.",
                        "Construção de interfaces web responsivas.",
                        "Implementação de regras de negócio front-end/back-end."
                    },
                    Tecnologias = new List<string> { ".NET", "ASP.NET MVC", "Razor", "HTML/CSS", "JavaScript", "jQuery", "Clean Code" }
                },
                new Experiencia
                {
                    Empresa = "Tribunal de Contas dos Municípios (TCM-BA)",
                    Cargo = "Desenvolvedor Backend .NET | C#",
                    Periodo = "jul de 2024 - dez de 2025",
                    Localizacao = "Salvador, Bahia, Brasil",
                    Atividades = new List<string>
                    {
                        "Desenvolvimento de Software Web em MVC Architecture.",
                        "Criação de API para o menu 'Decisões' do Portal TCM.",
                        "Manipulação de bancos de dados SQL Server (Queries intermediárias).",
                        "Integração do Frontend-Backend."
                    },
                    Tecnologias = new List<string> { ".NET Core", "C#", "ASP.NET Core", "Razor", "SQL Server", "GitHub", "Scrum", "Postman" }
                },
                new Experiencia
                {
                    Empresa = "Mezzow Tecnologia",
                    Cargo = "Auxiliar em TI",
                    Periodo = "jan de 2022 - jul de 2022",
                    Localizacao = "Remoto",
                    Atividades = new List<string>
                    {
                        "Suporte ao sistema Mezzow Connect.",
                        "Verificação de rotinas e APIs.",
                        "Manutenção de sistemas em Java."
                    },
                    Tecnologias = new List<string> { "Java", "APIs", "DICOM", "Testing" }
                },
                new Experiencia
                {
                    Empresa = "Indra",
                    Cargo = "Analista de Sistemas Trainee / Aprendiz",
                    Periodo = "fev de 2020 - nov de 2021",
                    Localizacao = "Salvador, Bahia, Brasil",
                    Atividades = new List<string>
                    {
                        "Criação de projetos no Azure DevOps.",
                        "Configuração de pipelines Build/Release.",
                        "Suporte a desenvolvedores e atendimento a SLA."
                    },
                    Tecnologias = new List<string> { "Azure DevOps", "Sonar", "Pipelines", "Agile" }
                }
            };
        }
    }
}
