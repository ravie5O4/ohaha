var x = document.getElementById("mySound"); 
var currentImageIndex = 1;
var totalImages = 16; 

function showNextPicture(answer) {
  if (answer) {
    currentImageIndex++;
    if (currentImageIndex > totalImages) {
      currentImageIndex = 1; 
    }
  }

  var image = document.getElementById("image");
  image.src = "images/pic" + currentImageIndex + ".jpeg";
}

function playAudio() { 
  x.play(); 
}