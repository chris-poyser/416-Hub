var slideNumber = 0;
function transitionSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  var squares = document.getElementsByClassName("square");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideNumber++;

  if (slideNumber > slides.length) {slideNumber = 1}
  for (i = 0; i < squares.length; i++) {
    squares[i].className = squares[i].className.replace(" active", "");
  }
  
  slides[slideNumber-1].style.display = "block";
  squares[slideNumber-1].className += " active";
  setTimeout(transitionSlides, 5000); // Change image every 5 seconds
}

transitionSlides();
