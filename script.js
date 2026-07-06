// Estado inicial da aplicação
let currentProfile = "giu";
let currentPark = "home";

const app = document.getElementById("app");
const navbar = document.getElementById("navbar");

// Inicializa o app
init();

function init() {
    renderNavbar();
    renderPage();
}

function renderNavbar() {
    navbar.innerHTML = "";

    // 1. Criação do Bloco de Seleção de Perfis
    const profileContainer = document.createElement("div");
    profileContainer.className = "profile-selector";

    appData.profiles.forEach(profile => {
        const btn = document.createElement("button");
        btn.innerText = profile.name;

        // Aplica a cor dinâmica baseada no perfil ativo
        if (profile.id === currentProfile) {
            btn.classList.add("active");
            if (currentProfile === "giu") btn.style.backgroundColor = "#8B5CF6";     // Roxo
            if (currentProfile === "ester") btn.style.backgroundColor = "#3B82F6";   // Azul
            if (currentProfile === "gabriel") btn.style.backgroundColor = "#EF4444"; // Vermelho
        }

        btn.onclick = () => {
            currentProfile = profile.id;
            renderNavbar();
            renderPage();
        };
        profileContainer.appendChild(btn);
    });
    navbar.appendChild(profileContainer);

    // 2. Criação do Bloco de Seleção de Parques
    const parkContainer = document.createElement("div");
    parkContainer.className = "park-selector";

    appData.parks.forEach(park => {
        const btn = document.createElement("button");
        btn.innerText = park.name;

        if (park.id === currentPark) {
            btn.classList.add("active");
        }

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
            <h2>🇺🇸 Roteiro da Viagem</h2>
            <div style="margin-top: 12px;">
                ${appData.itinerary.map(day => `
                    <div style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid #334155;">
                        <span style="color: #0ea5e9; font-weight: bold; font-size: 14px;">${day.date}</span>
                        <p style="color: #fff; font-size: 16px; margin-top: 2px;">${day.park}</p>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function renderPark(parkId) {
    const park = appData.parks.find(p => p.id === parkId);
    const attractions = appData.attractions.filter(a => a.park === parkId);
    const profileName = appData.profiles.find(p => p.id === currentProfile).name;

    let attractionsHTML = "";
    if (attractions.length === 0) {
        attractionsHTML = `<div class="card"><p>Nenhuma atração cadastrada para este parque ainda. 🎢</p></div>`;
    } else {
        attractionsHTML = attractions.map(renderAttraction).join("");
    }

    app.innerHTML = `
        <div class="card" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border-left: 4px solid #0ea5e9;">
            <h2>${park.name}</h2>
            <p>Visualizando notas de: <strong style="color: #fff;">${profileName}</strong></p>
        </div>
        ${attractionsHTML}
    `;
}

function renderAttraction(attraction) {
    const fear = attraction.fear[currentProfile];
    const recommendation = attraction.recommendation[currentProfile];
    
    // Define a cor da barra baseado no usuário
    let color = "#60a5fa";
    if (currentProfile === "giu") color = "#8B5CF6";
    if (currentProfile === "ester") color = "#3B82F6";
    if (currentProfile === "gabriel") color = "#EF4444";

    return `
        <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <h3>${attraction.name}</h3>
                <span style="font-size: 12px; padding: 4px 8px; border-radius: 12px; background: ${attraction.express ? '#065f46' : '#991b1b'}; color: #fff;">
                    ${attraction.express ? '⚡ Express' : '❌ No Express'}
                </span>
            </div>
            
            <p style="margin-top: 10px;">😰 Frio na barriga: <strong>${fear}/10</strong></p>
            <div style="height: 8px; background: #334155; border-radius: 4px; margin: 8px 0 16px 0; overflow: hidden;">
                <div style="height: 100%; background: ${color}; width: ${fear * 10}%; transition: width 0.3s ease;"></div>
            </div>
            
            <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border-left: 3px solid ${color};">
                <p style="color: #e2e8f0; font-style: italic;">"${recommendation}"</p>
            </div>
        </div>
    `;
}
