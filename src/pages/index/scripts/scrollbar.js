import Scrollbar from 'smooth-scrollbar';

window.onresize = changeScroll;
window.onload = changeScroll;


function changeScroll() {
    let myScroll = document.querySelector('.example__result-selector');
    let cont = document.querySelector('.img-cont');
    let images = Scrollbar.init(cont);

    if (document.body.clientWidth <= 675) {
        let images = Scrollbar.init(cont);
        myScroll.oninput = function(e) {
            const sliderPos = e.target.value;
            if (sliderPos == 2) {
                images.scrollIntoView(document.querySelector('.example__result-cat2'));
            }
            else {
                images.scrollIntoView(document.querySelector('.example__result-cat1'));
            }
        } 
    }
    else {
        images.destroy(cont);
    }
}
