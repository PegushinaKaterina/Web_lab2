function submitForm(){
    let xValue = document.querySelector("[name='x'].selected")?.value;
    let yValue = document.querySelector('#y').value;
    let rValue = document.querySelector("[name='r']:checked")?.value;
    checkHit(xValue, yValue, rValue);
}