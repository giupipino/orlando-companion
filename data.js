const appData = {
    profiles: [
        { id: "giu", name: "Giu" },
        { id: "ester", name: "Ester" },
        { id: "gabriel", name: "Gabriel" }
    ],
    parks: [
        { id: "home", name: "🏠 Home" },
        { id: "universal", name: "🎬 Universal Studios" },
        { id: "epic", name: "🚀 Epic Universe" },
        { id: "islands", name: "🦖 Islands of Adventure" },
        { id: "magic", name: "🏰 Magic Kingdom" },
        { id: "hollywood", name: "🎥 Hollywood Studios" },
        { id: "animal", name: "🌳 Animal Kingdom" }
    ],
    itinerary: [
        { date: "10/09", title: "Chegada em Orlando ✈️" },
        { date: "11/09", title: "🦁 Disney's Animal Kingdom" },
        { date: "12/09", title: "🎬 Universal Studios + 🧙 Islands of Adventure" },
        { date: "13/09", title: "🌌 Universal Epic Universe" },
        { date: "14/09", title: "🚢 Cruzeiro Disney (Embarque)" },
        { date: "18/09", title: "🏰 Magic Kingdom" },
        { date: "19/09", title: "🛍️ Outlet / Disney Springs & Voo de Retorno" }
    ],
    attractions: [
        {
            id: "u_rockit", park: "universal", name: "Hollywood Rip Ride Rockit", express: true, image: "imagens/Hollywood Rip Ride Rockit.jpeg",
            type: "🎢 Montanha-russa de alta velocidade com subida vertical de 90°.",
            fear: { giu: 10, ester: 8, gabriel: 6 },
            recommendation: {
                giu: "O maior pico de frio na barriga do parque. A subida olhando pro céu dá nervoso, e a primeira queda faz o estômago sair do lugar.",
                ester: "Dá bastante frio na barriga, mas escolher uma música legal ajuda a distrair!",
                gabriel: "Divertida pela trilha sonora, mas chacoalha um pouco."
            }
        },
        {
            id: "u_mummy", park: "universal", name: "Revenge of the Mummy", express: true, image: "",
            type: "=== Montanha-russa no escuro com lançamentos rápidos.",
            fear: { giu: 6, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Tem um lançamento inicial forte e um trecho curto de ré que dão aquele frio na barriga rápido, mas passageiro.",
                ester: "O escuro dá mais impression de velocidade, mas é super tranquila.",
                gabriel: "Cenários excelentes, o trecho de ré é a melhor parte."
            }
        },
        {
            id: "u_gringotts", park: "universal", name: "Harry Potter & Escape from Gringotts", express: true, image: "",
            type: "=== Simulador 3D híbrido com trilhos.",
            fear: { giu: 4, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Uma pequena queda com chacoalhão bem no começo dá um leve frio na barriga, mas o resto é puramente projeção 3D.",
                ester: "Muito imersiva, para ir prestando atenção nos detalhes visuais.",
                gabriel: "Fácil e divertida para qualquer fã da saga."
            }
        },
        {
            id: "u_simpsons", park: "universal", name: "The Simpsons Ride", express: true, image: "",
            type: "=== Simulador de movimento com tela gigante côncava.",
            fear: { giu: 5, ester: 5, gabriel: 2 },
            recommendation: {
                giu: "A tela engana muito o cérebro simulando quedas livres bizarras. Dá sensação visual de frio na barriga e tontura.",
                ester: "Chacoalha demais e a simulação de queda me deixa um pouco zonza.",
                gabriel: "Divertido pelo humor, mas o simulador é um pouco antigo."
            }
        },
        {
            id: "u_minions", park: "universal", name: "Despicable Me Minion Mayhem", express: true, image: "",
            type: "=== Simulador de base móvel 3D.",
            fear: { giu: 3, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Movimentos mais suaves. Tem uma queda virtual logo no início, mas o estômago quase não sente o impacto físico.",
                ester: "Super fofa, movimentos tranquilos de cinema simulator.",
                gabriel: "Puramente infantil, mas bem engraçada."
            }
        },
        {
            id: "u_transformers", park: "universal", name: "TRANSFORMERS: The Ride-3D", express: true, image: "",
            type: "=== Simulador em trilhos com movimentos rápidos.",
            fear: { giu: 3, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "O carrinho gira rápido entre as telas. Há simulações de queda de prédios, mas o frio na barriga físico é mínimo.",
                ester: "Muita ação na tela, mas fisicamente o carrinho só faz giros horizontais.",
                gabriel: "Efeitos de calor e fumaça ótimos durante a simulação."
            }
        },
        {
            id: "u_fallon", park: "universal", name: "Race Through New York Starring Jimmy Fallon", express: true, image: "",
            type: "=== Simulador de teatro voador (estilo cinema).",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "É uma poltrona de cinema grande que se mexe unida. Simula uma corrida com saltos virtuais bem tranquilos.",
                ester: "Sem perigo nenhum, ritmo de passeio de carro virtual.",
                gabriel: "A área de espera com o mascote é melhor que o brinquedo em si."
            }
        },
        {
            id: "u_fast", park: "universal", name: "Fast & Furious - Supercharged", express: true, image: "",
            type: "=== Simulador imersivo dentro de um ônibus.",
            fear: { giu: 1, ester: 1, gabriel: 1 },
            recommendation: {
                giu: "O ônibus apenas treme e finge velocidade usando as telas ao redor. Zero frio na barriga.",
                ester: "Muito morna, dá para ir até descansando.",
                gabriel: "Uma das atrações mais fracas do parque, vá se a fila estiver zerada."
            }
        },
        {
            id: "u_mib", park: "universal", name: "MEN IN BLACK Alien Attack", express: true, image: "",
            type: "=== Carrinho de tiro com giros intensos.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Sem quedas. O único momento de surpresa são os giros rápidos em 360° que o carrinho dá se for atingido.",
                ester: "Competitiva e divertida, os giros não dão tontura.",
                gabriel: "Tente acertar o bônus do botão vermelho no final para pontuar mais."
            }
        },
        {
            id: "u_et", park: "universal", name: "E.T. Adventure", express: true, image: "",
            type: "=== Atração escura clássica (bicicletas suspensas).",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Nostálgico, lento e relaxante. As bicicletas flutuam suavemente pelo cenário. Zero frio na barriga.",
                ester: "Uma gracinha de atração, música calma and cheiro nostálgico de floresta.",
                gabriel: "Um clássico histórico do parque que deve ser respeitado."
            }
        },
        {
            id: "u_minionblast", park: "universal", name: "Villain-Con Minion Blast", express: true, image: "",
            type: "=== Atração de tiro em esteira rolante (de pé).",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você fica de pé em uma esteira andando devagar segurando uma arma laser. Absolutamente nenhum movimento físico.",
                ester: "Diferente por ser de pé, ótimo para passar o tempo.",
                gabriel: "Bom para quem curte jogos interativos e quer pontuar pelo app."
            }
        },
        {
            id: "u_express", park: "universal", name: "Hogwarts Express", express: true, image: "",
            type: "=== Trem temático que conecta os dois parques.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Um trem real e calmo. A graça está nas telas das janelas mostrando os personagens.",
                ester: "Super relaxante e útil para trocar de parque sem andar.",
                gabriel: "A imersão da cabine é perfeita para os fãs."
            }
        },
        {
            id: "u_animals", park: "universal", name: "Animal Actors on Location!", express: true, image: "",
            type: "=== Show ao vivo com animais adestrados.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Sentar no anfiteatro e assistir a cachorros e pássaros fazendo truques. Ritmo totalmente relaxado.",
                ester: "Muito fofo, ótimo para descansar no meio do dia.",
                gabriel: "Show simples, legal para ver uma vez."
            }
        },
        {
            id: "u_bourne", park: "universal", name: "The Bourne Stuntacular", express: true, image: "",
            type: "=== Show de dublês de ação com efeitos especiais.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Você assiste sentado no teatro. Dá aquele susto leve com rajadas de vento e calor das explosões, mas sem impacto físico.",
                ester: "A tecnologia da tela de fundo engana os olhos de tão perfeita. Imperdível!",
                gabriel: "O melhor show de dublês do mundo atualmente, coreografias perfeitas."
            }
        },
        {
            id: "u_makeup", park: "universal", name: "Universal Orlando's Horror Make-Up Show", express: true, image: "",
            type: "=== Show de comédia e efeitos de maquiagem de terror.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Um show de teatro muito engraçado explicando os bastidores de filmes de monstros. Sem sustos pesados.",
                ester: "Focado no humor dos apresentadores, não dá medo nenhum.",
                gabriel: "Muito engraçado e interativo com a plateia."
            }
        },
        {
            id: "e_racers", park: "epic", name: "Stardust Racers", express: true, image: "",
            type: "🚀 Montanha-russa de duelo de alta velocidade (lançamento duplo).",
            fear: { giu: 9, ester: 8, gabriel: 6 },
            recommendation: {
                giu: "Rápida, alta e os carrinhos se cruzam no ar. Os lançamentos dão aquele estômago vazio clássico, mas não vira de ponta-cabeça.",
                ester: "Muita adrenalina e velocidade, mas o trilho é incrivelmente suave.",
                gabriel: "Sensacional à noite, o visual dos carrinhos iluminados imita cometas."
            }
        },
        {
            id: "e_dk", park: "epic", name: "Mine-Cart Madness (Donkey Kong)", express: true, image: "",
            type: "🍌 Montanha-russa de projeção com efeito de 'salto' sobre trilhos.",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "O carrinho parece pular buracos no trilho. Dá pequenos frios na barriga pela surpresa visual, mas não tem quedas colossais.",
                ester: "Diferente de tudo que já andei, a ilusão de ótica te deixa em alerta.",
                gabriel: "A engenharia desse brinquedo é genial, o trilho real fica escondido por baixo."
            }
        },
        {
            id: "e_wolf", park: "epic", name: "Curse of the Werewolf", express: true, image: "",
            type: "🐺 Montanha-russa giratória familiar lancada.",
            fear: { giu: 5, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Ela acelera rápido e o carrinho gira enquanto anda. O frio na barriga vem da mistura de velocidade com a rotação.",
                ester: "Divertida e gostosa, os giros não são tontos como os de xícaras.",
                gabriel: "Visual gótico bem legal, montanha-russa de intensidade média."
            }
        },
        {
            id: "e_frank", park: "epic", name: "Monsters Unchained: Frankenstein Experiment", express: true, image: "",
            type: "🧟 Dark ride de braço robótico de alta movimentação.",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "A garra mecânica te joga para os lados e simula quedas rápidas no escuro enquanto foge dos monstros. Dá frio na barriga físico.",
                ester: "Movimentos intensos e ambiente bem assustador por causa dos monstros clássicos.",
                gabriel: "Tecnologia fantástica, os animatrônicos se movem de forma bizarramente rápida."
            }
        },
        {
            id: "e_ministry", park: "epic", name: "Harry Potter and the Battle at Ministry", express: true, image: "",
            type: "🪄 Dark ride tecnológica de movimentação ágil.",
            fear: { giu: 4, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Os carrinhos se movem subindo e descendo rápido pelo Ministério. Tem uma cena de queda de elevador simulada que dá um frio na barriga rápido.",
                ester: "Cenários imensos e projeções lindas, o movimento do carrinho acompanha a ação.",
                gabriel: "Imersão total, você se sente dentro do filme do Harry Potter."
            }
        },
        {
            id: "e_mariokart", park: "epic", name: "Mario Kart: Bowser’s Challenge", express: true, image: "",
            type: "🍄 Atração interativa com Realidade Aumentada.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Foco total em atirar cascos. Embora o cenário simule velocidade nas pistas, o carrinho físico anda devagar. Zero queda.",
                ester: "Os óculos digitais são super legais, parece que você está no videogame.",
                gabriel: "Viciante para tentar quebrar o recorde de moedas do grupo."
            }
        },
        {
            id: "e_dragonrally", park: "epic", name: "Dragon Racer’s Rally", express: true, image: "",
            type: "🐉 Atração de voo acrobático controlado pelo passageiro.",
            fear: { giu: 7, ester: 6, gabriel: 4 },
            recommendation: {
                giu: "Fica preso em um braço mecânico gigante. Se você operar as asas para fazer o assento girar de ponta-cabeça, a intensidade sobe muito!",
                ester: "Dá para deixar o assento travado se não quiser virar de ponta-cabeça, virando apenas um voo alto.",
                gabriel: "Se você pegar o jeito das asas, dá para girar dezenas de vezes seguidas."
            }
        },
        {
            id: "e_fyredrill", park: "epic", name: "Fyre Drill", express: true, image: "",
            type: "💦 Batalha de barcos com jatos d'água.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Passeio calmo de barco onde o objetivo é atirar água nos alvos. O único risco aqui é sair encharcada, zero frio na barriga.",
                ester: "Vá preparada para se molhar muito se os outros barcos mirarem em você.",
                gabriel: "Brinquedo divertido para dias de muito calor."
            }
        },
        {
            id: "e_gliders", park: "epic", name: "Hiccup’s Wing Gliders", express: true, image: "",
            type: "🍃 Montanha-russa familiar lançada (estilo voo).",
            fear: { giu: 4, ester: 3, gabriel: 2 },
            recommendation: {
                giu: "Simula o voo de um dragão. Tem pequenos lançamentos perto da água, mas é suave, sem quedas abruptas ou loops.",
                ester: "Uma delícia de passeio, dá sensação de liberdade sem dar medo.",
                gabriel: "Excelente visual da área de Como Treinar o Seu Dragão por cima."
            }
        },
        {
            id: "e_carousel", park: "epic", name: "Constellation Carousel", express: true, image: "",
            type: "🌌 Carrossel moderno com constelações giratórias.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "As criaturas giram em 360° e sobem/descem suavemente. Lindo de morrer, principalmente à noite, e super relaxante.",
                ester: "As músicas de fundo e as luzes deixam o ambiente mágico.",
                gabriel: "Atração puramente estética e calma."
            }
        },
        {
            id: "e_astronomica", park: "epic", name: "Astronomica", express: false, image: "",
            type: "⛲ Área de fontes dançantes e interativas com água.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Não é um brinquedo, mas sim uma praça com jatos d'água iluminados que reagem à música. Feito para caminhar.",
                ester: "Legal para tirar fotos com o visual futurista de Celestial Park.",
                gabriel: "Ponto de passagem estético no centro do parque."
            }
        },
        {
            id: "e_yoshi", park: "epic", name: "Yoshi’s Adventure", express: true, image: "",
            type: "🦖 Passeio elevado e lento em carrinhos do Yoshi.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Passeio infantil e contemplativo para ver a área do Mario por cima. Anda a passos de tartaruga. Zero impacto físico.",
                ester: "Fofíssimo, bom para dar um descanso para as pernas e olhar os detalhes da ilha.",
                gabriel: "Fila costuma ser longa para uma atração puramente infantil."
            }
        },
        {
            id: "e_arcanus", park: "epic", name: "Le Cirque Arcanus", express: true, image: "",
            type: "🎪 Show teatral com acrobatas e criaturas mágicas.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Show baseado no universo de Animais Fantásticos. Você assiste tudo sentado confortavelmente no teatro.",
                ester: "Muito bonito e bem produzido, nível de espetáculo do Cirque du Soleil.",
                gabriel: "Ótima opção para preencher a tarde em um ambiente fechado."
            }
        },
        {
            id: "e_untrainable", park: "epic", name: "The Untrainable Dragon", express: true, image: "",
            type: "🎭 Show musical ao vivo com dragões giants voando.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "É lindo, focado na história e nas músicas dos filmes de dragão. Sem sustos ou impactos na plateia.",
                ester: "Os dragões mecânicos gigantes que sobrevoam os assentos são impressionantes.",
                gabriel: "Produção de altíssimo nível da Universal, vale muito a pena conferir."
            }
        },
        {
            id: "e_cinesational", park: "epic", name: "CineSational: A Symphonic Spectacular", express: false, image: "",
            type: "🎆 Show de encerramento com fontes, luzes e fogos.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "O espetáculo noturno no lago central do Epic Universe. Emocionante e visual, assistido de pé ao redor do parque.",
                ester: "As projeções de água com as músicas clássicas de filmes dão arrepios.",
                gabriel: "Melhor jeito de encerrar o dia de parque com chave de ouro."
            }
        },
        {
            id: "i_velocicoaster", park: "islands", name: "Jurassic World VelociCoaster", express: true, image: "",
            type: "🦖 Montanha-russa de lançamento duplo de extrema velocidade com inversões.",
            fear: { giu: 10, ester: 9, gabriel: 7 },
            recommendation: {
                giu: "O ápice do frio na barriga em Orlando. A queda de 47 metros a 80° de inclinação e a sensação de gravidade zero são contínuas e intensas.",
                ester: "Dá muito medo de início, mas o trilho é tão perfeito que não chacoalha nada. Vale a coragem!",
                gabriel: "A melhor montanha-russa do mundo. O looping ao redor da torre é indescritível."
            }
        },
        {
            id: "i_hulk", park: "islands", name: "The Incredible Hulk Coaster", express: true, image: "",
            type: "🤢 Montanha-russa de alta velocidade com lançamento inclinado e 7 loops.",
            fear: { giu: 9, ester: 8, gabriel: 6 },
            recommendation: {
                giu: "O frio na barriga começa com um lançamento surpresa de dentro de um tubo inclinado. Muito intensa na força G física.",
                ester: "Vira de ponta-cabeça o tempo todo e o começo te pega de surpresa. Rosto treme bastante.",
                gabriel: "Clássica e agressiva, dá bastante tontura e pressão na cabeça se for repetida."
            }
        },
        {
            id: "i_hagrid", park: "islands", name: "Hagrid's Magical Creatures Motorbike Adventure", express: false, image: "",
            type: "🏍️ Montanha-russa de lançamento múltiplo com queda vertical de trilho.",
            fear: { giu: 7, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "Os grandes picos de frio na barriga vêm de duas surpresas: um trecho onde o trem anda de ré e uma queda livre onde o trilho inteiro cai alguns metros.",
                ester: "Deliciosa e divertida, se puder escolha ir montada na motocicleta em vez do carrinho lateral.",
                gabriel: "A mais divertida de Orlando. Percurso longo e cheio de acelerações gostosas."
            }
        },
        {
            id: "m_space", park: "magic", name: "Space Mountain", express: true, image: "",
            type: "🚀 Montanha-russa clássica totalmente no escuro.",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "Ela não é rápida nem tem quedas gigantes, mas o fato de ser no breu total faz com que você não veja nada chegando. Fator surpresa total.",
                ester: "O carrinho é de assento individual em fila, balança bastante e o escuro assusta um pouco.",
                gabriel: "Clássico retrô espacial, os trancos nos trilhos antigos são fortes."
            }
        },
        {
            id: "m_tron", park: "magic", name: "TRON Lightcycle / Run", express: true, image: "",
            type: "🏍️ Montanha-russa de lançamento em alta velocidade.",
            fear: { giu: 6, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "O arranque inicial para a área externa dá um frio na barriga ótimo, mas depois ela flui muito suave, sem quedas verticais pesadas.",
                ester: "A posição de ir montada na moto é super diferente e confortável. Uma delícia de velocidade.",
                gabriel: "Visual futurista incrível, mas a pista é um pouco curta, acaba rápido."
            }
        },
        {
            id: "m_tiana", park: "magic", name: "Tiana's Bayou Adventure", express: true, image: "",
            type: "🛶 Passeio de barco na água com uma queda livre grande.",
            fear: { giu: 7, ester: 6, gabriel: 4 },
            recommendation: {
                giu: "O passeio inteiro é calmo e musical, mas termina com uma queda livre clássica de 15 metros. Dá aquele vazio no estômago clássico.",
                ester: "A queda final dá bastante frio na barriga e espirra bastante água na frente.",
                gabriel: "
