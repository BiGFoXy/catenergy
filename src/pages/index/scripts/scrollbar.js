import Scrollbar from 'smooth-scrollbar';
let myScroll = document.querySelector('.example__result-selector');

let images = Scrollbar.init(document.querySelector('.img-cont'));

myScroll.oninput = function(e) {
    const sliderPos = e.target.value;
    if (sliderPos == 2) {
        images.scrollTo(280, 0, 500);
    }
    else {
        images.scrollTo(0, 0, 500);
    }
} 

