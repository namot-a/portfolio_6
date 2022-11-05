const navBtn = document.querySelector('.nav__button');
const mobileNav = document.querySelector('.mobile__nav');
const body = document.body;

navBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMobileNav();
})

window.addEventListener('click', function() {
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav();
        
    }
})

mobileNav.addEventListener('click', function(event) {
    event.stopPropagation();
})

function toggleMobileNav() {
    body.classList.toggle('no-scroll')
    navBtn.classList.toggle('nav__button__close')
    mobileNav.classList.toggle('mobile__nav__active')
}