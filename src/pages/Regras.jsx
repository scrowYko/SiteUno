import Nav from "../components/NavB"
export default function Regras(){
    return(
        <>
            <header>
                <Nav />
            </header>

            <main>
                <div className="content-container">
                    <p className="text-r">
                    O jogo deve ser jogado por maiores de 7 anos, e entre 2 a 10 jogadores.
                    O baralho é composto por cartas de quatro cores: verde, amarelo, vermelho e azul. 
                    As fileiras de cada cor variam entre 0 e 9. 
                    Existem três ações especiais para cada tipo de cor de carta, identificadas como "pular", "comprar duas" e "inverter". 
                    Há também cartas de ações especiais com fundo preto, "joker" e "coringa comprar quatro". 
                    Para cada carta regular ou de ação, existem duas das mesmas no baralho, com exceção do 0, que só possui uma unidade. 
                    Há quatro "coringas que mudam de cor" e quatro "coringas comprar quatro", o que resulta num total de 108 ou 112 cartas. 
                    Para diferenciar o 6 do 9, é utilizado um sublinhado embaixo da carta respectiva.
                    </p>
                    <img src="./baralho.jpg" alt="Cartas" />
                    <p className="text-r">Ao começar o jogo, são distribuídas sete cartas a cada jogador, e a carta que ficou em cima do baralho é virada para cima, sendo esta a primeira. 
                        Caso essa carta possua uma "habilidade especial" (nomeadamente pular, comprar duas e inverter), ela é tratada como se o jogador que deu as cartas tivesse jogado as mesmas. 
                        Se a carta for um coringa o jogador escolhe a cor que deve começar. Se for um coringa comprar quatro, deve ser devolvida ao baralho. 
                        O jogo começa com a pessoa posicionada ao sentido horário de quem distribuiu as cartas.</p>
                </div>
            </main>
        </>
    )
}