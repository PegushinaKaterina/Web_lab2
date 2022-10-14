const graphText = document.querySelector('.graph-text');
function deleteGraphText() {
    graphText.innerHTML = `<text x="163" y="35">Y</text>
        <text x="163" y="54">R</text>
        <text x="163" y="104">R/2</text>
        <text x="163" y="204">-R/2</text>
        <text x="163" y="254">-R</text>
        <text x="265" y="137">X</text>
        <text x="50" y="137" text-anchor="middle">-R</text>
        <text x="100" y="137" text-anchor="middle">-R/2</text>
        <text x="200" y="137" text-anchor="middle">R/2</text>
        <text x="250" y="137" text-anchor="middle">R</text>`;
}

function updateGraphText(r) {
    graphText.innerHTML = `<text x="163" y="35">Y</text>
        <text x="163" y="54">${r}</text>
        <text x="163" y="104">${r/2}</text>
        <text x="163" y="204">${-r/2}</text>
        <text x="163" y="254">${-r}</text>
        <text x="265" y="137">X</text>
        <text x="50" y="137" text-anchor="middle">${-r}</text>
        <text x="100" y="137" text-anchor="middle">${-r/2}</text>
        <text x="200" y="137" text-anchor="middle">${r/2}</text>
        <text x="250" y="137" text-anchor="middle">${r}</text>`;
}
