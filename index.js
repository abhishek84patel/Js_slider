const slider = document.querySelector(".slider");

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const perviousBtn = document.querySelector(".per");

let activeSlide = 0;
const timer = 3000;

nextBtn.addEventListener("click", nextSlide)
perviousBtn.addEventListener("click", backSlide)

let auto = setInterval(autoslide, timer)
function backSlide() {
    clearInterval(auto)
    if (activeSlide === 0) {
        activeSlide = slides.length - 1;
    } else {
        activeSlide--;
    }

    slider.style.transform = `translateX(-${activeSlide * 100}%)`
    auto = setInterval(autoslide, timer)
}



function nextSlide() {

    clearInterval(auto)

    if (activeSlide === slides.length - 1) {
        activeSlide = 0
    } else {
        activeSlide++
    }


    slider.style.transform = `translateX(-${activeSlide * 100}%)`
    auto = setInterval(autoslide, timer)



}
function autoslide() {
    if (activeSlide === slides.length - 1) {
        activeSlide = 0
    } else {
        activeSlide++
    }


    slider.style.transform = `translateX(-${activeSlide * 100}%)`

}


