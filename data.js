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
            image: "Revenge of the Mummy .jpeg",
            type: "=== Montanha-russa no escuro com lançamentos rápidos.",
            fear: { giu: 6, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Tem um lançamento inicial forte e um trecho curto de ré que dão aquele frio na barriga rápido, mas passageiro.",
                ester: "O escuro dá mais impression de velocidade, mas é super tranquila.",
                gabriel: "Cenários excelentes, o trecho de ré é a melhor parte."
            }
        },
        {
            id: "u_gringotts", park: "universal", name: "Harry Potter & Escape from Gringotts", express: true,
            image: "Harry Potter & Escape from Gringotts.jpg",
            type: "=== Simulador 3D híbrido com trilhos.",
            fear: { giu: 4, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Uma pequena queda com chacoalhão bem no começo dá um leve frio na barriga, mas o resto é puramente projeção 3D.",
                ester: "Muito imersiva, para ir prestando atenção nos detalhes visuais.",
                gabriel: "Fácil e divertida para qualquer fã da saga."
            }
        },
        {
            id: "u_simpsons", park: "universal", name: "The Simpsons Ride", express: true,
            image: "The Simpsons Ride.jpeg",
            type: "=== Simulador de movimento com tela gigante côncava.",
            fear: { giu: 5, ester: 5, gabriel: 2 },
            recommendation: {
                giu: "A tela engana muito o cérebro simulando quedas livres bizarras. Dá sensação visual de frio na barriga e tontura.",
                ester: "Chacoalha demais e a simulação de queda me deixa um pouco zonza.",
                gabriel: "Divertido pelo humor, mas o simulador é um pouco antigo."
            }
        },
        {
            id: "u_minions", park: "universal", name: "Despicable Me Minion Mayhem", express: true,
            image: "Despicable Me Minion Mayhem.jpeg",
            type: "=== Simulador de base móvel 3D.",
            fear: { giu: 3, ester: 3, gabriel: 1 },
            recommendation: {
                giu: "Movimentos mais suaves. Tem uma queda virtual logo no início, mas o estômago quase não sente o impacto físico.",
                ester: "Super fofa, movimentos tranquilos de cinema simulator.",
                gabriel: "Puramente infantil, mas bem engraçada."
            }
        },
        {
            id: "u_transformers", park: "universal", name: "TRANSFORMERS: The Ride-3D", express: true,
            image: "TRANSFORMERS- The Ride-3D.jpeg",
            type: "=== Simulador em trilhos com movimentos rápidos.",
            fear: { giu: 3, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "O carrinho gira rápido entre as telas. Há simulações de queda de prédios, mas o frio na barriga físico é mínimo.",
                ester: "Muita ação na tela, mas fisicamente o carrinho só faz giros horizontais.",
                gabriel: "Efeitos de calor e fumaça ótimos durante a simulação."
            }
        },
        {
            id: "u_fallon", park: "universal", name: "Race Through New York Starring Jimmy Fallon", express: true,
            image: "Race Through New York Starring Jimmy Fallon .jpeg",
            type: "=== Simulador de teatro voador (estilo cinema).",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "É uma poltrona de cinema grande que se mexe unida. Simula uma corrida com saltos virtuais bem tranquilos.",
                ester: "Sem perigo nenhum, ritmo de passeio de carro virtual.",
                gabriel: "A área de espera com o mascote é melhor que o brinquedo em si."
            }
        },
        {
            id: "u_fast", park: "universal", name: "Fast & Furious - Supercharged", express: true,
            type: "=== Simulador imersivo dentro de um ônibus.",
            fear: { giu: 1, ester: 1, gabriel: 1 },
            recommendation: {
                giu: "O ônibus apenas treme e finge velocidade usando as telas ao redor. Zero frio na barriga.",
                ester: "Muito morna, dá para ir até descansando.",
                gabriel: "Uma das atrações mais fracas do parque, vá se a fila estiver zerada."
            }
        },
        {
            id: "u_mib", park: "universal", name: "MEN IN BLACK Alien Attack", express: true,
            image: "MEN IN BLACK Alien Attack.jpeg",
            type: "=== Carrinho de tiro com giros intensos.",
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Sem quedas. O único momento de surpresa são os giros rápidos em 360° que o carrinho dá se for atingido.",
                ester: "Competitiva e divertida, os giros não dão tontura.",
                gabriel: "Tente acertar o bônus do botão vermelho no final para pontuar mais."
            }
        },
        {
            id: "u_et", park: "universal", name: "E.T. Adventure", express: true,
            image: "E.T. Adventure.jpeg",
            type: "=== Atração escura clássica (bicicletas suspensas).",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Nostálgico, lento e relaxante. As bicicletas flutuam suavemente pelo cenário. Zero frio na barriga.",
                ester: "Uma gracinha de atração, música calma e cheiro nostálgico de floresta.",
                gabriel: "Um clássico histórico do parque que deve ser respeitado."
            }
        },
        {
            id: "u_minionblast", park: "universal", name: "Villain-Con Minion Blast", express: true,
            image: "Villain-Con Minion Blast.jpeg",
            type: "=== Atração de tiro em esteira rolante (de pé).",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Você fica de pé em uma esteira andando devagar segurando uma arma laser. Absolutamente nenhum movimento físico.",
                ester: "Diferente por ser de pé, ótimo para passar o tempo.",
                gabriel: "Bom para quem curte jogos interativos e quer pontuar pelo app."
            }
        },
        {
            id: "u_express", park: "universal", name: "Hogwarts Express", express: true,
            image: "Hogwarts Express .jpeg",
            type: "=== Trem temático que conecta os dois parques.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Um trem real e calmo. A graça está nas telas das janelas mostrando os personagens.",
                ester: "Super relaxante e útil para trocar de parque sem andar.",
                gabriel: "A imersão da cabine é perfeita para os fãs."
            }
        },
        {
            id: "u_animals", park: "universal", name: "Animal Actors on Location!", express: true,
            type: "=== Show ao vivo com animais adestrados.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Sentar no anfiteatro e assistir a cachorros e pássaros fazendo truques. Ritmo totalmente relaxado.",
                ester: "Muito fofo, ótimo para descansar no meio do dia.",
                gabriel: "Show simples, legal para ver uma vez."
            }
        },
        {
            id: "u_bourne", park: "universal", name: "The Bourne Stuntacular", express: true,
            image: "The Bourne Stuntacular.jpg",
            type: "=== Show de dublês de ação com efeitos especiais.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Você assiste sentado no teatro. Dá aquele susto leve com rajadas de vento e calor das explosões, mas sem impacto físico.",
                ester: "A tecnologia da tela de fundo endgame os olhos de tão perfeita. Imperdível!",
                gabriel: "O melhor show de dublês do mundo atualmente, coreografias perfeitas."
            }
        },
        {
            id: "u_makeup", park: "universal", name: "Universal Orlando's Horror Make-Up Show", express: true,
            type: "=== Show de comédia e efeitos de maquiagem de terror.",
            fear: { giu: 0, ester: 0, gabriel: 0 },
            recommendation: {
                giu: "Um show de teatro muito engraçado explicando os bastidores de filmes de monstros. Sem sustos pesados.",
                ester: "Focado no humor dos apresentadores, não dá medo nenhum.",
                gabriel: "Muito engraçado e interativo com a plateia."
            }
        },
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
            type: "🐺 Montanha-russa giratória familiar lancada.",
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
                gabriel: "Tecnologia fantástica, os animatrônicos se movem de forma bizarramente rápida."
            }
        },
        {
            id: "e_ministry", park: "epic", name: "Harry Potter and the Battle at Ministry", express: true,
            type: "🪄 Dark ride tecnológica de movimentação ágil.",
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
            fear: { giu: 2, ester: 2, gabriel: 1 },
            recommendation: {
                giu: "Foco total em atirar cascos. Embora o cenário simule velocidade nas pistas, o carrinho físico anda devagar. Zero queda.",
                ester: "Os óculos digitais são super legais, parece que você está no
