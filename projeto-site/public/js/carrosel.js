const slides = document.querySelectorAll('[data-js="slide-item"]');
const nextButton = document.querySelector('[data-js="slide-button-proximo"]');
const prevButton = document.querySelector('[data-js="slide-button-antes"]');

let currentSlideIndex = 0;
let lastSlideIndex = slides.length -1;

const manipulateSlide = correctSlideIndex => {
    slides.forEach(slide => slide.classList.remove('item-visivel'));
    slides[correctSlideIndex].classList.add('item-visivel');
}

const nextSlide = () =>{
    let correctSlideIndex = currentSlideIndex == lastSlideIndex ? currentSlideIndex = 0 : ++currentSlideIndex;

    manipulateSlide(correctSlideIndex);
}

nextButton.addEventListener('click', () =>{
   /*  let correctSlideIndex = currentSlideIndex == lastSlideIndex ? currentSlideIndex = 0 : ++currentSlideIndex;

    manipulateSlide(correctSlideIndex); */

    nextSlide();

});

prevButton.addEventListener('click', () => {
    let correctSlideIndex = currentSlideIndex == 0 ? currentSlideIndex = lastSlideIndex : --currentSlideIndex;

    manipulateSlide(correctSlideIndex);
    

});

const loopSlide = () =>{
    setInterval(() =>{
        nextSlide();
    }, 2000)
}

window.addEventListener("load", loopSlide);