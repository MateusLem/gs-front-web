function abrirNav() {
    document.getElementById("menuLateral").style.width = "15rem";
    document.querySelector('nav').classList.add("nav-hidden");
}

function fecharNav() {
    document.getElementById("menuLateral").style.width = "0";
    document.querySelector('nav').classList.remove("nav-hidden");
}