const circles = document.querySelector('.circles');
function deleteCircles() {
    circles.innerHTML = "";
}

function updateCircles(dataTable, r) {
    let table = dataTable.slice();
    let lastRow = table.pop();
    deleteCircles();
    r = Number(r);
    table.forEach(row => (defineCircle(row,"black", "white", r)));
    defineCircle(lastRow,"red", "red", r);

}

function defineCircle(row, colorR, colorNotR, r){
    let radius;
    let style;
    if(row.r === r){
        radius = 5;
        if(row.result === "Попадание"){
            style = `fill="${colorR}"`;
        }
        else {
            style = `stroke="${colorR}" stroke-width="2" fill="none"`;
        }
    }
    else{
        radius = 2;
        style = `fill="${colorNotR}"`;
    }
    moveCircle(radius, row.x, row.y, r, style);
}

function moveCircle(radius, xValue, yValue, rValue, style) {
    let cx = 150 + xValue * 100 / rValue;
    let cy = 150 - yValue * 100 / rValue;
    let circle = `<circle r="${radius}" cx="${cx}" cy="${cy}" ${style}/>`;
    circles.innerHTML += circle;
}
