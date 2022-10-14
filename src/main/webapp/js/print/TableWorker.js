let table = document.querySelector('.table');

function addTable() {
    let dataTable = requestTable();
    if(dataTable.length !== 0){
        dataTable.forEach(element => table.innerHTML += jsonToHtmlRow(element));
        updateCircles(dataTable, dataTable[dataTable.length-1].r);
        updateGraphText(dataTable[dataTable.length-1].r);
    }
}

let element = document.querySelector('#cleanTable')
element.onclick = cleanTable;
function cleanTable() {
    if(requestCleanTable()){
        let elementsTable = table.querySelectorAll(".table-row:not(.table-header-group)");
        elementsTable.forEach(element => element.remove());
        deleteCircles();
        deleteGraphText();
    }


}

function addRow(dataRow) {
    table.innerHTML += jsonToHtmlRow(dataRow);
}

// function jsonToHtmlRow(dataRow){
//     console.log(dataRow)
//     return "<div class = 'table-row'>" +
//         "<div>" + dataRow.x + "</div>" +
//         "<div>" + dataRow.y + "</div>" +
//         "<div>" + dataRow.r + "</div>" +
//         "<div>" + dataRow.result + "</div>" +
//         "<div><time>" + dataRow.currentTime.date.day + "." +
//         dataRow.currentTime.date.month + "." +
//         dataRow.currentTime.date.year + "<br>" +
//         dataRow.currentTime.time.hour + ":" +
//         dataRow.currentTime.time.minute + ":" +
//         dataRow.currentTime.time.second +
//         "</time></div>" +
//         "<div><time>" + dataRow.computationTime + "</time></div>" +
//         "</div>";
// }

function jsonToHtmlRow(dataRow) {
    let date = dataRow.currentTime
    return "<div class = 'table-row'>" +
        "<div>" + dataRow.x + "</div>" +
        "<div>" + dataRow.y + "</div>" +
        "<div>" + dataRow.r + "</div>" +
        "<div>" + dataRow.result + "</div>" +
        "<div><time>" + dataRow.currentTime[2] + "." +
        dataRow.currentTime[1] + "." +
        dataRow.currentTime[0] + "<br>" +
        dataRow.currentTime[3] + ":" +
        dataRow.currentTime[4] + ":" +
        dataRow.currentTime[5] +
        "</time></div>" +
        "<div><time>" + dataRow.computationTime + "</time></div>" +
        "</div>";
}

