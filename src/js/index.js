document.addEventListener("DOMContentLoaded", function() {
    const botaoList = document.getElementById("list");
    const menuNav = document.querySelector(".cabecalho nav");

    botaoList.addEventListener("click", function() {
        if (menuNav.style.display === "flex") {
            menuNav.style.display = "none";
        } else {
            menuNav.style.display = "flex";
        }
    });
});

/*----------------------------------*/

function controlNext(button) {
    const carrossel = button.parentNode.previousElementSibling;
    const totalSlides = carrossel.children.length;
    let currentSlide = parseInt(carrossel.getAttribute('data-current-slide') || 0);
    
    currentSlide = (currentSlide + 1) % totalSlides; 
    const slideWidth = carrossel.clientWidth;
    const offset = -currentSlide * slideWidth;
    
    carrossel.style.transform = `translateX(${offset}px)`;
    carrossel.setAttribute('data-current-slide', currentSlide);
}

function controlBack(button) {
    const carrossel = button.parentNode.previousElementSibling;
    const totalSlides = carrossel.children.length;
    let currentSlide = parseInt(carrossel.getAttribute('data-current-slide') || 0);
    
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    const slideWidth = carrossel.clientWidth;
    const offset = -currentSlide * slideWidth;

    carrossel.style.transform = `translateX(${offset}px)`;
    carrossel.setAttribute('data-current-slide', currentSlide);
}