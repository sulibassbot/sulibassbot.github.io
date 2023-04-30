// Code for carousel
let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}

prevBtn.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
});

nextBtn.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
});

// Code for search bar
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
searchBtn.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  // Code to search catalog for searchTerm
});
