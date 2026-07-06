const appData = {

    trip: {
        title: "Orlando Companion",
        subtitle: "11–19 Setembro • Orlando 2026"
    },

    profiles: [

        {
            id: "giu",
            name: "💙 Giu"
        },

        {
            id: "ester",
            name: "💜 Ester"
        },

        {
            id: "gabriel",
            name: "🔥 Gabriel"
        }

    ],

    parks: [

    {
        id: "animal",
        name: "Animal Kingdom",
        emoji: "🦁",
        date: "11 SET",
        color: "#2E7D32"
    },

    {
        id: "studios",
        name: "Universal Studios",
        emoji: "🎬",
        date: "12 SET",
        color: "#1565C0"
    },

    {
        id: "islands",
        name: "Islands of Adventure",
        emoji: "🧙",
        date: "12 SET",
        color: "#7C3AED"
    },

    {
        id: "epic",
        name: "Epic Universe",
        emoji: "🌌",
        date: "13 SET",
        color: "#9333EA"
    },

    {
        id: "hhn",
        name: "Halloween Horror Nights",
        emoji: "👻",
        date: "13 SET",
        color: "#DC2626"
    },

    {
        id: "magic",
        name: "Magic Kingdom",
        emoji: "🏰",
        date: "18 SET",
        color: "#EC4899"
    }

],

    itinerary: [

        {
            date: "11/09",
            park: "🦁 Animal Kingdom"
        },

        {
            date: "12/09",
            park: "🎬 Universal Studios + 🧙 Islands"
        },

        {
            date: "13/09",
            park: "🌌 Epic Universe + 👻 HHN"
        },

        {
            date: "14/09",
            park: "🎬 Hollywood Studios ou Disney Springs"
        },

        {
            date: "18/09",
            park: "🏰 Magic Kingdom"
        },

        {
            date: "19/09",
            park: "🛍️ Outlet ou Disney Springs"
        }

    ],

    attractions: [

        {
            id: "gringotts",

            park: "studios",

            name: "Harry Potter and the Escape from Gringotts",

            fear: {
                giu: 4,
                ester: 3,
                gabriel: 1
            },

            express: true,

            priority: 5,

            recommendation: {
                giu: "Pode ir tranquila. É muito mais simulador do que montanha-russa.",
                ester: "Você provavelmente vai achar bem de boa.",
                gabriel: "Nem vai sentir. Faça logo cedo."
            }

        }

    ]

};
