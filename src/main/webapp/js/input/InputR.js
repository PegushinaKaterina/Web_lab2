let inputR = document.querySelector('#inputR')
inputR.onclick = click;
function click(){
    let rValue = document.querySelector("[name='r']:checked")?.value;
    if (rValue !== undefined){
        let table = requestTableForCircles()
        if(table.length !== 0) {
            updateCircles(table, rValue);
        }
        updateGraphText(rValue);
    }
}