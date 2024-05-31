function abrirNav() {
    document.getElementById("menuLateral").style.width = "250px";
    document.querySelector('nav').classList.add("nav-hidden");
}

function fecharNav() {
    document.getElementById("menuLateral").style.width = "0";
    document.querySelector('nav').classList.remove("nav-hidden");
}

const squidImg = document.getElementById('squid-img');

// Define the animation
const squidAnimation = () => {
    squidImg.src = './img/squid1.png';
    setTimeout(() => { squidImg.src = './img/squid2.png'; },500);
    setTimeout(() => { squidImg.src = './img/squid1.png'; },1500);
}

const animationDuration = 15 * 750;

const frameDuration = animationDuration / 4;
setInterval(squidAnimation, frameDuration);