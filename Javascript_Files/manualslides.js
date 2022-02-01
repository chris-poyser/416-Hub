var slideNumber = [1,1,1,1];
var slideId = ["slide1","slide2","slide3","slide4"];

function plusSlides(n, num) {
  changeSlides(slideNumber[num] += n, num);
}

function changeSlides(n, num) {
  var i;
  var x = document.getElementsByClassName(slideId[num]);
  if (n > x.length) {slideNumber[num] = 1}
  if (n < 1) {slideNumber[num] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideNumber[num]-1].style.display = "block";
}

changeSlides(1, 0);
changeSlides(1, 1);
changeSlides(1, 2);
changeSlides(1, 3);
