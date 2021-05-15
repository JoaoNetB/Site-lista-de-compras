function stateDelete(divDelete) {
    let displayDelete = document.getElementById(divDelete).style.display;

    if (displayDelete == "none") {
        document.getElementById(divDelete).style.display = "block";
    }
}

