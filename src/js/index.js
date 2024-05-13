/*----------------todos------------------*/

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

/*----------------index------------------*/

window.addEventListener('DOMContentLoaded', (event) => {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('welcomeMessage').textContent = username;
    }
});

/*----------------lista de produtos------------------*/

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

/*----------------cadastro------------------*/

document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    if (!username.value) {
        document.getElementById('usernameError').textContent = 'Por favor, preencha o nome de usuário.';
        username.classList.add('error');
    }
    
    if (!email.value) {
        document.getElementById('emailError').textContent = 'Por favor, preencha o email.';
        email.classList.add('error'); 
    } else if (!isValidEmail(email.value)) {
        document.getElementById('emailError').textContent = 'Por favor, insira um email válido.';
        email.classList.add('error');
    }
    
    if (!password.value) {
        document.getElementById('passwordError').textContent = 'Por favor, preencha a senha.';
        password.classList.add('error');
    } else if (password.value.length < 8) {
        document.getElementById('passwordError').textContent = 'A senha deve ter pelo menos 8 caracteres.';
        password.classList.add('error');
    }
    
    if (username.value && email.value && password.value && isValidEmail(email.value) && password.value.length >= 8) {
        window.location.href = './index.html';
    }
});

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/*----------------login------------------*/

function toggleInput() {
    var usernameInput = document.getElementById('usernameInput');
    var emailInput = document.getElementById('emailInput');

    if (usernameInput.style.display === 'none') {
        usernameInput.style.display = 'flex';
        emailInput.style.display = 'none';
    } else {
        usernameInput.style.display = 'none';
        emailInput.style.display = 'flex';
    }
}

document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    if (!username.value) {
        document.getElementById('usernameError').textContent = 'Por favor, preencha o nome de usuário.';
        username.classList.add('error');
    }
    
    if (!email.value) {
        document.getElementById('emailError').textContent = 'Por favor, preencha o email.';
        email.classList.add('error'); 
    } else if (!isValidEmail(email.value)) {
        document.getElementById('emailError').textContent = 'Por favor, insira um email válido.';
        email.classList.add('error');
    }
    
    if (!password.value) {
        document.getElementById('passwordError').textContent = 'Por favor, preencha a senha.';
        password.classList.add('error');
    } else if (password.value.length < 8) {
        document.getElementById('passwordError').textContent = 'A senha deve ter pelo menos 8 caracteres.';
        password.classList.add('error');
    }
    
    if (username.value && email.value && password.value && isValidEmail(email.value) && password.value.length >= 8) {
        window.location.href = './index.html';
    }
});

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
