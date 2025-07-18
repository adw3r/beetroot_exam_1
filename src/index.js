import LazyLoad from "vanilla-lazyload";

const lazyLoadInstance = new LazyLoad();
lazyLoadInstance.update()

const displayVideo = (btn) => {
    const frame = document.querySelector('iframe')

    frame.style.visibility = "visible";
    frame.style.opacity = "1";
    btn.style.display = "none";
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
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});
