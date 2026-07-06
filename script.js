let currentProfile = "giu";
let currentPark = "home";

const app = document.getElementById("app");
const navbar = document.getElementById("navbar");

init();

function init() {
    renderNavbar();
    renderPage();
}

function renderNavbar() {

    navbar.innerHTML = "";

    // Perfis
    const profileContainer = document.createElement("div");
    profileContainer.className = "profile-selector";

    appData.profiles.forEach(profile => {

        const btn = document.createElement("button");

        btn.innerText = profile.name;

        if (profile.id === currentProfile)
            btn.classList.add("active");

        btn.onclick = () => {

            currentProfile = profile.id;

            renderNavbar();
            renderPage();

        };

        profileContainer.appendChild(btn);

    });

    navbar.appendChild(profileContainer);

    // Parques

    const parkContainer = document.createElement("div");
    parkContainer.className = "park-selector";

    appData.parks.forEach(park => {

        const btn = document.createElement("button");

        btn.innerText = park.name;

        if (park.id === currentPark)
            btn.classList.add("active");

        btn.onclick = () => {

            currentPark = park.id;

            renderNavbar();
            renderPage();

        };

        parkContainer.appendChild(btn);

    });

    navbar.appendChild(parkContainer);

}

function renderPage() {

    if (currentPark === "home") {

        renderHome();

    } else {

        renderPark(currentPark);

    }

}

function renderHome() {

    app.innerHTML = `
        <div class="card">
            <h2>🇺🇸 Sua viagem</h2>

            ${appData.itinerary.map(day => `
                <p>
                    <strong>${day.date}</strong> — ${day.park}
                </p>
            `).join("")}

        </div>
    `;

}

function renderPark(parkId) {

    const park = appData.parks.find(p => p.id === parkId);

    const attractions = appData.attractions.filter(a => a.park === parkId);

    app.innerHTML = `
        <div class="card">

            <h2>${park.name}</h2>

            <p>
                Perfil:
                <strong>${appData.profiles.find(p => p.id === currentProfile).name}</strong>
            </p>

        </div>

        ${attractions.map(renderAttraction).join("")}
    `;

}

function renderAttraction(attraction) {

    const fear = attraction.fear[currentProfile];

    const recommendation = attraction.recommendation[currentProfile];

    return `

        <div class="card">

            <h3>${attraction.name}</h3>

            <p>😰 Frio: <strong>${fear}/10</strong></p>

            <div class="progress">

                <div
                    class="progress-fill"
                    style="width:${fear*10}%"
                ></div>

            </div>

            <p>${attraction.express ? "⚡ Express disponível" : ""}</p>

            <p>${recommendation}</p>

        </div>

    `;

}
