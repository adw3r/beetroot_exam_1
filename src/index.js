import LazyLoad from "vanilla-lazyload";
import WOW from "wow.js";
new WOW().init();

const lazyLoadInstance = new LazyLoad();
lazyLoadInstance.update()

const displayVideo = (btn) => {
    const frame = document.querySelector('iframe')

    frame.style.visibility = "visible";
    frame.style.opacity = "1";
    btn.style.display = "none";
    document.querySelector('.inner-video-wrap').dataset.bg = '';
}
document.displayVideo = displayVideo

const toggleMenu = () => {
    document.querySelectorAll('.js-hamburger').forEach(function (el) {
        el.classList.toggle('is-active');
        let mobile_menu = document.querySelector('.mobile-menu');
        if (mobile_menu.classList.contains('open')) {
            mobile_menu.classList.remove('open');
        } else {
            mobile_menu.classList.add('open');
        }
    })
}
document.toggleMenu = toggleMenu;

const toggle = document.getElementById('theme_switcher');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('body').dataset.bg = 'assets/images/dark/bg.jpg';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector('body').dataset.bg = 'assets/images/light/bg.jpg';
    }
    document.querySelector('body').removeAttribute('data-ll-status');        // если есть кастомные метки
    lazyLoadInstance.update()
});
