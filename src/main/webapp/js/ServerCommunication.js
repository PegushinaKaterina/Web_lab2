function requestTable() {
    let table = [];
    $.ajax({
        type: "GET",
        url: "./controller",
        async: false,
        success: function(data) {
            table = data.table;
        },
        error: function(data) {
            alert(data);
        }
    });
    return table;
}

function requestTableForCircles(){
    let table = [];
    $.ajax({
        type: "GET",
        url: "./controller",
        async: false,
        success: function(data) {
            table = data.table;
        },
        error: function(data) {
            alert(data);
        }
    });
    return table;
}

function requestCheckHit(r_args){
    let table = [];
    $.ajax({
        url: "./controller",
        method: "POST",
        async: false,
        data: r_args,
        success: function (data) {
            table = data.table;
        },
        error: function (data) {
            alert(data);
            console.log(data);
        }
    });
    return table;
}

function requestCleanTable(){
    let isDelete = false;
    $.ajax({
        type: "DELETE",
        url: "./controller",
        async: false,
        success: function(data) {
            isDelete = true;
        },
        error: function(data) {
            alert(data);
        }
    });
    return isDelete;
}
//callback функции или promiss
// function requestCleanTable(){
//     $.ajax({
//         url: "./controller",
//         method: "POST",
//         async: false,
//         data: {"cleanTable": true},
//         success: function(data) {
//             alert(data);
//         },
//         error: function(data) {
//             alert(data);
//         }
//     });
// }
