const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma escolha, ir para o serviço militar ou deixar quieto e fazer faculdade. Qual a sua escolha?",
        alternativas: [
            {
                texto: "Partiu servir!",
                afirmacao: "Militar. "
            },
            {
                texto: "Vou pra faculdade mesmo..",
                afirmacao: "Estudante. "
            }
        ]
    },
    {
        enunciado: "Com a escolha, chamada Tomada de Decisão, um profissional da área ira te instruir. No fim de tudo você decide o rumo da sua vida. CLT ou PJ?",
        alternativas: [
            {
                texto: "CLT.",
                afirmacao: "Funcionário. "
            },
            {
                texto: "PJ.",
                afirmacao: "Empresário. "
            }
        ]
    },
    {
        enunciado: "Após a escolha, você realizou uma meta. Qual seria essa meta?",
        alternativas: [
            {
                texto: "Primeiro milhão, corpo dos sonhos... vida bem sucedida financeiramente.",
                afirmacao: "Riqueza. "
            },
            {
                texto: "Familia, constituir um lar, uma esposa... vida bem sucedida amorosamente.",
                afirmacao: "Família. "
            }
        ]
    },
    {
        enunciado: "Ao final de tudo, você precisa fazer uma escolha. E agora?",
        alternativas: [
            {
                texto: "Deixar sua furtuna para os familiares",
                afirmacao: "Filhos. "
            },
            {
                texto: "Ajudar a sociedade com seu dinheiro.",
                afirmacao: "Generosidade. "
            }
        ]
    },
    {
        
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
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
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
