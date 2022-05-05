const btnMobile = document.getElementById('btn__mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const Navbar = document.getElementById('nav');
    Navbar.classList.toggle('active');
    const active = Navbar.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) { 
        event.currentTarget.setAttribute('aria-label', 'Close Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Open Menu');
    }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
