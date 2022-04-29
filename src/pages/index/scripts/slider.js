let slider = document.getElementById("catSlider")
let foreground = document.querySelector(".example__result-cat2")

slider.oninput = function(e) {
    const sliderPos = e.target.value;
    foreground.style.width = `${sliderPos}%`;
}