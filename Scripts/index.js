function stateDelete(divDelete) {
    let displayDelete = document.getElementById(divDelete).style.display;

    if (displayDelete == "none") {
        document.getElementById(divDelete).style.display = "block";
    } else if (displayDelete == "block") {
        document.getElementById(divDelete).style.display = "none";
    }
}

function alternatives(valor) {

    if (valor == "yes") {
        alert("Esse conteúdo foi apagado")
        stateDelete('choose-delete');
    } else if (valor == "no") {
        stateDelete('choose-delete');
    }
}