function validate(xValue, yValue, rValue){
    // let xValueIsCorrect =  xValue !== undefined && !isNaN(xValue);
    let xValueIsCorrect = xValueValidate(xValue);
    let yValueIsCorrect = yValueValidate(yValue);
    let rValueIsCorrect =  rValue !== undefined;
    let XYRIsCorrect = xValueIsCorrect && yValueIsCorrect && rValueIsCorrect;
    if (xValueIsCorrect){
        inputX.classList.remove('error')
    } else {
        inputX.classList.add('error')
    }
    if (yValueIsCorrect){
        inputY.classList.remove('error')
    } else {
        inputY.classList.add('error')
    }
    if (rValueIsCorrect){
        inputR.classList.remove('error')
    } else {
        inputR.classList.add('error')
    }
    return XYRIsCorrect;

    function xValueValidate(x) {
        let xParsed = Number(x);
        return x !== '' && !isNaN(xParsed) && xParsed >= -3 && xParsed <= 5;
    }
    function yValueValidate(y) {
        let yParsed = Number(y);
        return y !== '' && !isNaN(yParsed) && yParsed > -5 && yParsed < 3;
    }
}