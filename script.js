function slider (qualquerc) {
    document.querySelector('.one').src = qualquerc;
}

let menu = document.querySelector ('#menu-icon')
let navbar = document.querySelector ('.navbar')

menu.onclick = () => {
    menu.classList.toggle ('bx-x')
    navbar.classList.toggle ('open')
}