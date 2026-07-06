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
        { date: "10/10", park: "Chegada em Orlando ✈️" },
        { date: "11/10", park: "🎬 Universal Studios Florida" },
        { date: "12/10", park: "🚀 Universal Epic Universe" },
        { date: "13/10", park: "🦖 Universal Islands of Adventure" },
        { date: "14/10", park: "🏰 Magic Kingdom" },
        { date: "15/10", park: "🎥 Disney's Hollywood Studios" },
        { date: "16/10", park: "🌳 Disney's Animal Kingdom" }
    ],
    attractions: [
        // ==================== UNIVERSAL STUDIOS ====================
        {
            id: "u_rockit", park: "universal", name: "Hollywood Rip Ride Rockit", express: true,
            type: "🎢 Montanha-russa de alta velocidade com subida vertical de 90°.",
            image: "https://images.unsplash.com/photo-1624823183493-45041fc86a42?w=500&q=80",
            fear: { giu: 10, ester: 8, gabriel: 6 },
            recommendation: {
                giu: "O maior pico de frio na barriga do parque. A subida olhando pro céu dá nervoso, e a primeira queda faz o estômago sair do lugar.",
                ester: "Dá bastante frio na barriga, mas escolher uma música legal ajuda a distrair!",
                gabriel: "Divertida pela trilha sonora, mas chacoalha um pouco."
            }
        },
        {
            id: "u_mummy", park: "universal", name: "Revenge of the Mummy", express: true,
            type: "🧟 Montanha-russa no escuro com lançamentos rápidos.",
            image: "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=500&q=80",
            fear: { giu: 6, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Tem um lançamento inicial forte e um trecho curto de ré que dão aquele frio na barriga rápido, mas passageiro.",
                ester: "O escuro dá mais impressão de velocidade, mas é super tranquila.",
                gabriel: "Cenários excelentes, o trecho de ré é a melhor parte."
            }
        },
        {
            id: "u_gringotts", park: "universal", name: "Harry Potter & Escape from Gringotts", express: true,
            type: "🧙‍♂️ Simulador 3D híbrido com trilhos.",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=80",
            fear: { giu: 4, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Uma pequena queda com chacoalhão bem no começo dá um leve frio na barriga, mas o resto é puramente projeção 3D.",
                ester: "Muito imersiva, para ir prestando atenção nos detalhes visuais.",
                gabriel: "Fácil e divertida para qualquer fã da saga."
            }
        },
        {
            id: "u_simpsons", park: "universal", name: "The Simpsons Ride", express: true,
            type: "🍩 Simulador de movimento com tela gigante côncava.",
            image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=500&q=80",
            fear: { giu: 5, ester: 5, gabriel: 2 },
            recommendation: {
                giu: "A tela engana muito o cérebro simulando quedas livres bizarras. Dá sensação visual de frio na barriga e tontura.",
                ester: "Chacoalha demais e a simulação de queda me deixa um pouco zonza.",
                gabriel: "Divertido pelo humor, mas o simulador é um pouco antigo."
            }
        },
        {
            id: "u_minions", park: "universal", name: "Despicable Me Minion Mayhem", express: true,
            type: "🍌 Simulador de base móvel 3D.",
            image: "https://images.unsplash.com/photo-1608889174637-3c44f6326f1a?w=500&q=80",
            fear: { giu: 3, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Movimentos mais suaves. Tem uma queda virtual logo no início, mas o estômago quase não sente o impacto físico.",
                ester: "Super fofa, movimentos tranquilos de cinema simulator.",
                gabriel: "Puramente infantil, mas bem engraçada."
            }
        },
        {
            id: "u_transformers", park: "universal", name: "TRANSFORMERS: The Ride-3D", express: true,
            type: "🤖 Simulador em trilhos com movimentos rápidos.",
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80",
            fear: { giu: 3, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "O carrinho gira rápido entre as telas. Há simulações de queda de prédios, mas o frio na barriga físico é mínimo.",
                ester: "Muita ação na tela, mas fisicamente o carrinho só faz giros horizontais.",
                gabriel: "Efeitos de calor e fumaça ótimos durante a simulação."
            }
        },
        {
            id: "u_fallon", park: "universal", name: "Race Through New York Starring Jimmy Fallon", express: true,
            type: "🗽 Simulador de teatro voador (estilo cinema).",
            image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&q=80",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "É uma poltrona de cinema grande que se mexe unida. Simula uma corrida com saltos virtuais bem tranquilos.",
                ester: "Sem perigo nenhum, ritmo de passeio de carro virtual.",
                gabriel: "A área de espera com o mascote é melhor que o brinquedo em si."
            }
        },
        {
            id: "u_fast", park: "universal", name: "Fast & Furious - Supercharged", express: true,
            type: "🚘 Simulador imersivo dentro de um ônibus.",
            image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&q=80",
            fear: { giu: 1, ester: 1, gabriel: 1 },
            recommendation: {
                giu: "O ônibus apenas treme e finge velocidade usando as telas ao redor. Zero frio na barriga.",
                ester: "Muito morna, dá para ir até descansando.",
                gabriel: "Uma das atrações mais fracas do parque, vá se a fila estiver zerada."
            }
        },
        {
            id: "u_mib", park: "universal", name: "MEN IN BLACK Alien Attack", express: true,
            type: "🔫 Carrinho de tiro com giros intensos.",
            image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&q=80",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Sem quedas. O único momento de surpresa são os giros rápidos em 360° que o carrinho dá se for atingido.",
                ester: "Competitiva e divertida, os giros não dão tontura.",
                gabriel: "Tente acertar o bônus do botão vermelho no final para pontuar mais."
            }
        },
        {
            id: "u_et", park: "universal", name: "E.T. Adventure", express: true,
            type: "🚲 Atração escura clássica (bicicletas suspensas).",
            image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Nostálgico, lento e relaxante. As bicicletas flutuam suavemente pelo cenário. Zero frio na barriga.",
                ester: "Uma gracinha de atração, música calma e cheiro nostálgico de floresta.",
                gabriel: "Um clássico histórico do parque que deve ser respeitado."
            }
        },
        {
            id: "u_minionblast", park: "universal", name: "Villain-Con Minion Blast", express: true,
            type: "🎯 Atração de tiro em esteira rolante (de pé).",
            image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você fica de pé em uma esteira andando devagar segurando uma arma laser. Absolutamente nenhum movimento físico.",
                ester: "Diferente por ser de pé, ótimo para passar o tempo.",
                gabriel: "Bom para quem curte jogos interativos e quer pontuar pelo app."
            }
        },
        {
            id: "u_express", park: "universal", name: "Hogwarts Express", express: true,
            type: "🚂 Trem temático que conecta os dois parques.",
            image: "https://images.unsplash.com/photo-1532105956626-ce5c407b4965?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Um trem real e calmo. A graça está nas telas das janelas mostrando os personagens.",
                ester: "Super relaxante e útil para trocar de parque sem andar.",
                gabriel: "A imersão da cabine é perfeita para os fãs."
            }
        },
        {
            id: "u_animals", park: "universal", name: "Animal Actors on Location!", express: true,
            type: "🐾 Show ao vivo com animais adestrados.",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Sentar no anfiteatro e assistir a cachorros e pássaros fazendo truques. Ritmo totalmente relaxado.",
                ester: "Muito fofo, ótimo para descansar no meio do dia.",
                gabriel: "Show simples, legal para ver uma vez."
            }
        },
        {
            id: "u_bourne", park: "universal", name: "The Bourne Stuntacular", express: true,
            type: "💥 Show de dublês de ação com efeitos especiais.",
            image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Você assiste sentado no teatro. Dá aquele susto leve com rajadas de vento e calor das explosões, mas sem impacto físico.",
                ester: "A tecnologia da tela de fundo engana os olhos de tão perfeita. Imperdível!",
                gabriel: "O melhor show de dublês do mundo atualmente, coreografias perfeitas."
            }
        },
        {
            id: "u_makeup", park: "universal", name: "Universal Orlando's Horror Make-Up Show", express: true,
            type: "🎭 Show de comédia e efeitos de maquiagem de terror.",
            image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Um show de teatro muito engraçado explicando os bastidores de filmes de monstros. Sem sustos pesados.",
                ester: "Focado no humor dos apresentadores, não dá medo nenhum.",
                gabriel: "Muito engraçado e interativo com a plateia."
            }
        },

        // ==================== EPIC UNIVERSE ====================
        {
            id: "e_racers", park: "epic", name: "Stardust Racers", express: true,
            type: "🚀 Montanha-russa de duelo de alta velocidade (lançamento duplo).",
            image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=500&q=80",
            fear: { giu: 9, ester: 8, gabriel: 6 },
            recommendation: {
                giu: "Rápida, alta e os carrinhos se cruzam no ar. Os lançamentos dão aquele estômago vazio clássico, mas não vira de ponta-cabeça.",
                ester: "Muita adrenalina e velocidade, mas o trilho é incrivelmente suave.",
                gabriel: "Sensacional à noite, o visual dos carrinhos iluminados imita cometas."
            }
        },
        {
            id: "e_dk", park: "epic", name: "Mine-Cart Madness (Donkey Kong)", express: true,
            type: "🍌 Montanha-russa de projeção com efeito de 'salto' sobre trilhos.",
            image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=500&q=80",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "O carrinho parece pular buracos no trilho. Dá pequenos frios na barriga pela surpresa visual, mas não tem quedas colossais.",
                ester: "Diferente de tudo que já andei, a ilusão de ótica te deixa em alerta.",
                gabriel: "A engenharia desse brinquedo é genial, o trilho real fica escondido por baixo."
            }
        },
        {
            id: "e_wolf", park: "epic", name: "Curse of the Werewolf", express: true,
            type: "🐺 Montanha-russa giratória familiar lancada.",
            image: "https://images.unsplash.com/photo-1501250936830-e4099351e7f9?w=500&q=80",
            fear: { giu: 5, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Ela acelera rápido e o carrinho gira enquanto anda. O frio na barriga vem da mistura de velocidade com a rotação.",
                ester: "Divertida e gostosa, os giros não são tontos como os de xícaras.",
                gabriel: "Visual gótico bem legal, montanha-russa de intensidade média."
            }
        },
        {
            id: "e_frank", park: "epic", name: "Monsters Unchained: Frankenstein Experiment", express: true,
            type: "🧟 Dark ride de braço robótico de alta movimentação.",
            image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=500&q=80",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "A garra mecânica te joga para os lados e simula quedas rápidas no escuro enquanto foge dos monstros. Dá frio na barriga físico.",
                ester: "Movimentos intensos e ambiente bem assustador por causa dos monstros clássicos.",
                gabriel: "Tecnologia fantástica, os animatrônicos se movem de forma bizarramente rápida."
            }
        },
        {
            id: "e_ministry", park: "epic", name: "Harry Potter and the Battle at Ministry", express: true,
            type: "🪄 Dark ride tecnológica de movimentação ágil.",
            image: "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?w=500&q=80",
            fear: { giu: 4, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Os carrinhos se movem subindo e descendo rápido pelo Ministério. Tem uma cena de queda de elevador simulada que dá um frio na barriga rápido.",
                ester: "Cenários imensos e projeções lindas, o movimento do carrinho acompanha a ação.",
                gabriel: "Imersão total, você se sente dentro do filme do Harry Potter."
            }
        },
        {
            id: "e_mariokart", park: "epic", name: "Mario Kart: Bowser’s Challenge", express: true,
            type: "🍄 Atração interativa com Realidade Aumentada.",
            image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=500&q=80",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Foco total em atirar cascos. Embora o cenário simule velocidade nas pistas, o carrinho físico anda devagar. Zero queda.",
                ester: "Os óculos digitais são super legais, parece que você está no videogame.",
                gabriel: "Viciante para tentar quebrar o recorde de moedas do grupo."
            }
        },
        {
            id: "e_dragonrally", park: "epic", name: "Dragon Racer’s Rally", express: true,
            type: "🐉 Atração de voo acrobático controlado pelo passageiro.",
            image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=500&q=80",
            fear: { giu: 7, ester: 6, gabriel: 4 },
            recommendation: {
                giu: "Fica preso em um braço mecânico gigante. Se você operar as asas para fazer o assento girar de ponta-cabeça, a intensidade sobe muito!",
                ester: "Dá para deixar o assento travado se não quiser virar de ponta-cabeça, virando apenas um voo alto.",
                gabriel: "Se você pegar o jeito das asas, dá para girar dezenas de vezes seguidas."
            }
        },
        {
            id: "e_fyredrill", park: "epic", name: "Fyre Drill", express: true,
            type: "💦 Batalha de barcos com jatos d'água.",
            image: "https://images.unsplash.com/photo-1500347872941-8414f7c8f0db?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Passeio calmo de barco onde o objetivo é atirar água nos alvos. O único risco aqui é sair encharcada, zero frio na barriga.",
                ester: "Vá preparada para se molhar muito se os outros barcos mirarem em você.",
                gabriel: "Brinquedo divertido para dias de muito calor."
            }
        },
        {
            id: "e_gliders", park: "epic", name: "Hiccup’s Wing Gliders", express: true,
            type: "🍃 Montanha-russa familiar lançada (estilo voo).",
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&q=80",
            fear: { giu: 4, ester: 3, gabriel: 2 },
            recommendation: {
                giu: "Simula o voo de um dragão. Tem pequenos lançamentos perto da água, mas é suave, sem quedas abruptas ou loops.",
                ester: "Uma delícia de passeio, dá sensação de liberdade sem dar medo.",
                gabriel: "Excelente visual da área de Como Treinar o Seu Dragão por cima."
            }
        },
        {
            id: "e_carousel", park: "epic", name: "Constellation Carousel", express: true,
            type: "🌌 Carrossel moderno com constelações giratórias.",
            image: "https://images.unsplash.com/photo-1572912444321-df54f15d2a75?w=500&q=80",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "As criaturas giram em 360° e sobem/descem suavemente. Lindo de morrer, principalmente à noite, e super relaxante.",
                ester: "As músicas de fundo e as luzes deixam o ambiente mágico.",
                gabriel: "Atração puramente estética e calma."
            }
        },
        {
            id: "e_astronomica", park: "epic", name: "Astronomica", express: false,
            type: "⛲ Área de fontes dançantes e interativas com água.",
            image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Não é um brinquedo, mas sim uma praça com jatos d'água iluminados que reagem à música. Feito para caminhar.",
                ester: "Legal para tirar fotos com o visual futurista de Celestial Park.",
                gabriel: "Ponto de passagem estético no centro do parque."
            }
        },
        {
            id: "e_yoshi", park: "epic", name: "Yoshi’s Adventure", express: true,
            type: "🦖 Passeio elevado e lento em carrinhos do Yoshi.",
            image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Passeio infantil e contemplativo para ver a área do Mario por cima. Anda a passos de tartaruga. Zero impacto físico.",
                ester: "Fofíssimo, bom para dar um descanso para as pernas e olhar os detalhes da ilha.",
                gabriel: "Fila costuma ser longa para uma atração puramente infantil."
            }
        },
        {
            id: "e_arcanus", park: "epic", name: "Le Cirque Arcanus", express: true,
            type: "🎪 Show teatral com acrobatas e criaturas mágicas.",
            image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Show baseado no universo de Animais Fantásticos. Você assiste tudo sentado confortavelmente no teatro.",
                ester: "Muito bonito e bem produzido, nível de espetáculo do Cirque du Soleil.",
                gabriel: "Ótima opção para preencher a tarde em um ambiente fechado."
            }
        },
        {
            id: "e_untrainable", park: "epic", name: "The Untrainable Dragon", express: true,
            type: "🎭 Show musical ao vivo com dragões gigantes voando.",
            image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "É lindo, focado na história e nas músicas dos filmes de dragão. Sem sustos ou impactos na plateia.",
                ester: "Os dragões mecânicos gigantes que sobrevoam os assentos são impressionantes.",
                gabriel: "Produção de altíssimo nível da Universal, vale muito a pena conferir."
            }
        },
        {
            id: "e_cinesational", park: "epic", name: "CineSational: A Symphonic Spectacular", express: false,
            type: "🎆 Show de encerramento com fontes, luzes e fogos.",
            image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "O espetáculo noturno no lago central do Epic Universe. Emocionante e visual, assistido de pé ao redor do parque.",
                ester: "As projeções de água com as músicas clássicas de filmes dão arrepios.",
                gabriel: "Melhor jeito de encerrar o dia de parque com chave de ouro."
            }
        },

        // ==================== ISLANDS OF ADVENTURE ====================
        {
            id: "i_velocicoaster", park: "islands", name: "Jurassic World VelociCoaster", express: true,
            type: "🦖 Montanha-russa de lançamento duplo de extrema velocidade com inversões.",
            image: "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?w=500&q=80",
            fear: { giu: 10, ester: 9, gabriel: 7 },
            recommendation: {
                giu: "O ápice do frio na barriga em Orlando. A queda de 47 metros a 80° de inclinação e a sensação de gravidade zero são contínuas e intensas.",
                ester: "Dá muito medo de início, mas o trilho é tão perfeito que não chacoalha nada. Vale a coragem!",
                gabriel: "A melhor montanha-russa do mundo. O looping ao redor da torre é indescritível."
            }
        },
        {
            id: "i_hulk", park: "islands", name: "The Incredible Hulk Coaster", express: true,
            type: "🤢 Montanha-russa de alta velocidade com lançamento inclinado e 7 loops.",
            image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80",
            fear: { giu: 9, ester: 8, gabriel: 6 },
            recommendation: {
                giu: "O frio na barriga começa com um lançamento surpresa de dentro de um tubo inclinado. Muito intensa na força G física.",
                ester: "Vira de ponta-cabeça o tempo todo e o começo te pega de surpresa. Rosto treme bastante.",
                gabriel: "Clássica e agressiva, dá bastante tontura e pressão na cabeça se for repetida."
            }
        },
        {
            id: "i_hagrid", park: "islands", name: "Hagrid's Magical Creatures Motorbike Adventure", express: false,
            type: "🏍️ Montanha-russa de lançamento múltiplo com queda vertical de trilho.",
            image: "https://images.unsplash.com/photo-1622322051604-510bf22956f1?w=500&q=80",
            fear: { giu: 7, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "Os grandes picos de frio na barriga vêm de duas surpresas: um trecho onde o trem anda de ré e uma queda livre onde o trilho inteiro cai alguns metros.",
                ester: "Deliciosa e divertida, se puder escolha ir montada na motocicleta em vez do carrinho lateral.",
                gabriel: "A mais divertida de Orlando. Percurso longo e cheio de acelerações gostosas."
            }
        },
        {
            id: "i_doom", park: "islands", name: "Doctor Doom's Fearfall", express: true,
            type: "🚀 Torre de lançamento vertical explosivo.",
            image: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=500&q=80",
            fear: { giu: 9, ester: 7, gabriel: 5 },
            recommendation: {
                giu: "Te dispara para cima em altíssima velocidade. O maior frio na barriga acontece no milissegundo em que você chega no topo e flutua antes de descer.",
                ester: "A subida é rápida demais, o susto dura poucos segundos e logo acaba.",
                gabriel: "Dá uma vista linda do parque por cima, o disparo inicial é a única parte forte."
            }
        },
        {
            id: "i_dudley", park: "islands", name: "Dudley Do-Right's Ripsaw Falls", express: true,
            type: "🛶 Barco na água com queda livre gigante e íngreme.",
            image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&q=80",
            fear: { giu: 7, ester: 6, gabriel: 4 },
            recommendation: {
                giu: "A queda final é incrivelmente alta e íngreme, dando um frio na barriga digno de montanha-russa grande. Você vai sair encharcada.",
                ester: "Dá muito frio na barriga na descida final, e a água entra com força no barco.",
                gabriel: "Divertida e refrescante, prepare-se para trocar de meia depois."
            }
        },
        {
            id: "i_jpriver", park: "islands", name: "Jurassic Park River Adventure", express: true,
            type: "🦖 Passeio de barco que termina em queda de 26m no escuro.",
            image: "https://images.unsplash.com/photo-1517931362243-98242fc4466d?w=500&q=80",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "O passeio inteiro é um tour calmo vendo dinossauros. Porém, os últimos 15 segundos compensam com uma queda livre grande no escuro.",
                ester: "O visual inicial é lindo, e a queda final dá aquele frio na barriga rápido que logo passa.",
                gabriel: "Um clássico obrigatório. O T-Rex animatrônico no topo antes da queda é animal."
            }
        },
        {
            id: "i_popeye", park: "islands", name: "Popeye & Bluto's Bilge-Rat Barges", express: true,
            type: "🌊 Boia redonda gigante corredeira abaixo.",
            image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=500&q=80",
            fear: { giu: 3, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Quase não há sensação de queda, o frio na barriga vem apenas de pequenos solavancos na água. Mas a lavagem é completa: impossível sair seco.",
                ester: "Você vai sair ensopada como se tivesse entrado em uma piscina de roupa, vá com capa ou trocas.",
                gabriel: "Brinquedo de água que mais molha em toda Orlando, garantia de risadas com o grupo."
            }
        },
        {
            id: "i_forbidden", park: "islands", name: "Harry Potter and the Forbidden Journey", express: true,
            type: "🏰 Simulador de braço robótico em trilhos dentro do castelo.",
            image: "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?w=500&q=80",
            fear: { giu: 5, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "A tecnologia da garra mecânica te inclina para trás e para os lados dando sensação física de voo forte. Pode dar um pouquinho de enjoo.",
                ester: "Os movimentos combinados com a tela me deixam um pouco zonza, mas a fila dentro do castelo compensa tudo.",
                gabriel: "Muito boa imersão, o efeito dos Dementadores reais perto do carrinho é ótimo."
            }
        },
        {
            id: "i_spiderman", park: "islands", name: "The Amazing Adventures of Spider-Man", express: true,
            type: "🕷️ Simulador 3D em trilhos com movimentos rápidos.",
            image: "https://images.unsplash.com/photo-1608889175123-8ec330b86f84?w=500&q=80",
            fear: { giu: 4, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Há uma simulação clássica de queda livre do topo de um prédio que engana muito bem os olhos e dá um leve frio na barriga visual.",
                ester: "Muito divertida e sem quedas físicas reais pesadas, super segura.",
                gabriel: "Apesar de antiga, a transição entre telas físicas e virtuais continua impecável."
            }
        },
        {
            id: "i_kong", park: "islands", name: "Skull Island: Reign of Kong", express: true,
            type: "🦍 Simulador imersivo a bordo de um grande caminhão.",
            image: "https://images.unsplash.com/photo-1542397284385-6010176424d2?w=500&q=80",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "O caminhão chacoalha enquanto você assiste a batalhas em telas gigantes. Mais focado no visual e em alguns sustos do que em quedas.",
                ester: "Ambiente escuro e barulhento de selva, mas o jipe se move devagar.",
                gabriel: "O animatrônico final do King Kong de tamanho real impressiona bastante."
            }
        },
        {
            id: "i_hippogriff", park: "islands", name: "Flight of the Hippogriff", express: true,
            type: "🦅 Montanha-russa familiar curta (estilo infantil).",
            image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&q=80",
            fear: { giu: 3, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Uma montanha-russa bem leve, excelente para aquecimento. As curvas e descidas são suaves.",
                ester: "Dá para ir com as mãos para cima curtindo a vista da cabana do Hagrid.",
                gabriel: "Muito curta, dura menos de um minuto na pista."
            }
        },
        {
            id: "i_pteranodon", park: "islands", name: "Pteranodon Flyers", express: false,
            type: "🦕 Cadeiras suspensas que voam suavemente sobre a ilha.",
            image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&q=80",
            fear: { giu: 2, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Voo lento nas alturas. Não tem quedas ou acelerações. Nota: adultos só sobem se estiverem acompanhando uma criança.",
                ester: "Passeio calmo para ver a floresta artificial de cima.",
                gabriel: "Atração restrita para quem viaja sem crianças pequenas."
            }
        },
        {
            id: "i_seuss", park: "islands", name: "High in the Sky Seuss Trolley Train Ride!", express: true,
            type: "🚂 Trenzinho elevado que passa por dentro da área infantil.",
            image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Um passeio de trem super calmo e lento nos trilhos suspensos. Perfeito para relaxar e tirar fotos.",
                ester: "Super fofinho para ver o colorido da área infantil de cima.",
                gabriel: "Passeio parado para descansar os pés após as caminhadas longas."
            }
        },
        {
            id: "i_storm", park: "islands", name: "Storm Force Accelatron", express: true,
            type: "🌀 Atração das xícaras giratórias com tema dos X-Men.",
            image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?w=500&q=80",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Zero quedas. O frio na barriga aqui depende puramente de quanto o seu grupo decide girar o volante central.",
                ester: "Pode dar tontura se o pessoal do carrinho empolgar na rotação.",
                gabriel: "Clássica mecânica de xícaras de parque de diversões."
            }
        },
        {
            id: "i_caroseussel", park: "islands", name: "Caro-Seuss-el", express: true,
            type: "🎠 Carrossel temático com criaturas lúdicas de Dr. Seuss.",
            image: "https://images.unsplash.com/photo-1561958867-e77582c2dc39?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "O carrossel clássico do parque, mas com personagens bizarros e divertidos. Movimento circular lento.",
                ester: "Totalmente relaxante, bom para fotos coloridas.",
                gabriel: "Brinquedo puramente para crianças ou descanso."
            }
        },

        // ==================== MAGIC KINGDOM ====================
        {
            id: "m_space", park: "magic", name: "Space Mountain", express: true,
            type: "🚀 Montanha-russa clássica totalmente no escuro.",
            image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&q=80",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "Ela não é rápida nem tem quedas gigantes, mas o fato de ser no breu total faz com que você não veja nada chegando. Fator surpresa total.",
                ester: "O carrinho é de assento individual em fila, balança bastante e o escuro assusta um pouco.",
                gabriel: "Clássico retrô espacial, os trancos nos trilhos antigos são fortes."
            }
        },
        {
            id: "m_tron", park: "magic", name: "TRON Lightcycle / Run", express: true,
            type: "🏍️ Montanha-russa de lançamento em alta velocidade.",
            image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=500&q=80",
            fear: { giu: 6, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "O arranque inicial para a área externa dá um frio na barriga ótimo, mas depois ela flui muito suave, sem quedas verticais pesadas.",
                ester: "A posição de ir montada na moto é super diferente e confortável. Uma delícia de velocidade.",
                gabriel: "Visual futurista incrível, mas a pista é um pouco curta, acaba rápido."
            }
        },
        {
            id: "m_thunder", park: "magic", name: "Big Thunder Mountain Railroad", express: true,
            type: "🚂 Montanha-russa de trem mineiro clássica.",
            image: "https://images.unsplash.com/photo-1414115880398-afebc3d95efc?w=500&q=80",
            fear: { giu: 4, ester: 3, gabriel: 2 },
            recommendation: {
                giu: "Uma montanha-russa de madeira bem barulhenta. Tem curvas acentuadas e descidas rápidas, mas nada de tirar o estômago do lugar.",
                ester: "Super divertida e gostosa para começar o dia de parque aquecendo.",
                gabriel: "Ande no último vagão se quiser que o trem puxe com um pouco mais de velocidade nas descidas."
            }
        },
        {
            id: "m_dwarfs", park: "magic", name: "Seven Dwarfs Mine Train", express: true,
            type: "💎 Montanha-russa familiar com carrinhos que balançam.",
            image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=80",
            fear: { giu: 3, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Ela é linda e super dócil. Os carrinhos oscilam nas curvas dando um molejo legal, mas o frio na barriga físico é mínimo.",
                ester: "Super leve e fofa, a cena dos anões cantando na mina no meio da pista é linda.",
                gabriel: "Fila costuma ser gigante, vale a pena priorizar com fura-filas."
            }
        },
        {
            id: "m_tiana", park: "magic", name: "Tiana's Bayou Adventure", express: true,
            type: "🛶 Passeio de barco na água com uma queda livre grande.",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&q=80",
            fear: { giu: 7, ester: 6, gabriel: 4 },
            recommendation: {
                giu: "O passeio inteiro é calmo e musical, mas termina com uma queda livre clássica de 15 metros. Dá aquele vazio no estômago clássico.",
                ester: "A queda final dá bastante frio na barriga, e o barco joga água na cara na descida.",
                gabriel: "Reformulação linda da Splash Mountain, músicas ótimas e queda clássica."
            }
        },
        {
            id: "m_pirates", park: "magic", name: "Pirates of the Caribbean", express: true,
            type: "🏴‍☠️ Dark Ride clássica de barco indoor.",
            image: "https://images.unsplash.com/photo-1608963539213-90d1ec46872a?w=500&q=80",
            fear: { giu: 2, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Um passeio super calmo. Há apenas uma mini queda no escuro bem no comecinho que pega desavisados e dá um micro frio na barriga de 1 segundo.",
                ester: "Tranquilo de tudo, cenários lindos e bonecos muito bem feitos.",
                gabriel: "Música clássica viciante, imperdível para relaxar no ar-condicionado."
            }
        },
        {
            id: "m_peterpan", park: "magic", name: "Peter Pan’s Flight", express: true,
            type: "🧚‍♂️ Carrinhos suspensos estilo navio simulando voo.",
            image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=500&q=80",
            fear: { giu: 1, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você voa por cima da cidade de Londres iluminada. O único mini medo é se tiver muita fobia de altura, pois o trilho é suspenso.",
                ester: "Passeio clássico e lúdico antigo da Disney, muito calmo.",
                gabriel: "Mecânica antiga, vale pela nostalgia se a fila estiver aceitável."
            }
        },
        {
            id: "m_haunted", park: "magic", name: "Haunted Mansion", express: true,
            type: "👻 Passeio de carrinho no escuro (mansão assombrada).",
            image: "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Focada em ilusões de ótica e fantasmas divertidos. Sem sustos pesados, sem movimentos bruscos e sem nenhuma queda.",
                ester: "O clima inicial de mistério é legal, mas o brinquedo é super tranquilo.",
                gabriel: "Os efeitos de espelho no final do carrinho são muito divertidos."
            }
        },
        {
            id: "m_buzz", park: "magic", name: "Buzz Lightyear’s Space Ranger Spin", express: true,
            type: "🚀 Carrinho de tiro a laser interativo.",
            image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=500&q=80",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Você controla uma alavanca que faz o carrinho girar 360° enquanto atira. Zero quedas físicas.",
                ester: "Divertido apostar quem pontua mais do grupo jogando os lasers.",
                gabriel: "Dica: procure os alvos que piscam ou estão mais escondidos para ganhar mais pontos."
            }
        },
        {
            id: "m_speedway", park: "magic", name: "Tomorrowland Speedway", express: true,
            type: "🏎️ Carros de corrida movidos a gasolina em trilho.",
            image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você dirige um carrinho que anda bem devagar preso a uma guia central metálica. Zero adrenalina física.",
                ester: "Barulhento e cheira a escapamento, mas totalmente livre de frio na estômago.",
                gabriel: "Brinquedo bem antigo, legal apenas se quiser dirigir um carrinho clássico."
            }
        },
        {
            id: "m_smallworld", park: "magic", name: "it's a small world", express: true,
            type: "🌍 Passeio de barco lento e musical contínuo.",
            image: "https://images.unsplash.com/photo-1545642187-a4c2f82ba638?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "O passeio mais calmo do planeta. Bonecos cantando a mesma música em loop. Feito puramente para descansar.",
                ester: "Ar-condicionado gelado ótimo para sentar e relaxar os pés.",
                gabriel: "A música vai ficar grudada na sua cabeça pelo resto da viagem inteira."
            }
        },
        {
            id: "m_jungle", park: "magic", name: "Jungle Cruise", express: true,
            type: "🛶 Passeio de barco guiado com animais falsos.",
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Um tour calmo de barco por rios artificiais. Totalmente sem movimentos bruscos ou quedas.",
                ester: "A graça da atração depende inteiramente do guia contar as piadas com carisma.",
                gabriel: "Focado em trocadilhos em inglês, bom passeio calmo para o meio da tarde."
            }
        },
        {
            id: "m_dumbo", park: "magic", name: "Dumbo the Flying Elephant", express: true,
            type: "🐘 Atração giratória clássica de elefantinhos.",
            image: "https://images.unsplash.com/photo-1596758004550-e905a96db492?w=500&q=80",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Gira em círculos e você pode controlar um botão para subir ou descer o Dumbo. Bem leve.",
                ester: "Atração fofa e infantil clássica, bom visual do céu do parque.",
                gabriel: "Brinquedo puramente tradicional para bater ponto no parque."
            }
        },
        {
            id: "m_barnstormer", park: "magic", name: "The Barnstormer", express: true,
            type: "✈️ Montanha-russa infantil muito curta do Pateta.",
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80",
            fear: { giu: 2, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Uma montanha-russa que dura literalmente 40 segundos na pista. Tem uma descida minúscula.",
                ester: "Feita para crianças perderem o medo, super tranquila para qualquer adulto.",
                gabriel: "Acaba tão rápido que você nem sente que andou em uma montanha-russa."
            }
        },
        {
            id: "m_fireworks", park: "magic", name: "Happily Ever After", express: false,
            type: "🎆 Show de fogos e projeções gigantes no castelo.",
            image: "https://images.unsplash.com/photo-1531685222403-f928502d2b30?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Assistido de pé na praça. O único frio na barriga aqui é a emoção de chorar ouvindo as músicas clássicas da Disney!",
                ester: "Incrível, o momento mais bonito e mágico de toda a viagem.",
                gabriel: "Chegue cedo para pegar um bom lugar na avenida central com boa visão."
            }
        },

        // ==================== HOLLYWOOD STUDIOS ====================
        {
            id: "h_tower", park: "hollywood", name: "The Twilight Zone Tower of Terror", express: true,
            type: "🏢 Elevador de queda livre vertical aleatória no escuro.",
            image: "https://images.unsplash.com/photo-1519074069444-1ba4e6664402?w=500&q=80",
            fear: { giu: 10, ester: 8, gabriel: 5 },
            recommendation: {
                giu: "O maior teste de estômago da Disney. O elevador despenca no escuro em sequências aleatórias, fazendo você flutuar no banco (gravidade zero).",
                ester: "Dá muito frio na barriga por causa da falta de peso na queda, segure bem firme nos apoios!",
                gabriel: "Temática de hotel abandonado fantástica, a sensação de flutuar na queda é do caralho."
            }
        },
        {
            id: "h_rockn", park: "hollywood", name: "Rock 'n' Roller Coaster Aerosmith", express: true,
            type: "🎸 Montanha-russa no escuro com lançamento disparado inicial.",
            image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500&q=80",
            fear: { giu: 8, ester: 7, gabriel: 5 },
            recommendation: {
                giu: "O lançamento inicial de 0 a 92 km/h joga o estômago para trás. Tem inversões seguidas feitas na escuridão completa com rock tocando alto.",
                ester: "A arrancada inicial assusta bastante, mas o percurso no escuro com os letreiros neon é incrível.",
                gabriel: "Muito boa velocidade inicial, os alto-falantes colados na sua cabeça deixam a experiência eletrizante."
            }
        },
        {
            id: "h_slinky", park: "hollywood", name: "Slinky Dog Dash", express: true,
            type: "🐶 Montanha-russa familiar lançada (Toy Story).",
            image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=500&q=80",
            fear: { giu: 5, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Tem um segundo lançamento no meio da pista e algumas corcovas que geram leves e deliciosos frios na barriga contínuos.",
                ester: "Super gostosa e divertida de andar, dá sensação de velocidade moderada perfeita.",
                gabriel: "Excelente visual do quintal do Toy Story lá de cima, trilho muito suave."
            }
        },
        {
            id: "h_rise", park: "hollywood", name: "Star Wars: Rise of the Resistance", express: true,
            type: "🛰️ Dark Ride imersiva massiva com mini queda mecânica.",
            image: "https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?w=500&q=80",
            fear: { giu: 3, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Os carrinhos andam sem trilho ágeis. Há um momento no final onde o carrinho entra em uma cápsula e há uma queda vertical real de 2 metros. Dá um susto!",
                ester: "A queda é muito rápida e curta, dura um segundo e nem dá tempo de sofrer.",
                gabriel: "A melhor e mais imersiva atração tecnológica do mundo. Você entra de verdade na história do filme."
            }
        },
        {
            id: "h_smugglers", park: "hollywood", name: "Millennium Falcon: Smugglers Run", express: true,
            type: "🚀 Simulador de cabine interativo de pilotagem.",
            image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&q=80",
            fear: { giu: 3, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Se você for o piloto, a cabine reage aos seus comandos. Há simulações visuais de saltos no espaço que chacoalham, sem quedas físicas.",
                ester: "Se você ficar nas posições de engenheiro ou atirador no fundo, chacoalha menos e dá menos tontura.",
                gabriel: "A graça é ir de piloto para controlar o manche do salto para o hiperespaço."
            }
        },
        {
            id: "h_startours", park: "hollywood", name: "Star Tours – The Adventures Continue", express: true,
            type: "🛸 Simulador de cabine fechada clássico em tela 3D.",
            image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=500&q=80",
            fear: { giu: 4, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "A cabine inclina bastante acompanhando a projeção. Por ser antigo, as quedas virtuais na tela dão um frio na barriga visual forte.",
                ester: "Esse simulador balança muito seco e costuma me dar um pouco de enjoo de movimento.",
                gabriel: "As missões mudam de forma aleatória, então cada vez que você vai a história é diferente."
            }
        },
        {
            id: "h_mickeyrail", park: "hollywood", name: "Mickey & Minnie’s Runaway Railway", express: true,
            type: "🚂 Passeio cênico em carrinhos sem trilhos e telas.",
            image: "https://images.unsplash.com/photo-1602228915159-6238b9319808?w=500&q=80",
            fear: { giu: 2, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Super fofo. Os carrinhos simulam uma dança, além de uma cena de tornado onde balançam rápido, mas tudo controlado e sem nenhuma queda.",
                ester: "Visual de desenho animado clássico lindo de ver, super dócil.",
                gabriel: "A tecnologia de projeção nos cenários físicos é impecável."
            }
        },
        {
            id: "h_toymania", park: "hollywood", name: "Toy Story Mania!", express: true,
            type: "🎯 Jogo de tiro 3D em carrinhos móveis.",
            image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80",
            fear: { giu: 2, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Foco total em puxar a cordinha e atirar. Entre uma tela e outra, o carrinho gira muito rápido para mudar de sala, dando um tranco leve.",
                ester: "Super viciante e sem risco de medo, ótimo para competir no placar do assento.",
                gabriel: "Braço sai cansado de tanto puxar a cordinha do laser, muito divertido."
            }
        },
        {
            id: "h_saucers", park: "hollywood", name: "Alien Swirling Saucers", express: true,
            type: "🛸 Carrinhos giratórios que deslizam em curvas rápidas.",
            image: "https://images.unsplash.com/photo-1550133730-695473e510b6?w=500&q=80",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "O carrinho é puxado para as laterais fazendo curvas rápidas de chicote. Sem quedas, apenas força centrífuga lateral leve.",
                ester: "Te esmaga um pouquinho contra quem está sentado do seu lado nas curvas, bem animado.",
                gabriel: "Brinquedo de feira tradicional, mas com os bonecos de Toy Story."
            }
        },
        {
            id: "h_muppet", park: "hollywood", name: "Muppet*Vision 3D", express: true,
            type: "🎭 Cinema 3D clássico com efeitos especiais físicos.",
            image: "https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Sentar em poltronas fixas com óculos. Há bolhas de sabão e jatos de ar na sala, mas zero movimento físico.",
                ester: "Ótimo ponto para fugir do sol e descansar na metade do dia no ar-condicionado.",
                gabriel: "Atração antiga dos Muppets bem humorada clássica."
            }
        },
        {
            id: "h_mcqueen", park: "hollywood", name: "Lightning McQueen’s Racing Academy", express: false,
            type: "🏎️ Show em tela gigante com animatrônico do Carros.",
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Show estático em sala fechada. Você senta em bancos e assiste ao Relâmpago McQueen gigante interagir com a tela.",
                ester: "Totalmente tranquilo, focado nas crianças mas o boneco é perfeito.",
                gabriel: "Curto e calmo, bom para preencher intervalos entre reservas de fura-filas."
            }
        },
        {
            id: "h_beauty", park: "hollywood", name: "Beauty and the Beast Live on Stage", express: true,
            type: "🎭 Show musical em estilo Broadway ao vivo.",
            image: "https://images.unsplash.com/photo-1503095391758-11200cf53674?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Teatro aberto coberto onde os atores cantam e dançam a história do filme. Lindo e livre de adrenalina.",
                ester: "Os figurinos e as músicas clássicas ao vivo são emocionantes.",
                gabriel: "Produção clássica muito boa para assistir sentado relaxando."
            }
        },
        {
            id: "h_indiana", park: "hollywood", name: "Indiana Jones Stunt Spectacular!", express: true,
            type: "💥 Show de dublês de ação e explosões reais.",
            image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80",
            fear: { giu: 1, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Explica os efeitos especiais dos filmes. Tem explosões de fogo que dão aquele susto pelo estrondo barulhento, mas assistido da arquibancada.",
                ester: "Muito legal ver como os dublês fingem as lutas e as quedas de prédios.",
                gabriel: "A cena clássica da pedra gigante correndo atrás dele é muito massa de ver ao vivo."
            }
        },
        {
            id: "h_presents", park: "hollywood", name: "Walt Disney Presents", express: false,
            type: "🎨 Galeria de exposição de maquetes e museu de história.",
            image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Caminhada silenciosa por figurinos e esboços originais do Walt Disney, terminando em filme curto. Zero movimento.",
                ester: "Dá para ver os rascunhos originais de como criaram os parques, super interessante.",
                gabriel: "Exposição calma e vazia, ótima para fugir de filas longas."
            }
        },
        {
            id: "h_fantasmic", park: "hollywood", name: "Fantasmic!", express: true,
            type: "🎆 Show noturno gigante de encerramento em anfiteatro.",
            image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Lutas de vilões, projeções na água e fogos. Um show épico para assistir sentado e fechar o dia com chave de ouro.",
                ester: "O melhor show de encerramento da Disney, ver o barco cheio de personagens é mágico.",
                gabriel: "Acomoda milhares de pessoas sentadas, mas chegue com antecedência para pegar o centro da arquibancada."
            }
        },

        // ==================== ANIMAL KINGDOM ====================
        {
            id: "a_everest", park: "animal", name: "Expedition Everest", express: true,
            type: "🏔️ Montanha-russa de alta velocidade com trecho longo de ré.",
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&q=80",
            fear: { giu: 8, ester: 7, gabriel: 4 },
            recommendation: {
                giu: "O trilho quebra e o trem despenca de ré no escuro fazendo curvas com muita força G. Depois, há uma queda para frente de 24 metros. Estômago vai na boca!",
                ester: "O trecho de ré dá uma pressão forte na cabeça e bastante frio na barriga, segure firme!",
                gabriel: "O visual da montanha nevada por fora é absurdo de lindo, percurso muito divertido."
            }
        },
        {
            id: "a_flight", park: "animal", name: "Avatar Flight of Passage", express: true,
            type: "🍃 Simulador de voo imersivo 3D em estilo moto individual.",
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80",
            fear: { giu: 5, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "As simulações visuais de mergulhos entre montanhas na tela gigante dão um frio na barriga visual bem realista, mas o banco físico não cai.",
                ester: "Dá bastante vertigem visual de altura porque a tela te cerca por completo, mas é incrivelmente linda.",
                gabriel: "O simulador aperta as suas pernas imitando o dragão respirando embaixo de você, imersão nota 10."
            }
        },
        {
            id: "a_dinosaur", park: "animal", name: "DINOSAUR", express: true,
            type: "🦖 Dark Ride intensa a bordo de um jipe militar acidentado.",
            image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=500&q=80",
            fear: { giu: 5, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "O jipe chacoalha muito violentamente e faz curvas secas no escuro enquanto dinossauros rugem na sua cara. Frio na barriga vem muito do susto.",
                ester: "Muito escuro, barulhento e trança o corpo todo no banco. Dá bastante sustos inesperados.",
                gabriel: "Movimentação brusca bem legal estilo Indiana Jones da Califórnia."
            }
        },
        {
            id: "a_kali", park: "animal", name: "Kali River Rapids", express: true,
            type: "🌊 Boia redonda de corredeira de água com queda inclinada.",
            image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=500&q=80",
            fear: { giu: 4, ester: 3, gabriel: 2 },
            recommendation: {
                giu: "O ponto alto de frio na barriga é uma queda inclinada de 6 metros onde a boia desce rodando livre. Dá um vazio rápido e molha.",
                ester: "Dependendo de como a boia rodar na descida, quem estiver de costas toma uma onda gigante nas costas e ensopa.",
                gabriel: "Passeio de água curto, legal para refrescar nos dias quentes."
            }
        },
        {
            id: "a_naviriver", park: "animal", name: "Na'vi River Journey", express: true,
            type: "🛶 Passeio de barco lento e contemplativo por Pandora.",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Passeio de barco indoor iluminado por plantas bioluminescentes artificiais. Lindo e totalmente sem quedas.",
                ester: "O animatrônico da xamã azul no final é o robô mais perfeito que a Disney já fez, se movimenta como um humano real.",
                gabriel: "Totalmente visual e calmo, bom para despressurizar da adrenalina."
            }
        },
        {
            id: "a_safari", park: "animal", name: "Kilimanjaro Safaris", express: true,
            type: "🦁 Tour de safári em caminhão por reserva real de animais.",
            image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80",
            fear: { giu: 1, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você anda por caminhos vendo leões e elefantes soltos de verdade. O caminhão dá solavancos na terra esburacada, mas super tranquilo.",
                ester: "Lindo de morrer, parece que você viajou para a África de verdade. Vá de manhã para ver os animais mais ativos.",
                gabriel: "Passeio longo de quase 20 minutos focado na natureza real."
            }
        },
        {
            id: "a_bug", park: "animal", name: "It’s Tough to be a Bug!", express: true,
            type: "🐛 Cinema 4D interativo localizado dentro da árvore central.",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&q=80",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Filme do Vida de Inseto. Pode dar nervoso porque o banco simula baratas andando nas suas costas e picadas leves de abelha.",
                ester: "Crianças costumam chorar com o efeito dos insetos saindo da tela, dá aquele nervoso de cócegas inesperado.",
                gabriel: "Efeitos sensoriais engraçados e sala escondida dentro das raízes da árvore."
            }
        },
        {
            id: "a_triceratop", park: "animal", name: "TriceraTop Spin", express: false,
            type: "🦕 Atração giratória infantil de dinossauros voadores.",
            image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=500&q=80",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Brinquedo infantil que gira em círculos estilo o Dumbo do Magic Kingdom. Super leve e dócil.",
                ester: "Sem nenhuma adrenalina física, puramente para crianças pequenas.",
                gabriel: "Fila costuma ser zerada, brinquedo de feira tradicional."
            }
        },
        {
            id: "a_lionking", park: "animal", name: "Festival of the Lion King", express: true,
            type: "🎭 Show musical em arena circular com acrobacias ao vivo.",
            image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você assiste sentado acrobatas dando piruetas no ar e cantores performando o Rei Leão. Zero impacto físico em você.",
                ester: "O melhor show de teatro de toda a Disney. Cantores impecáveis, emocionante de chorar.",
                gabriel: "Muito bem produzido, arquibancada coberta muito confortável."
            }
        },
        {
            id: "a_nemo", park: "animal", name: "Finding Nemo: The Big Blue... and Beyond!", express: true,
            type: "🎭 Show musical teatral com marionetes gigantes iluminadas.",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Adaptação da história do Nemo com cantores incríveis controlando bonecos grandes. Super relaxante no ar-condicionado.",
                ester: "Lindo visual, as poltronas do teatro são ótimas para descansar após andar o parque.",
                gabriel: "Musical bem construído com músicas originais ótimas."
            }
        },
        {
            id: "a_gorillatrail", park: "animal", name: "Gorilla Falls Exploration Trail", express: false,
            type: "🦍 Trilha de caminhada para observação de gorilas.",
            image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você caminha no seu próprio ritmo por caminhos na mata observando gorilas e hipopótamos. Totalmente calmo.",
                ester: "Caminhada relaxante arborizada, excelente para fazer após sair do Safári.",
                gabriel: "Zoológico aberto tradicional integrado à mata do parque."
            }
        },
        {
            id: "a_tigertrail", park: "animal", name: "Maharajah Jungle Trek", express: false,
            type: "🐯 Trilha de caminhada em ruínas asiáticas com tigres.",
            image: "https://images.unsplash.com/photo-1602491453977-18a860850c59?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Caminhada tranquila por cenários incríveis imitando templos desabados da Índia para ver tigres e morcegos imensos.",
                ester: "Os cenários de ruínas dão ótimas fotos de recordação, passeio muito bonito.",
                gabriel: "Trilha silenciosa e muito bem tematizada."
            }
        },
        {
            id: "a_train", park: "animal", name: "Wildlife Express Train", express: false,
            type: "🚂 Trem de ferro rústico para a área de conservação.",
            image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Um passeio curto e lento de trem que te transporta até a área de carinho em animais de fazenda.",
                ester: "Movimento calmo tradicional de maria fumaça de fazenda.",
                gabriel: "Único meio de transporte para acessar a ilha de preservação do Rafiki."
            }
        },
        {
            id: "a_petting", park: "animal", name: "Affection Section", express: false,
            type: "🐐 Área de fazendinha interativa com cabras e bodes.",
            image: "https://images.unsplash.com/photo-1527383214149-ca21be5b02c1?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você entra em um cercado limpo para passar a mão e escovar bodes domésticos. Totalmente calmo.",
                ester: "Super fofinho para interagir com os animais bem mansos.",
                gabriel: "Atração relaxante para quebrar o ritmo puxado das filas."
            }
        },
        {
            id: "a_animation", park: "animal", name: "The Animation Experience", express: true,
            type: "✏️ Aula ao vivo ensinando a desenhar personagens da Disney.",
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você senta em bancadas com papel e segue os passos do desenhista oficial para rascunhar um personagem. Muito legal.",
                ester: "Uma delícia de atividade criativa no ar-condicionado, e você leva o seu desenho para casa.",
                gabriel: "Super fácil de acompanhar mesmo para quem diz que não sabe desenhar nada."
            }
        }
    ]
};
