function renderAttraction(attraction) {
    const fear = attraction.fear[currentProfile];
    const recommendation = attraction.recommendation[currentProfile];
    const isVisited = visitedAttractions.includes(attraction.id);
    
    let color = "#60a5fa";
    if (currentProfile === "giu") color = "#8B5CF6";
    if (currentProfile === "ester") color = "#3B82F6";
    if (currentProfile === "gabriel") color = "#EF4444";

    // Criamos a tag da imagem apenas se a atração tiver uma imagem cadastrada
    const imageHtml = attraction.image 
        ? `<img src="${attraction.image}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; margin-top: 10px; margin-bottom: 5px; ${isVisited ? 'filter: grayscale(100%);' : ''}" alt="${attraction.name}">`
        : '';

    return `
        <div class="card" style="padding: 18px; margin-bottom: 0; position: relative; border-radius: 12px; transition: all 0.3s ease; ${isVisited ? 'opacity: 0.45; background: #0f172a; border: 1px dashed #334155;' : ''}">
            
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 8px;">
                <div>
                    <h3 style="font-size: 18px; margin: 0 0 4px 0; color: #fff; ${isVisited ? 'text-decoration: line-through; color: #64748b;' : ''}">${attraction.name}</h3>
                    <p style="color: #cbd5e1; font-size: 13px; margin: 0; line-height: 1.4;">${attraction.type}</p>
                    
                    ${imageHtml}
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
