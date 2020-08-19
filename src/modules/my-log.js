//exportaciones parcialles
/*module.exports.info = function info (text){
    console.log("INFO", text);

    return text;
}

modulee.exports.error = function error (text){
    console.log("ERROR", text);

    return text;
}

module.exports.info = info;
module.exports.error = error;*/

// exportaciones globales
function info (text){
    console.log("INFO", text);

    return text;
}

function error (text){
    console.log("ERROR", text);

    return text;
}

module.exports = {info,error};