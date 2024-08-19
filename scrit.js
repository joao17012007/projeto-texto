const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-reultado");

const perguntas = [
    {
        enunciado: "Como você vê o desempenho futuro do Corinthians em competições internacionais?",
        alternativas: [
            {
                texto: "O Corinthians será um dos times mais fortes da América do Sul, ganhando títulos importantes.",
                afirmação: "O Corinthians será um dos times mais fortes da América do Sul, ganhando títulos importantes em competições internacionais."
            },
            {
                texto: "O Corinthians terá dificuldades em competições internacionais, raramente passando da fase de grupos.",
                afirmação: "O Corinthians terá dificuldades em competições internacionais, raramente passando da fase de grupos. "
            }
        ]
    },
    {
        enunciado: "Qual é a sua expectativa para a gestão financeira do clube nos próximos anos?",
        alternativas: [
            {
                texto:  "O clube vai conseguir equilibrar suas finanças, aumentando receitas e diminuindo dívidas.",
                afirmação: "O clube vai conseguir equilibrar suas finanças, aumentando receitas e diminuindo dívidas."
            },
            {
                texto: "O Corinthians continuará enfrentando problemas financeiros, acumulando dívidas e atrasando salários.",
                afirmação: "O clube continuará enfrentando problemas financeiros, acumulando dívidas e atrasando salários."
            }
        ]

    },
    {
        enunciado: "Como você imagina o futuro das categorias de base do Corinthians?",
        alternativas: [
            {
                texto: "As categorias de base revelarão novos talentos que se destacarão no time principal e até no cenário internacional.",
                afirmação: " As categorias de base revelarão novos talentos que se destacarão no time principal e até no cenário internacional."
            },
            {
                texto: "As categorias de base enfrentarão dificuldades para formar jogadores de destaque, impactando negativamente o time principal.",
                afirmação: "s categorias de base enfrentarão dificuldades para formar jogadores de destaque, impactando negativamente o time principal. "
            }
        ]
    },
    {
        enunciado: "Qual será o papel da torcida na trajetória do clube?",
        alternativas: [
            {
                texto: "A torcida continuará sendo um dos pilares de apoio, incentivando e mobilizando o time em momentos cruciais.",
                afirmação: "A torcida continuará sendo um dos pilares de apoio, incentivando e mobilizando o time em momentos cruciais."
            },
            {
                texto: "A torcida ficará desiludida com os resultados, reduzindo sua presença nos estádios e seu apoio ao clube.",
        
                afirmação:  "A torcida ficará desiludida com os resultados, reduzindo sua presença nos estádios e seu apoio ao clube."
            }
        ]
    },
    {
        enunciado: "Como você vê a infraestrutura e o estádio do Corinthians nos próximos anos?",
        alternativas: [
            {
                texto: "A infraestrutura e o estádio continuarão evoluindo, proporcionando uma melhor experiência para jogadores e torcedores.",
                afirmação: "A infraestrutura e o estádio continuarão evoluindo, proporcionando uma melhor experiência para jogadores e torcedores."
            },
            {
                texto: "A infraestrutura e o estádio enfrentarão problemas de manutenção, gerando críticas e insatisfação entre os torcedores.",
                afirmação: "A infraestrutura e o estádio enfrentarão problemas de manutenção, gerando críticas e insatisfação entre os torcedores."
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
      if (atual >= pergunta.lenght) {
        mostraResultado();
        return;
      }
      perguntaAtual = perguntas[atual];
      caixaPerguntas.textContent = perguntaAtual.enunciado;
      caixaAlternativas.textContent = "";
      mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);

    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmação;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function motraResultado() {
    caixaPerguntas.textContent = ".....";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();