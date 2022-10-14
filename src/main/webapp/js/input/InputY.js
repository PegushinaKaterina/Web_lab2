let inputY = document.querySelector('#inputY')
let elementY = inputY.querySelector('input')
// elementY.oninput = regInput;
// elementY.onblur = regBlur;
elementY.oninput = regInputExp;
elementY.onblur = regBlurExp;