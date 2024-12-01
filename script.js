// Variables
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];
let current = 0;

// Function to cycle images
function carousel() {
    var img = document.getElementById("slider");
    current = (current + 1) % images.length;
    img.src = images[current];
    setTimeout(carousel, 3000); // Changes image every 3 seconds
}

// Initialize carousel on page load
window.onload = carousel;
