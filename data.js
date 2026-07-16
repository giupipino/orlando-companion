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
