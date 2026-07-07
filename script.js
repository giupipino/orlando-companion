let currentProfile = "giu";
let currentPark = "home";

// Carrega as atrações já visitadas salvas no navegador
let visitedAttractions = JSON.parse(localStorage.getItem('visited_attractions')) || [];

document.addEventListener("DOMContentLoaded", () => {
    initProfiles();
    initNav();
    render();
});

function initProfiles() {
    const selector = document.getElementById("profile-selector");
    if (!selector) return;
    
    selector.innerHTML = appData.profiles.map(p => 
        `<button class="profile-btn ${p.id === currentProfile ? 'active' : ''}" data-id="${p.id}">${p.name}</button>`
    ).join("");

    selector.addEventListener("click", (e) => {
        if (e.target.classList.contains("profile-btn")) {
            document.querySelectorAll(".profile-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentProfile = e.target.dataset.id;
            render();
        }
    });
}

function initNav() {
    const nav = document.getElementById("park-nav");
    if (!nav) return;

    nav.innerHTML = appData.parks.map(p => 
        `<button class="nav-btn ${p.id === currentPark ? 'active' : ''}" data-id="${p.id}">${p.name}</button>`
    ).join("");

    nav.addEventListener("click", (e) => {
        if (e.target.classList.contains("nav-btn")) {
            document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentPark = e.target.dataset.id;
            render();
        }
    });
}

// Controla o clique do checkbox de "Já Fui!"
function toggleVisited(attractionId) {
    if (visitedAttractions.includes(attractionId)) {
        visitedAttractions = visitedAttractions.filter(id => id !== attractionId);
    } else {
        visitedAttractions.push(attractionId);
    }
    localStorage.setItem('visited_attractions', JSON.stringify(visitedAttractions));
    render(); // Recarrega a tela para atualizar o estilo do card
}

function render() {
    const container = document.getElementById("content-container");
    if (!container) return;

    if (currentPark === "home") {
        renderHome(container);
    } else {
        renderPark(container);
    }
}

function renderHome(container) {
    let html = `
        <div class="welcome-card">
            <h2>Bem-vindo ao Guia de Frio na Barriga! 🎢🎒</h2>
            <p>Selecione seu usuário no topo para ver as notas e dicas personalizadas de acordo com o estômago de cada um, ou navegue pelos parques no menu lateral.</p>
        </div>
        <h3 style="margin-top: 30px; margin-bottom: 15px; color: #fff;">🗓️ Nosso Roteiro de Parques</h3>
        <div style="display: grid; gap: 12px;">
    `;

    appData.itinerary.forEach(item => {
        html += `
            <div style="background: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #6366f1; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: bold; color: #94a3b8; font-size: 14px;">${item.date}</span>
                <span style="color: #f1f5f9; font-weight: 500;">${item.title}</span>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}

function renderPark(container) {
    const filtered = appData.attractions.filter(a => a.park === currentPark);
    const parkName = appData.parks.find(p => p.id === currentPark).name;

    if (filtered.length === 0) {
        container.innerHTML = `<h2>${parkName}</h2><p style="color: #94a3b8;">Nenhuma atração listada para este parque.</p>`;
        return;
    }

    // Ordena colocando as que dão mais frio na barriga no topo
    filtered.sort((a, b) => b.fear[currentProfile] - a.fear[currentProfile]);

    let html = `<h2 style="margin-bottom: 20px; color: #fff;">${parkName} (${filtered.length} atrações)</h2>`;
    html += `<div style="display: grid; gap: 20px;">`;
    
    filtered.forEach(a => {
        html += renderAttraction(a);
    });

    html += `</div>`;
    container.innerHTML = html;
}

function renderAttraction(attraction) {
    const fear = attraction.fear[currentProfile];
    const recommendation = attraction.recommendation[currentProfile];
    const isVisited = visitedAttractions.includes(attraction.id);
    
    let color = "#60a5fa";
    if (currentProfile === "giu") color = "#8B5CF6";
    if (currentProfile === "ester") color = "#3B82F6";
    if (currentProfile === "gabriel") color = "#EF4444";

    // Cria a tag da imagem apenas se ela estiver definida no data.js
    let imageHtml = "";
    if (attraction.image && attraction.image !== "") {
        imageHtml = `<img src="${attraction.image}" alt="${attraction.name}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; ${isVisited ? 'filter: grayscale(100%) opacity(0.5);' : ''}">`;
    }

    return `
        <div class="card" style="padding: 18px; margin-bottom: 0; position: relative; border-radius: 12px; transition: all 0.3s ease; ${isVisited ? 'opacity: 0.45; background: #0f172a; border: 1px dashed #334155;' : ''}">
            
            ${imageHtml}

            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 8px;">
                <div>
                    <h3 style="font-size: 18px; margin: 0 0 4px 0; color: #fff; ${isVisited ? 'text-decoration: line-through; color: #64748b;' : ''}">${attraction.name}</h3>
                    <p style="color: #cbd5e1; font-size: 13px; margin: 0; line-height: 1.4;">${attraction.type}</p>
                </div>
                
                <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
                    <span style="font-size: 11px; padding: 4px 8px; border-radius: 12px; background: ${attraction.express ? 'rgba(6,95,70,0.4)' : 'rgba(153,27,27,0.4)'}; color: ${attraction.express ? '#34d399' : '#f87171'}; border: 1px solid ${attraction.express ? '#065f46' : '#991b1b'}; font-weight: 600;">
                        ${attraction.express ? '⚡ Express/LL' : '⏱️ Normal'}
                    </span>
                    
                    <label style="display: flex; align-items: center; gap: 6px; background: #1e293b; padding: 4px 10px; border-radius: 12px; border: 1px solid #334155; cursor: pointer; font-size: 12px; color: #e2e8f0; user-select: none;">
                        <input type="checkbox" ${isVisited ? 'checked' : ''} onchange="toggleVisited('${attraction.id}')" style="cursor: pointer; accent-color: ${color}; transform: scale(1.1);">
                        <span>${isVisited ? '✅ Fui!' : 'Já fui?'}</span>
                    </label>
                </div>
            </div>
            
            <div style="margin-top: 14px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                    <p style="font-size: 13px; color: #94a3b8; margin: 0;">😰 Intensidade:</p>
                    <strong style="color: #fff; font-size: 14px;">${fear} / 10</strong>
                </div>
                <div style="height: 6px; background: #334155; border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; background: ${color}; width: ${fear * 10}%; transition: width 0.3s ease;"></div>
                </div>
            </div>
            
            <div style="background: rgba(255,255,255,0.01); padding: 12px; border-radius: 8px; border-left: 3px solid ${color}; margin-top: 14px;">
                <p style="color: #cbd5e1; font-style: italic; font-size: 13px; margin: 0; line-height: 1.5;">
                    "${recommendation}"
                </p>
            </div>
        </div>
    `;
}
