var accordion = document.getElementsByClassName("container");
var contents = document.getElementsByClassName("content");
var headers = document.getElementsByClassName("label");

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

let slideIndex = 0;
showSlides();

function showSlides(){
  let i;
  let slides = document.getElementsByClassName("slide-img");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i<slides.length; i ++){
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length){slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);

}

