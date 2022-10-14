let reset = document.querySelector('#reset');
reset.onclick = resetForm;
function resetForm() {
    let elementsXSelected = inputX.querySelectorAll(".selected")
    elementsXSelected.forEach(element => {
        element.classList.remove("selected");
    });
    inputX.classList.remove('error')
    inputY.classList.remove('error')
    inputR.classList.remove('error')
}