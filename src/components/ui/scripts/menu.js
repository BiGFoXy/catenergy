let button = document.getElementById('menu__toggle');
let menu = document.querySelector('.header__links');

button.onchange = function() {
    if (button.checked) {
        menu.classList.add('visible')
    }
    else {
        menu.classList.remove('visible')
    }
}