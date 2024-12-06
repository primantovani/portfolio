// Seleciona o botão e o menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Adiciona o evento de clique
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show'); // Alterna a classe "show"
});