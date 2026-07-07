const appData = {
    profiles: [
        { id: "giu", name: "Giu" },
        { id: "ester", name: "Ester" },
        { id: "gabriel", name: "Gabriel" }
    ],
    parks: [
        { id: "home", name: "🏠 Home" },
        { id: "universal", name: "🎬 Universal Studios" }
    ],
    itinerary: [
        { date: "10/09", title: "Chegada em Orlando ✈️" }
    ],
    attractions: [
        {
            id: "u_rockit", park: "universal", name: "Hollywood Rip Ride Rockit", express: true,
            type: "🎢 Montanha-russa de alta velocidade.",
            fear: { giu: 10, ester: 8, gabriel: 6 },
            recommendation: {
                giu: "Frio na barriga.",
                ester: "Dá medo.",
                gabriel: "Divertida."
            }
        },
        {
            id: "u_mummy", park: "universal", name: "Revenge of the Mummy", express: true,
            type: "🎬 Montanha-russa no escuro.",
            fear: { giu: 6, ester: 4, gabriel: 2 },
            recommendation: {
                giu: "Rápida.",
                ester: "Tranquila.",
                gabriel: "Excelente."
            }
        }
    ]
};
