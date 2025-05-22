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
                afirmacao: "afirmação"
            },
            {
                texto: "Vou pra faculdade mesmo..",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Com a escolha, chamada Tomada de Decisão, um profissional da área ira te instruir. No fim de tudo você decide o rumo da sua vida. CLT ou PJ?",
        alternativas: [
            {
                texto: "CLT.",
                afirmacao: "afirmação"
            },
            {
                texto: "PJ.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após a escolha, você realizou uma meta. Qual seria essa meta?",
        alternativas: [
            {
                texto: "Primeiro milhão, corpo dos sonhos... vida bem sucedida financeiramente.",
                afirmacao: "afirmação"
            },
            {
                texto: "Familia, constituir um lar, uma esposa... vida bem sucedida amorosamente.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao final de tudo, você precisa fazer uma escolha. E agora?",
        alternativas: [
            {
                texto: "Deixar sua furtuna para os familiares",
                afirmacao: "afirmação"
            },
            {
                texto: "Ajudar a sociedade com seu dinheiro.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
            }
        ]
    },
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
