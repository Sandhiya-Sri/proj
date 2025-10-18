// JavaScript enhancement 1: Button message
function showMessage() {
  alert("Hello! You clicked the button.");
}

// JavaScript enhancement 2: Image carousel
let currentImage = 1;
function nextImage() {
  currentImage++;
  if (currentImage > 5) currentImage = 1;
  document.getElementById("carouselImage").src =
    `https://picsum.photos/600/300?random=${currentImage}`;
}
function prevImage() {
  currentImage--;
  if (currentImage < 1) currentImage = 5;
  document.getElementById("carouselImage").src =
    `https://picsum.photos/600/300?random=${currentImage}`;
}
