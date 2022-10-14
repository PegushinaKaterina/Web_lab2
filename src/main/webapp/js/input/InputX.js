let inputX = document.querySelector('#inputX')
let elementsX = inputX.querySelectorAll('button')
elementsX.forEach(element => {
    element.onclick = selectX;
});
function selectX(){
    let elementsXSelected = inputX.querySelectorAll(".selected")
    elementsXSelected.forEach(element => {
        element.classList.remove("selected");
    });
    this.classList.toggle("selected");
}