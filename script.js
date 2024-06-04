function abrirNav() {
    document.getElementById("menuLateral").style.width = "250px";
    document.querySelector('nav').classList.add("nav-hidden");
}

function fecharNav() {
    document.getElementById("menuLateral").style.width = "0";
    document.querySelector('nav').classList.remove("nav-hidden");
}