//script for top-nav text slideshow
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000);


//passenger not go below 1 seat
const seatsInput = document.getElementById("seats");

seatsInput.addEventListener("input", function() {
  if (seatsInput.value < 1) {
    seatsInput.value = "";
  }
});


//search form
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}


