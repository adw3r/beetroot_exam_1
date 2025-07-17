import LazyLoad from "vanilla-lazyload";

const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
});
lazyLoadInstance.update()

const displayVideo = (btn) => {
    const frame= document.querySelector('iframe')

    frame.style.visibility = "visible";
    frame.style.opacity = "1";
    btn.style.display = "none";
}
document.displayVideo = displayVideo