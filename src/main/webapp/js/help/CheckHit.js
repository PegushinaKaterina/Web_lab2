function checkHit(xValue, yValue, rValue){
    const date = new Date();
    const offset = date.getTimezoneOffset();
    let r_args = {'x': xValue, 'y' : yValue, 'r': rValue, 'utc': offset};
    if(validate(xValue, yValue, rValue)){
        let table = requestCheckHit(r_args)
        if(table.length !== 0) {
            addRow(table[table.length-1]);
            updateCircles(table, table[table.length-1].r);
            updateGraphText(table[table.length-1].r);
        }
    } else {
        alert("Проверьте корректность введенных значений")
    }
}
