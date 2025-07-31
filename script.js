const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma escolha: ir para o serviço militar ou fazer faculdade. Qual a sua escolha?",
        alternativas: [
            { texto: "Partiu servir!", afirmacao: "Militar." },
            { texto: "Vou pra faculdade mesmo...", afirmacao: "Estudante." }
        ]
    },
    {
        enunciado: "Com a escolha feita, um profissional te instrui. No fim, você decide o rumo da sua vida: CLT ou PJ?",
        alternativas: [
            { texto: "CLT.", afirmacao: "Funcionário." },
            { texto: "PJ.", afirmacao: "Empresário." }
        ]
    },
    {
        enunciado: "Após a escolha, você realiza uma meta. Qual seria essa meta?",
        alternativas: [
            { texto: "Primeiro milhão, corpo dos sonhos... vida bem sucedida financeiramente.", afirmacao: "Riqueza." },
            { texto: "Família, constituir um lar, uma esposa... vida bem sucedida amorosamente.", afirmacao: "Família." }
        ]
    },
    {
        enunciado: "Ao final de tudo, você precisa fazer uma escolha. E agora?",
        alternativas: [
            { texto: "Deixar sua fortuna para os familiares.", afirmacao: "Filhos." },
            { texto: "Ajudar a sociedade com seu dinheiro.", afirmacao: "Generosidade." }
        ]
    }
];

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
    caixaAlternativas.innerHTML = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Gabarito: ";
    textoResultado.textContent = historiaFinal.trim();
    caixaAlternativas.innerHTML = "";
}

mostraPergunta();
