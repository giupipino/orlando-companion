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
        // ==========================================
        // UNIVERSAL STUDIOS (15 atrações)
        // ==========================================
        {
            id: "u_rockit", park: "universal", name: "Hollywood Rip Ride Rockit", express: true,
            type: "🎢 Montanha-russa de alta velocidade com subida vertical de 90°.",
            fear: { giu: 10, ester: 8, gabriel: 6 },
            recommendation: {
                giu: "O maior pico de frio na barriga do parque. A subida olhando pro céu dá nervoso, e a primeira queda faz o estômago sair do lugar.",
                ester: "Dá bastante frio na barriga, mas escolher uma música legal ajuda a distrair!",
                gabriel: "Divertida pela trilha sonora, mas chacoalha um pouco."
            }
        },
        {
            id: "u_mummy", park: "universal", name: "Revenge of the Mummy", express: true,
            type: "🎬 Montanha-russa no escuro com lançamentos rápidos.",
            fear: { giu: 6, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Tem um lançamento inicial forte e um trecho curto de ré que dão aquele frio na barriga rápido, mas passageiro.",
                ester: "O escuro dá mais impressão de velocidade, mas é super tranquila.",
                gabriel: "Cenários excelentes, o trecho de ré é a melhor parte."
            }
        },
        {
            id: "u_gringotts", park: "universal", name: "Harry Potter & Escape from Gringotts", express: true,
            type: "🧙 Simulador 3D híbrido com trilhos.",
            fear: { giu: 4, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Uma pequena queda com chacoalhão bem no começo dá um leve frio na barriga, mas o resto é puramente projeção 3D.",
                ester: "Muito imersiva, para ir prestando atenção nos detalhes visuais.",
                gabriel: "Fácil e divertida para qualquer fã da saga."
            }
        },
        {
            id: "u_simpsons", park: "universal", name: "The Simpsons Ride", express: true,
            type: "📺 Simulador de movimento com tela gigante côncava.",
            fear: { giu: 5, ester: 5, gabriel: 2 },
            recommendation: {
                giu: "A tela infotainment engana muito o cérebro simulando quedas livres bizarras. Dá sensação visual de frio na barriga e tontura.",
                ester: "Chacoalha demais e a simulação de queda me deixa um pouco zonza.",
                gabriel: "Divertido pelo humor, mas o simulador é um pouco antigo."
            }
        },
        {
            id: "u_minions", park: "universal", name: "Despicable Me Minion Mayhem", express: true,
            type: "🍌 Simulador de base móvel 3D.",
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
            fear: { giu: 3, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "O carrinho gira rápido entre as telas. Há simulações de queda de prédios, mas o frio na barriga físico é mínimo.",
                ester: "Muita ação na tela, mas fisicamente o carrinho só faz giros horizontais.",
                gabriel: "Efeitos de calor e fumaça ótimos durante a simulação."
            }
        },
        {
            id: "u_fallon", park: "universal", name: "Race Through New York Starring Jimmy Fallon", express: true,
            type: "🗽 Simulador de teatro voador.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "É uma poltrona de cinema grande que se mexe unida. Simula uma corrida com saltos virtuais bem tranquilos.",
                ester: "Sem perigo nenhum, ritmo de passeio de carro virtual.",
                gabriel: "A área de espera com o mascote é melhor que o brinquedo em si."
            }
        },
        {
            id: "u_fast", park: "universal", name: "Fast & Furious - Supercharged", express: true,
            type: "🚗 Simulador imersivo dentro de um ônibus.",
            fear: { giu: 1, ester: 1, gabriel: 1 },
            recommendation: {
                giu: "O ônibus apenas treme e finge velocidade usando as telas ao redor. Zero frio na barriga.",
                ester: "Muito morna, dá para ir até descansando.",
                gabriel: "Uma das atrações mais fracas do parque, vá se a fila estiver zerada."
            }
        },
        {
            id: "u_mib", park: "universal", name: "MEN IN BLACK Alien Attack", express: true,
            type: "👽 Carrinho de tiro com giros intensos.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Sem quedas. O único momento de surpresa são os giros rápidos em 360° que o carrinho dá se for atingido.",
                ester: "Competitiva e divertida, os giros não dão tontura.",
                gabriel: "Tente acertar o bônus do botão vermelho no final para pontuar mais."
            }
        },
        {
            id: "u_et", park: "universal", name: "E.T. Adventure", express: true,
            type: "🚲 Atração escura clássica.",
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
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você fica de pé em uma esteira andando devagar segurando uma arma laser. Absolutamente nenhum movimento físico.",
                ester: "Diferente por ser de pé, ótimo para passar o tempo.",
                gabriel: "Bom para quem curte jogos interativos e quer pontuar pelo app."
            }
        },
        {
            id: "u_express", park: "universal", name: "Hogwarts Express (King's Cross)", express: true,
            type: "🚂 Trem temático que conecta os dois parques.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Um trem real e calmo. A graça está nas telas das janelas mostrando os personagens.",
                ester: "Super relaxante e útil para trocar de parque sem andar.",
                gabriel: "A imersão da cabine é perfeita para os fãs."
            }
        },
        {
            id: "u_animals", park: "universal", name: "Animal Actors on Location!", express: true,
            type: "🦧 Show ao vivo com animais adestrados.",
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
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Você assiste sentado no teatro. Dá aquele susto leve com rajadas de vento e calor das explosões, mas sem impacto físico.",
                ester: "A tecnologia da tela de fundo engana os olhos de tão perfeita. Imperdível!",
                gabriel: "O melhor show de dublês do mundo atualmente, coreografias perfeitas."
            }
        },
        {
            id: "u_makeup", park: "universal", name: "Universal Orlando's Horror Make-Up Show", express: true,
            type: "🤡 Show de comédia e efeitos de maquiagem de terror.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Um show de teatro muito engraçado explicando os bastidores de filmes de monstros. Sem sustos pesados.",
                ester: "Focado no humor dos apresentadores, não dá medo nenhum.",
                gabriel: "Muito engraçado e interativo com a plateia."
            }
        },

        // ==========================================
        // EPIC UNIVERSE (15 atrações)
        // ==========================================
        {
            id: "e_racers", park: "epic", name: "Stardust Racers", express: true,
            type: "🚀 Montanha-russa de duelo de alta velocidade (lançamento duplo).",
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
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "O carrinho parece pular buracos no trilho. Dá pequenos frios na barriga pela surpresa visual, mas não tem quedas colossais.",
                ester: "Diferente de tudo que já andei, a ilusão de ótica te deixa em alerta.",
                gabriel: "A engenharia desse brinquedo é genial, o trilho real fica escondido por baixo."
            }
        },
        {
            id: "e_wolf", park: "epic", name: "Curse of the Werewolf", express: true,
            type: "🐺 Montanha-russa giratória familiar lançada.",
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
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "A garra mecânica te joga para os lados e simula quedas rápidas no escuro enquanto foge dos monstros. Dá frio na barriga físico.",
                ester: "Movimentos intensos e ambiente bem assustador por causa dos monstros clássicos.",
                gabriel: "Tecnologia fantástica, os animatrónicos se movem de forma bizarramente rápida."
            }
        },
        {
            id: "e_ministry", park: "epic", name: "Harry Potter and the Battle at Ministry", express: true,
            type: "🧙 Dark ride tecnológica de movimentação ágil.",
            fear: { giu: 4, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Os carrinhos se movem subindo e descendo rápido pelo Ministério. Tem uma cena de queda de elevador simulada que dá um frio na barriga rápido.",
                ester: "Cenários imensos e projeções lindas, o movimento do carrinho acompanha a ação.",
                gabriel: "Imersão total, você se sente dentro do filme do Harry Potter."
            }
        },
        {
            id: "e_mariokart", park: "epic", name: "Mario Kart: Bowser's Challenge", express: true,
            type: "🍄 Atração interativa com Realidade Aumentada.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Foco total em atirar cascos. Embora o cenário simule velocidade nas pistas, o carrinho físico anda devagar. Zero queda.",
                ester: "Os óculos digitais são super legais, parece que você está no videogame.",
                gabriel: "Viciante para tentar quebrar o recorde de moedas do grupo."
            }
        },
        {
            id: "e_dragonrally", park: "epic", name: "Dragon Racer's Rally", express: true,
            type: "🐉 Atração de voo acrobático controlado pelo passageiro.",
            fear: { giu: 7, ester: 6, gabriel: 4 },
            recommendation: {
                giu: "Fica preso em um braço mecânico gigante. Se você operar as asas para fazer o assento girar de ponta-cabeça, a intensidade sobe muito!",
                ester: "Dá para deixar o assento travado se não quiser virar de ponta-cabeça, virando apenas um voo alto.",
                gabriel: "Se a fila estiver pequena vale o teste de controle."
            }
        },
        {
            id: "e_yoshi", park: "epic", name: "Yoshi's Adventure", express: false,
            type: "🥚 Passeio panorâmico familiar elevado.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Passeio super fofo e calmo por trilho elevado sobre a área do Mario. Zero velocidade ou frio na barriga.",
                ester: "Perfeito para tirar fotos bonitas da área do Super Nintendo.",
                gabriel: "Muito focado nas crianças, mas o visual do parque lá de cima é bonito."
            }
        },
        {
            id: "e_battlepike", park: "epic", name: "Battlepike Arena", express: true,
            type: "🐉 Show teatral ao vivo com dragões gigantes em tamanho real.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Espetáculo imperdível baseado em Como Treinar o Seu Dragão. Você assiste sentado, sem movimentações.",
                ester: "Efeitos especiais incríveis no palco. Vale muito a pena assistir.",
                gabriel: "Os dragões suspensos por cabos dão um show tecnológico incrível."
            }
        },
        {
            id: "e_carousel", park: "epic", name: "Constellation Carousel", express: false,
            type: "🦄 Carrossel clássico com temática cósmica.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Um carrossel gigante muito bonito com animais fantásticos que rotacionam. Movimento super suave.",
                ester: "É lindo demais à noite, as cores e as músicas celestes são super relaxantes.",
                gabriel: "Atração tradicional para ir de boa e descontrair."
            }
        },
        {
            id: "e_astronomica", park: "epic", name: "Astronomica", express: false,
            type: "💦 Área interativa de fontes de água e luzes.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Uma área de passagem com jatos de água interativos que reagem ao toque. Bom para dias muito quentes.",
                ester: "Legal para ver e interagir, principalmente para tirar fotos.",
                gabriel: "Para molhar os pés e se refrescar sem filas."
            }
        },
        {
            id: "e_glimmerwing", park: "epic", name: "Glimmerwing Fearing / Portal Rides", express: false,
            type: "✨ Encontros e experiências interativas nos portais.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Passeio calmo pelos portais com efeitos mágicos de projeção. Sem sobressaltos.",
                ester: "Atração fofa e visualmente mágica para toda a família.",
                gabriel: "Ideal para curtir a imersão e o design detalhado do parque."
            }
        },
        {
            id: "e_odyssey", park: "epic", name: "Odyssey of Fire", express: true,
            type: "🔥 Show aquático com acrobacias e pirotecnia.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Show com explosões de fogo reais e acrobacias incríveis na água. Dá calor e sustos sonoros leves.",
                ester: "Visual espetacular! As acrobacias são super impressionantes.",
                gabriel: "A engenharia de controle das chamas e águas é sensacional."
            }
        },
        {
            id: "e_monstersshow", park: "epic", name: "Monsters Classic Gathering", express: true,
            type: "🧟 Show/Teatro musical com os Monstros Clássicos.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Show muito divertido e com clima de Halloween clássico, mas focado em comédia e performance teatral.",
                ester: "Trilha sonora excelente e caracterização impecável dos atores.",
                gabriel: "Divertido, bom para descansar e dar boas risadas."
            }
        },
        {
            id: "e_nintendochallenges", park: "epic", name: "Nintendo Land Interactive Challenges", express: false,
            type: "🍄 Minijogos interativos espalhados pela área nintendo.",
            fear: { giu: 1, ester: 1, gabriel: 1 },
            recommendation: {
                giu: "Jogos físicos usando a pulseira do Mario para bater em blocos e resolver puzzles. Frio na barriga zero.",
                ester: "Super divertido e animado, mas exige andar e pular um pouquinho.",
                gabriel: "Essencial para quem quer completar todos os selos digitais do app da Universal."
            }
        },

        // ==========================================
        // ISLANDS OF ADVENTURE (15 atrações)
        // ==========================================
        {
            id: "i_velocicoaster", park: "islands", name: "Jurassic World VelociCoaster", express: true,
            type: "🎢 Montanha-russa de altíssima velocidade e lançamentos intensos.",
            fear: { giu: 10, ester: 9, gabriel: 7 },
            recommendation: {
                giu: "A melhor e mais assustadora montanha-russa! O lançamento inicial é insano e a queda final sobre a lagoa dá muito frio na barriga.",
                ester: "Dá muito medo pelas manobras rápidas de cabeça para baixo, mas o trilho é liso e perfeito.",
                gabriel: "Adrenalina pura, o arremesso de cabeça para baixo sobre o lago é incrível."
            }
        },
        {
            id: "i_hagrid", park: "islands", name: "Hagrid's Magical Creatures Motorbike Adventure", express: false,
            type: "🏍️ Montanha-russa de lançamento com queda livre de trilho e trecho de ré.",
            fear: { giu: 7, ester: 6, gabriel: 4 },
            recommendation: {
                giu: "Incrível! A queda vertical do trilho no escuro pega todo mundo de surpresa. O trecho de ré dá um frio na barriga excelente.",
                ester: "O formato de moto faz você se sentir flutuando. Muito divertida, vale cada minuto de fila.",
                gabriel: "Melhor cenografia em montanha-russa do mundo, cheia de detalhes mágicos."
            }
        },
        {
            id: "i_forbidden", park: "islands", name: "Harry Potter and the Forbidden Journey", express: true,
            type: "🧙 Simulador em braço robótico com cenários reais.",
            fear: { giu: 5, ester: 5, gabriel: 2 },
            recommendation: {
                giu: "O braço mecânico te inclina bastante (quase deitado). O visual é incrível, mas quem tem labirintite pode se sentir tonto.",
                ester: "Imersiva e um pouco assustadora pelos dementadores e aranhas gigantes.",
                gabriel: "Uma obra-prima da engenharia de parques de diversões."
            }
        },
        {
            id: "i_hippogriff", park: "islands", name: "Flight of the Hippogriff", express: true,
            type: "🎢 Montanha-russa familiar curta.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Muito rápida e curta. Excelente para ir de boa apreciando a cabana do Hagrid.",
                ester: "Tranquila e rápida, perfeita para iniciar o dia de montanhas-russas.",
                gabriel: "Básico demais, mas o visual do castelo de Hogwarts lá de cima é show."
            }
        },
        {
            id: "i_hulk", park: "islands", name: "The Incredible Hulk Coaster", express: true,
            type: "🎢 Montanha-russa de lançamento rápido e múltiplos loopings.",
            fear: { giu: 9, ester: 8, gabriel: 6 },
            recommendation: {
                giu: "O lançamento logo no túnel de subida te pega de surpresa. Muito intensa, sacode um bocado nas curvas.",
                ester: "O início dá muito frio na barriga pelo impulso rápido, depois são giros atrás de giros.",
                gabriel: "A trilha sonora pesada combina com a adrenalina. Um clássico de peso."
            }
        },
        {
            id: "i_doom", park: "islands", name: "Doctor Doom's Fearfall", express: true,
            type: "🚀 Elevador de queda livre de alta aceleração.",
            fear: { giu: 8, ester: 7, gabriel: 5 },
            recommendation: {
                giu: "O frio na barriga acontece no exato segundo do disparo para o alto. A descida é mais controlada.",
                ester: "O visual lá de cima é maravilhoso, mas a subida violentamente rápida assusta um bocado.",
                gabriel: "Rápido demais. Dá mais frio na barriga na espera ouvindo os batimentos cardíacos."
            }
        },
        {
            id: "i_spiderman", park: "islands", name: "Spider-Man: The Amazing Adventures", express: true,
            type: "🕸️ Simulador 3D híbrido em trilhos com efeitos físicos.",
            fear: { giu: 3, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Uma queda simulada no final dá um susto leve, mas no geral é apenas o carrinho girando em frente às telas 3D.",
                ester: "Um clássico super divertido que não dá medo nenhum. Visual sensacional.",
                gabriel: "Um dos simuladores mais premiados do mundo. Envelheceu super bem."
            }
        },
        {
            id: "i_popeye", park: "islands", name: "Popeye & Bluto's Bilge-Water Barges", express: true,
            type: "🌊 Bote circular de corredeiras rápidas (molha extremamente).",
            fear: { giu: 3, ester: 3, gabriel: 2 },
            recommendation: {
                giu: "Não tem quedas grandes, mas a chance de você sair encharcado dos pés à cabeça é de 100%! Vá de capa.",
                ester: "Molha muito mesmo, mas é super divertida de ir em grupo rindo dos outros.",
                gabriel: "Vá preparado para ficar com os tênis molhados o resto do dia."
            }
        },
        {
            id: "i_dudley", park: "islands", name: "Dudley Do-Right's Ripsaw Falls", express: true,
            type: "🪵 Montanha-russa de troncos na água (Flume ride) com queda íngreme.",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "A queda principal de 23 metros passa por baixo de uma ponte e dá um baita frio na barriga, além de molhar muito.",
                ester: "Dá aquele gelo no estômago clássico de queda livre na água. Muito divertida.",
                gabriel: "Cenários cartunescos ótimos e uma queda excelente para fechar o passeio."
            }
        },
        {
            id: "i_jurassicriver", park: "islands", name: "Jurassic Park River Adventure", express: true,
            type: "🦖 Passeio de barco por floresta pré-histórica com queda vertical final.",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "O passeio de barco começa calmo, mas no final cai em uma queda vertical no escuro fugindo do T-Rex. Frio na barriga garantido!",
                ester: "A atmosfera com os dinossauros é ótima, e a queda no final assusta um pouco.",
                gabriel: "A queda final é excelente e espalha água na medida certa."
            }
        },
        {
            id: "i_kong", park: "islands", name: "Skull Island: Reign of Kong", express: true,
            type: "🦍 Simulador 3D imersivo dentro de um caminhão.",
            fear: { giu: 4, ester: 3, gabriel: 2 },
            recommendation: {
                giu: "O caminhão chacoalha bastante simulando o terreno. Tem telas enormes em 3D de dinossauros atacando, com sustos visuais.",
                ester: "A ambientação da fila com os nativos dá mais medo do que a atração em si.",
                gabriel: "O animatrónico gigante do King Kong no final é o ponto alto."
            }
        },
        {
            id: "i_seusstrolley", park: "islands", name: "High in the Sky Seuss Trolley Train Ride!", express: true,
            type: "🎈 Trem elevado sobre a área do Dr. Seuss.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Passeio super fofo por cima das lanchonetes e lojas da área infantil. Zero adrenalina.",
                ester: "Uma delícia de passeio para ver o parque de cima e relaxar um pouco.",
                gabriel: "Perfeito para dar um descanso nas pernas no meio do dia."
            }
        },
        {
            id: "i_catinthehat", park: "islands", name: "Cat in the Hat", express: true,
            type: "🐱 Dark ride infantil clássico com giros horizontais.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Carrinho passa por cenários coloridos do livro. Gira um pouco para os lados, mas bem leve.",
                ester: "Totalmente focado nas crianças, mas bem simpático e colorido.",
                gabriel: "Simples e calmo, bom para fazer hora caso as filas estejam grandes."
            }
        },
        {
            id: "i_caroseussel", park: "islands", name: "Caro-Seuss-el", express: true,
            type: "🎠 Carrossel com criaturas malucas do Dr. Seuss.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Carrossel clássico em que você monta nas criaturas bizarras da área. Zero adrenalina.",
                ester: "Divertido e relaxante, bom para tirar fotos engraçadas.",
                gabriel: "Apenas para passar o tempo ou acompanhar crianças."
            }
        },
        {
            id: "i_poseidon", park: "islands", name: "Poseidon's Fury", express: true,
            type: "🏛️ Show de efeitos especiais com projeções em telas de água.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Você anda por salas antigas enquanto o guia apresenta a história de Poseidon. Tem jatos de fogo e água reais que dão calor e sustos leves.",
                ester: "O túnel de água que gira ao seu redor é a parte mais bonita.",
                gabriel: "Efeitos técnicos legais para uma atração do estilo walk-through."
            }
        },

        // ==========================================
        // MAGIC KINGDOM (15 atrações)
        // ==========================================
        {
            id: "m_tron", park: "magic", name: "TRON Lightcycle / Run", express: true,
            type: "🏍️ Montanha-russa de lançamento rápido em posição de moto futurista.",
            fear: { giu: 7, ester: 6, gabriel: 4 },
            recommendation: {
                giu: "A posição de moto te deixa bem exposto, e o lançamento inicial de 0 a 97 km/h dá muito frio na barriga, mas é super suave.",
                ester: "Visual fantástico à noite! O percurso fora do domo é lindo e passa muito rápido.",
                gabriel: "Muito confortável e rápida, porém o percurso é um pouco curto."
            }
        },
        {
            id: "m_space", park: "magic", name: "Space Mountain", express: true,
            type: "🚀 Montanha-russa totalmente no escuro.",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "O fato de não enxergar os trilhos faz você achar que vai bater a cabeça no teto. Chacoalha bastante.",
                ester: "Dá bastante frio na barriga pela escuridão total, mas a velocidade física não é tão alta.",
                gabriel: "Um clássico obrigatório do parque. Clima espacial retrô muito bacana."
            }
        },
        {
            id: "m_bigthunder", park: "magic", name: "Big Thunder Mountain Railroad", express: true,
            type: "🚂 Montanha-russa familiar temática de trem de mina abandonado.",
            fear: { giu: 4, ester: 3, gabriel: 2 },
            recommendation: {
                giu: "Muito divertida e cheia de curvas rápidas. Dá leves frios na barriga nas pequenas descidas.",
                ester: "Gostosa de ir, não tem nenhuma queda assustadora. Vá na última fileira para mais emoção.",
                gabriel: "Cenários de velho oeste excelentes. Uma montanha-russa clássica indispensável."
            }
        },
        {
            id: "m_sevendwarfs", park: "magic", name: "Seven Dwarfs Mine Train", express: true,
            type: "💎 Montanha-russa familiar com carrinhos que balançam para os lados.",
            fear: { giu: 3, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Muito suave. Os carrinhos inclinam um pouco nas curvas, mas é extremamente tranquila.",
                ester: "A parte interna com os anões cantando na mina é maravilhosa e cheia de detalhes.",
                gabriel: "Super bem construída, mas costuma ter filas colossais para quem não usa o Lightning Lane."
            }
        },
        {
            id: "m_peterpan", park: "magic", name: "Peter Pan's Flight", express: true,
            type: "🧚 Dark ride clássica em galeão voador suspenso.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Você 'voa' em cima do cenário em miniatura de Londres. Muito calmo e nostálgico. Zero sustos.",
                ester: "Uma gracinha que transporta direto para a nossa infância. Filas longas.",
                gabriel: "Fascinante pela engenharia clássica dos anos 50 de trilhos suspensos."
            }
        },
        {
            id: "m_haunted", park: "magic", name: "Haunted Mansion", express: true,
            type: "👻 Dark ride clássica com temática de mansão mal-assombrada.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "O clima é sombrio, mas o tom da atração é bem humorado e teatral. Sem jumpscares ou monstros reais.",
                ester: "Efeitos visuais incríveis de fantasmas dançando no salão de jantar principal.",
                gabriel: "A trilha sonora e os efeitos de espelhos clássicos são geniais."
            }
        },
        {
            id: "m_pirates", park: "magic", name: "Pirates of the Caribbean", express: true,
            type: "🏴‍☠️ Passeio de barco temático de piratas com uma pequena queda.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Uma queda de apenas 1 metro logo no começo no escuro dá um leve friozinho, depois é só passeio contemplativo.",
                ester: "A música clássica 'Yo Ho' fica na cabeça o dia todo. Muito relaxante.",
                gabriel: "O animatrónico do Jack Sparrow é idêntico ao ator Johnny Depp."
            }
        },
        {
            id: "m_jungle", park: "magic", name: "Jungle Cruise", express: true,
            type: "🛥️ Passeio de barco guiado por rios tropicais.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Barco devagar na água com dinâmicas de piadas contadas pelo piloto. Zero adrenalina física.",
                ester: "A graça depende totalmente do carisma do guia (Skinner). Ótimo para ir rindo.",
                gabriel: "Um clássico histórico muito bem preservado."
            }
        },
        {
            id: "m_buzz", park: "magic", name: "Buzz Lightyear's Space Ranger Spin", express: true,
            type: "🎯 Carrinho de tiro a laser interativo.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Você controla o giro do próprio carrinho enquanto atira nos alvos do Zurg. Super divertido.",
                ester: "Divertido e competitivo para ver quem pontua mais no painel do carrinho.",
                gabriel: "Fácil de jogar, procure mirar nos alvos com valor de pontuação mais alto."
            }
        },
        {
            id: "m_smallworld", park: "magic", name: "It's a Small World", express: true,
            type: "🌍 Passeio de barco calmo com bonecos representando nações do mundo.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Zero emoção física, apenas o barquinho deslizando lentamente pela água com a música clássica tocando.",
                ester: "Extremamente fofo e com ar-condicionado excelente para fugir do sol forte da Flórida.",
                gabriel: "Clássico inesquecível do Walt Disney criado para a feira mundial de 1964."
            }
        },
        {
            id: "m_mermaid", park: "magic", name: "Under the Sea ~ Journey of The Little Mermaid", express: true,
            type: "🐚 Dark ride em formato de concha gigante com a história da Pequena Sereia.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "A concha se move bem devagar acompanhando as músicas do filme. Nada de frio na barriga.",
                ester: "As cores e as músicas na cena do fundo do mar com a Ursula são lindas.",
                gabriel: "Excelente qualidade de animatrónicos e cenografia impecável."
            }
        },
        {
            id: "m_pooh", park: "magic", name: "The Many Adventures of Winnie the Pooh", express: true,
            type: "🍯 Dark ride infantil no pote de mel do ursinho Pooh.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "O carrinho pula levemente simulando o Tigrão, mas de forma extremamente amigável. Super calmo.",
                ester: "Uma graça de brinquedo, muito fofo para fechar o dia na Fantasyland.",
                gabriel: "Atração rápida e leve, ideal para relaxar."
            }
        },
        {
            id: "m_philharmagic", park: "magic", name: "Mickey's PhilharMagic", express: true,
            type: "🎵 Cinema 3D/4D musical de orquestra com personagens clássicos.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você assiste sentado de óculos 3D com efeitos físicos de vento, cheiro de torta de maçã e água borrifada.",
                ester: "O melhor cinema 3D da Disney, as músicas são emocionantes.",
                gabriel: "Ótimo show com projeções digitais excelentes para descansar."
            }
        },
        {
            id: "m_monstersinc", park: "magic", name: "Monsters, Inc. Laugh Floor", express: true,
            type: "🎤 Show de comédia interativo com telas de animação digital.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Os monstros fazem piadas ao vivo interagindo com o público da plateia do teatro. Zero adrenalina.",
                ester: "Super engraçado, os humoristas que dão a voz criam piadas na hora.",
                gabriel: "Muito interativo, mas exige entender inglês básico para aproveitar as piadas."
            }
        },
        {
            id: "m_railroad", park: "magic", name: "Walt Disney World Railroad", express: false,
            type: "🚂 Trem a vapor histórico que contorna todo o perímetro do parque.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Um trem real e lento com paradas estratégicas pelas áreas do parque. Sem sustos.",
                ester: "Perfeito para se locomover entre a entrada do parque e a Fantasyland sem cansar as pernas.",
                gabriel: "Uma viagem no tempo nostálgica, excelente passeio contemplativo."
            }
        },

        // ==========================================
        // HOLLYWOOD STUDIOS (15 atrações)
        // ==========================================
        {
            id: "h_rise", park: "hollywood", name: "Star Wars: Rise of the Resistance", express: true,
            type: "🌌 Experiência imersiva híbrida com carrinhos sem trilho e queda simulada.",
            fear: { giu: 5, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "O simulador de fuga tem uma pequena queda vertical física (tipo elevador curto) que dá um frio na barriga rápido.",
                ester: "A melhor atração de Orlando! A escala dos cenários dos Stormtroopers é impressionante.",
                gabriel: "Mais do que um brinquedo, é uma experiência de cinema interativo impecável."
            }
        },
        {
            id: "h_smugglers", park: "hollywood", name: "Millennium Falcon: Smugglers Run", express: true,
            type: "🚀 Simulador de pilotagem interativo com painel de comandos.",
            fear: { giu: 4, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Chacoalha bastante dependendo de quem está pilotando. A sensação visual de velocidade dá um leve frio no estômago.",
                ester: "Ir como piloto ou atirador é super divertido. Exige atenção nos botões.",
                gabriel: "A imersão de entrar na cabine da Millennium Falcon é perfeita."
            }
        },
        {
            id: "h_slinky", park: "hollywood", name: "Slinky Dog Dash", express: true,
            type: "🎢 Montanha-russa familiar com múltiplos lançamentos.",
            fear: { giu: 4, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "O carrinho é super gostoso e tem um lançamento no meio que dá um leve frio na barriga, mas sem loopings.",
                ester: "Super colorida e divertida. O percurso dá uma sensação ótima de velocidade.",
                gabriel: "Visual incrível da Toy Story Land, percurso muito bem aproveitado."
            }
        },
        {
            id: "h_tower", park: "hollywood", name: "Twilight Zone Tower of Terror", express: true,
            type: "🏨 Elevador de queda livre sequencial no escuro com sistema aleatório.",
            fear: { giu: 9, ester: 8, gabriel: 6 },
            recommendation: {
                giu: "Dá MUITO frio na barriga! O sistema te puxa para baixo mais rápido do que a gravidade, várias vezes seguidas.",
                ester: "Dá muito medo, mas as subidas e quedas são viciantes de tão divertidas.",
                gabriel: "A atmosfera do hotel abandonado é sensacional. O melhor brinquedo de queda livre."
            }
        },
        {
            id: "h_rockn", park: "hollywood", name: "Rock 'n' Roller Coaster Starring Aerosmith", express: true,
            type: "🎸 Montanha-russa no escuro com lançamento de alta velocidade e música alta.",
            fear: { giu: 8, ester: 7, gabriel: 5 },
            recommendation: {
                giu: "O lançamento inicial de 0 a 91 km/h em menos de 3 segundos dá aquele soco clássico no estômago. Tem 3 inversões.",
                ester: "Por ser no escuro, você não vê os trilhos e as manobras, o que ajuda quem tem medo de altura.",
                gabriel: "A trilha sonora do Aerosmith nas caixas de som no encosto do banco é sensacional."
            }
        },
        {
            id: "h_toymania", park: "hollywood", name: "Toy Story Mania!", express: true,
            type: "🎯 Jogo de tiro 3D interativo com giros rápidos.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "O carrinho gira bem rápido de uma tela para outra, mas não tem quedas ou alturas. Super tranquilo.",
                ester: "Muito divertido, as armas são de puxar uma corda e cansam um pouco os braços se jogar muito forte.",
                gabriel: "Competitivo e viciante, excelente brinquedo para ir em dupla."
            }
        },
        {
            id: "h_runaway", park: "hollywood", name: "Mickey & Minnie's Runaway Railway", express: true,
            type: "🚂 Carrinho sem trilhos por cenários de desenho animado 2.5D.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Tem uma cena que simula cair de uma cachoeira que dá um susto visual, mas o carrinho físico só se move plano. Muito de boa.",
                ester: "Uma explosão de cores e tecnologia de projeção linda. Super carismática.",
                gabriel: "A tecnologia dos carrinhos autônomos que se separam é fantástica."
            }
        },
        {
            id: "h_startours", park: "hollywood", name: "Star Tours – The Adventures Continue", express: true,
            type: "🚀 Simulador de cabine com movimentos sincronizados com vídeo 3D.",
            fear: { giu: 4, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Cabine simula quedas no espaço. Dá um leve balanço no estômago e pode causar enjoo visual por causa dos óculos 3D.",
                ester: "As missões mudam de forma aleatória a cada viagem, vale ir mais de uma vez.",
                gabriel: "O simulador físico original que deu origem a várias outras atrações."
            }
        },
        {
            id: "h_aliens", park: "hollywood", name: "Alien Swirling Saucers", express: true,
            type: "🛸 Atração giratória estilo xícara maluca em formato de foguete.",
            fear: { giu: 3, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Os carrinhos deslizam fazendo curvas rápidas mudando de plataforma. Dá um leve balanço, sem quedas.",
                ester: "Divertido com as músicas dos Aliens do Toy Story. Balança um pouco mas não dá tontura.",
                gabriel: "Atração simples, boa se a fila estiver rápida."
            }
        },
        {
            id: "h_beauty", park: "hollywood", name: "Beauty and the Beast Live on Stage", express: true,
            type: "🎭 Musical ao vivo estilo Broadway baseado no filme.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Show de teatro tradicional sentado com as principais canções clássicas. Sem sobressaltos.",
                ester: "Os figurinos e as coreografias são lindos. Excelente para descansar.",
                gabriel: "Show musical de alta qualidade técnica."
            }
        },
        {
            id: "h_indiana", park: "hollywood", name: "Indiana Jones Epic Stunt Spectacular!", express: true,
            type: "💥 Show de dublês de ação e bastidores de filmagem.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Show ao vivo muito divertido mostrando como fazem as cenas de ação. Tem calor de explosões de verdade.",
                ester: "Um clássico do parque, a demonstração com a pedra gigante rolando é icônica.",
                gabriel: "Muito legal ver os bastidores dos dublês explicando as quedas e brigas."
            }
        },
        {
            id: "h_frozen", park: "hollywood", name: "Frozen Sing-Along Celebration", express: true,
            type: "❄️ Show interativo de música e comédia com neve artificial.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Show musical em teatro fechado em que a plateia canta junto com os personagens de Frozen. Super tranquilo.",
                ester: "Os apresentadores são hilários, as piadas são ótimas e no final cai neve no teatro.",
                gabriel: "Muito divertido, bom para refrescar nos dias quentes."
            }
        },
        {
            id: "h_lightning", park: "hollywood", name: "Lightning McQueen's Racing Academy", express: false,
            type: "🏎️ Show com animatrónico móvel do Relâmpago McQueen em tela envolvente.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "O carro interage com o simulador na tela de 360°. Você assiste sentado, sem movimentos físicos.",
                ester: "O animatrónico do Relâmpago McQueen se move de forma muito realista no palco.",
                gabriel: "Show curto e tecnológico, ótimo para fã de Carros."
            }
        },
        {
            id: "h_muppets", park: "hollywood", name: "Muppet*Vision 3D", express: true,
            type: "🐸 Cinema 3D clássico dos Muppets com efeitos reais na sala.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Cinema 3D bem antigo com bonecos físicos aparecendo nas laterais. Sem sustos pesados.",
                ester: "Muito simpático e nostálgico, o robô soltando bolhas na sala é fofo.",
                gabriel: "Humor clássico dos anos 90, perfeito para descansar."
            }
        },
        {
            id: "h_fantasmic", park: "hollywood", name: "Fantasmic!", express: true,
            type: "🎆 Show noturno de fogos, projeções na água e personagens.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Espetáculo assistido em uma arena gigante ao ar livre. Tem rajadas de fogo e luzes intensas, sem movimento no assento.",
                ester: "O show mais emocionante da Disney, imperdível de fechar o dia.",
                gabriel: "A escala da montagem do show com o navio de personagens é sensacional."
            }
        },

        // ==========================================
        // ANIMAL KINGDOM (15 atrações)
        // ==========================================
        {
            id: "a_flight", park: "animal", name: "Avatar Flight of Passage", express: true,
            type: "🧬 Simulador 3D de voo imersivo em montaria de Banshee.",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "A sensação visual de altura e queda livre em cima da montaria dá muito frio na barriga físico, embora o simulador apenas incline.",
                ester: "Incrível! Você sente a respiração do Banshee nas suas pernas. Super realista.",
                gabriel: "A melhor tecnologia de simulador visual atualmente."
            }
        },
        {
            id: "a_navi", park: "animal", name: "Na'vi River Journey", express: true,
            type: "🛶 Passeio de barco lento pela floresta bioluminescente de Pandora.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Um passeio de barco extremamente calmo e místico. Frio na barriga absolutamente zero.",
                ester: "Cenários de floresta brilhante lindos. O animatrónico da xamã no final é inacreditável.",
                gabriel: "Visualmente deslumbrante, mas a fila costuma ser grande para a duração do passeio."
            }
        },
        {
            id: "a_everest", park: "animal", name: "Expedition Everest", express: true,
            type: "🎢 Montanha-russa de grande porte com queda livre de ré no escuro.",
            fear: { giu: 8, ester: 7, gabriel: 5 },
            recommendation: {
                giu: "A parte em que o train anda de ré no escuro de forma espiralada dá um baita frio na barriga e pressão na cabeça.",
                ester: "A queda principal de 24 metros é linda e dá aquele gelo no estômago fantástico.",
                gabriel: "Uma das melhores montanhas-russas da Disney, com ótima tematização do Yeti."
            }
        },
        {
            id: "a_dinosaur", park: "animal", name: "DINOSAUR", express: true,
            type: "🦖 Viagem de jipe turbulenta no escuro fugindo de dinossauros.",
            fear: { giu: 6, ester: 5, gabriel: 3 },
            recommendation: {
                giu: "O jipe sacode violentamente e o escuro total com dinossauros gigantes rugindo do seu lado dá muitos sustos físicos.",
                ester: "A atmosfera é muito tensa e barulhenta, o Carnotauro que aparece no final assusta de verdade.",
                gabriel: "Cenário e movimentos excelentes. Brinquedo imersivo de alta adrenalina."
            }
        },
        {
            id: "a_safari", park: "animal", name: "Kilimanjaro Safaris", express: true,
            type: "🦁 Safari real em caminhão aberto por savana africana.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Caminhão chacoalha um bocado na estrada de terra para ver leões, elefantes e girafas soltos. Sem perigos.",
                ester: "Lindo passeio! Vá pela manhã para ver os animais mais ativos.",
                gabriel: "A ambientação da savana é impressionante de tão realista."
            }
        },
        {
            id: "a_kali", park: "animal", name: "Kali River Rapids", express: true,
            type: "🌊 Bote de corredeira circular na água com queda íngreme.",
            fear: { giu: 4, ester: 4, gabriel: 3 },
            recommendation: {
                giu: "Tem uma queda de 9 metros de ré que dá um leve frio na barriga e a certeza de que alguém do bote vai sair molhado.",
                ester: "Divertido de ir em grupo nos dias quentes para se refrescar.",
                gabriel: "Molha bastante dependendo de como o bote gira durante a queda."
            }
        },
        {
            id: "a_lionking", park: "animal", name: "Festival of the Lion King", express: true,
            type: "🎪 Show musical estilo festival acrobático baseado no Rei Leão.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Acrobacias fantásticas e cantores ao vivo em um anfiteatro fechado. Espetáculo calmo.",
                ester: "O melhor show do Animal Kingdom! Os trapezistas macacos são sensacionais.",
                gabriel: "Show musical de primeiríssimo nível, imperdível."
            }
        },
        {
            id: "a_nemo", park: "animal", name: "Finding Nemo: The Big Blue... and Beyond!", express: true,
            type: "🎭 Show teatral musical com marionetes gigantes de Procurando Nemo.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Atores operam marionetes gigantes cantando a história do Nemo. Assistido sentado em teatro.",
                ester: "Lindo show visual de cores, excelente para relaxar na metade do dia.",
                gabriel: "Nível Broadway de marionetes e cenografia."
            }
        },
        {
            id: "a_bug", park: "animal", name: "It's Tough to be a Bug!", express: true,
            type: "🐜 Cinema 3D/4D interativo embaixo da Árvore da Vida.",
            fear: { giu: 3, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Alguns efeitos na poltrona (como baratas simulando andar sob seu assento) dão um baita susto e pinicam levemente.",
                ester: "O visual 3D é fofo, mas os efeitos reais da sala podem assustar quem tem fobia de inseto.",
                gabriel: "Experiência clássica e divertida de cinema sensorial."
            }
        },
        {
            id: "a_feathered", park: "animal", name: "Feathered Friends in Flight!", express: true,
            type: "🦅 Show de voo livre com aves reais adestradas.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "As aves e falcões dão rasantes super baixos sobre a plateia. Ritmo calmo e interativo.",
                ester: "Muito bonito de ver a inteligência dos pássaros de perto.",
                gabriel: "Show educativo bem estruturado e focado na natureza."
            }
        },
        {
            id: "a_gorillatrail", park: "animal", name: "Gorilla Falls Exploration Trail", express: false,
            type: "🦍 Trilha de caminhada para observação de gorilas e aves.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Uma caminhada guiada ao ar livre sem brinquedos. Frio na barriga zero.",
                ester: "Ótimo para caminhar devagar admirando os gorilas bem de perto.",
                gabriel: "Bom passeio para fazer no próprio ritmo de forma bem tranquila."
            }
        },
        {
            id: "a_maharajah", park: "animal", name: "Maharajah Jungle Trek", express: false,
            type: "🐅 Trilha de caminhada por ruínas asiáticas com tigres.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Caminhada calma por cenários lindos inspirados no Nepal e Índia com tigres asiáticos.",
                ester: "Cenário maravilhoso para fotos e observação de morcegos e tigres.",
                gabriel: "Excelente imersão temática e arquitetura de ruínas."
            }
        },
        {
            id: "a_wildlifetrain", park: "animal", name: "Wildlife Express Train", express: false,
            type: "🚂 Trem de passeio calmo até a estação de conservação.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Trem que te leva até os bastidores de veterinários do parque. Super calmo.",
                ester: "Um passeio bem tranquilo para fugir um pouco das multidões.",
                gabriel: "Viagem relaxante para quem gosta de conhecer os bastidores de cuidados animais."
            }
        },
        {
            id: "a_triceratop", park: "animal", name: "TriceraTop Spin", express: true,
            type: "🦕 Atração giratória no ar em formato de dinossauro.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Similar ao brinquedo do Dumbo. Você pode subir e descer o dinossauro usando uma alavanca.",
                ester: "Atração bem infantil e calma, boa apenas se estiver sem fila nenhuma.",
                gabriel: "Brinquedo de feira tradicional com temática de dinossauros."
            }
        },
        {
            id: "a_planetwatch", park: "animal", name: "Rafiki's Planet Watch", express: false,
            type: "🐐 Área interativa com fazendinha de animais e aulas de desenho.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Espaço onde você pode interagir e passar a mão em cabras, além de fazer oficinas de animação rápida.",
                ester: "Muito fofo interagir com os animais e ver como desenhar os personagens clássicos.",
                gabriel: "Ambiente bem descontraído e voltado para a arte e educação ambiental."
            }
        }
    ]
};
