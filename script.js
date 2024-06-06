const menu = document.querySelector(".menu-lateral");
const linksSections = [
    {link: "linkProblema", section: "problema"},
    {link: "linkTecnologia", section: "tecnologia"},
    {link: "linkObjetivo", section: "objetivo"},
    {link: "linkPublico", section: "publico"},
    {link: "linkBeneficios", section: "beneficios"},
    {link: "linkImpacto", section: "impacto"}
];

// Funções para abrir e fechar o menu lateral
function abrirNav() {
    const screenWidth = window.innerWidth;

    // Condições para definir o font-size com base na largura da tela
    if (screenWidth >= 1300) {
        menu.style.width = "20%";

    } else if (screenWidth >= 650) {
        menu.style.width = "20%";
        document.body.style.fontSize = "16px";

    } else if (screenWidth >= 425) {
        menu.style.width = "30%";
        document.body.style.fontSize = "14px";

    } else if (screenWidth >= 375) {
        menu.style.width = "35%";
        document.body.style.fontSize = "12px";

    } else if (screenWidth >= 320) {
        menu.style.width = "40%";
        document.body.style.fontSize = "12px";

    } else {
        menu.style.width = "40%";
        document.body.style.fontSize = "12px";
    }
}

function fecharNav() {
    menu.style.width = "0";
}


// Função genérica para adicionar eventos de clique nos links
function addScrollEvent(linkId, sectionId) {
    document.getElementById(linkId).addEventListener("click", function() {
        scrollToSection(sectionId);
    });
}

// Função para rolar até a seção específica com deslocamento de cabeçalho
function scrollToSection(id) {
    const element = document.getElementById(id);
    const headerOffset = 60;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: "smooth"
    });
}
linksSections.forEach(item => addScrollEvent(item.link, item.section));
