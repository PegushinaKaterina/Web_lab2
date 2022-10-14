let svg = document.querySelector('.svg')
let square = document.querySelector('.square')
let circle = document.querySelector('.circle')
svg.onclick = function(event) {
    let r = Math.round(circle.getBoundingClientRect().x) - Math.round(square.getBoundingClientRect().x);
    let x = event.clientX - Math.round(circle.getBoundingClientRect().x);
    let y = Math.round(circle.getBoundingClientRect().y) - event.clientY;
    let rValue = document.querySelector("[name='r']:checked")?.value;
    let xValue = rValue * x / r;
    let yValue = rValue * y / r;
    checkHit(xValue, yValue, rValue);
}
