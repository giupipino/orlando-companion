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
            image: "Harry Potter & Escape from Gringotts.jpg",
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
            image: "The Simpsons Ride.jpeg",
            type: "📺 Simulador de movimento com tela gigante côncava.",
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
            image: "TRANSFORMERS- The Ride-3D.jpeg",
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
            image: "Race Through New York Starring Jimmy Fallon .jpeg",
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
            image: "MEN IN BLACK Alien Attack.jpeg",
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
            image: "E.T. Adventure.jpeg",
            type: "🚲 Atração escura clássica.",
            fear: { giu: 1, ester: 1, gabriel: 0 },
            recommendation: {
                giu: "Nostálgico, lento e relaxante. As bicicletas flutuam suavemente pelo cenário. Zero frio na barriga.",
                ester: "Uma gracinha de atração, música calma e cheiro nostálgico de floresta.",
                gabriel: "Um clássico histórico do parque que deve ser respeitado."
            }
        }
    ]
};
