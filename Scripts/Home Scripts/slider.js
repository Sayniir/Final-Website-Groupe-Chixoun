const slides = document.querySelectorAll(".slides img");
const pauseBouton = document.getElementById("pause")
let slideIndex = 0;
let intervalID = null;
let pause = false;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    slides[slideIndex].classList.add("displaySlide");
    intervalID = setInterval(nextSlide, 5000);
}

function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function ShowSlide(index){

    if(index >= slides.length){
        slideIndex = 0
    }
    else if(index < 0){
        slideIndex = slides.length - 1
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    slideIndex--;
    ShowSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    ShowSlide(slideIndex);
}

function pauseSlider(){
    if(pause===false){
        clearInterval(intervalID);
        pauseBouton.textContent = "Start"
        pause = true;
    }
    else{
        intervalID = setInterval(nextSlide, 5000);
        pauseBouton.textContent = "Pause";
        pause = false
    }
}