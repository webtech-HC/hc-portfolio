const menuBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuBtn.classList.toggle('active');
});
