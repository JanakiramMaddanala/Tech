const burger = document.querySelector('#burger');

burger.addEventListener('click', toggleNavBar);

function toggleNavBar(){
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-toggle');
    burger.classList.toggle('burger-toggle')
    const navlinks = document.querySelectorAll('.nav-links li');
    navlinks.forEach(link => console.log(link));
}