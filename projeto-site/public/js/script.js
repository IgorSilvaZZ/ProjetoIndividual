
const slides = document.querySelectorAll('[data-js="carousel__item"]');
const nextButton = document.querySelector('[data-js="carousel__button--next"]');
const prevButton = document.querySelector('[data-js="carousel__button--prev"]');

let currentSlideIndex = 0;
let lastSlideIndex = slides.length -1;

const manipulateSlidesClasses = correctSlideIndex =>{
    slides.forEach(slide => slide.classList.remove('carousel__item--visible'));
    slides[correctSlideIndex].classList.add('carousel__item--visible');
}

nextButton.addEventListener('click', () => {

    /* if(currentSlideIndex === slides.length -1){
        currentSlideIndex = 0;
    }else{
        currentSlideIndex++;
    } */

    let correctSlideIndex = currentSlideIndex == lastSlideIndex
        ? currentSlideIndex = 0
        : ++currentSlideIndex;

    manipulateSlidesClasses(correctSlideIndex);
})

prevButton.addEventListener('click', () => {

    /* if(currentSlideIndex === 0){
        currentSlideIndex = slides.length - 1;
    }else{
        currentSlideIndex--;
    } */

    let corectSlideIndex = currentSlideIndex === 0 
        ? currentSlideIndex = lastSlideIndex
        : --currentSlideIndex;

    manipulateSlidesClasses(corectSlideIndex);

})

/* const letter = document.querySelector('#letter').innerHTML;
const letterArray = letter.split('');

var l;

document.getElementById('letter').innerHTML = '';

cont = 0;

const machineLetter = () => {
    if (cont < letterArray.length) {
        writter(cont)
        cont++;

        setTimeout(machineLetter, 50)
    }
}

const writter = (contador) => {
    document.getElementById('letter').innerHTML += letterArray[contador];
}

window.onload = machineLetter; */