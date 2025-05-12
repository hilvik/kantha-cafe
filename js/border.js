// Function to handle border visibility
function manageBorders() {
    const topBorder = document.querySelector('.top-border');
    const bottomBorder = document.querySelector('.bottom-border');
    
    // Hide top border when scrolled down
    if (window.scrollY > 50) {
        topBorder.classList.add('hidden');
    } else {
        topBorder.classList.remove('hidden');
    }
    
    // Show bottom border when near the end of the page
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollPosition >= documentHeight - 200) { // 200px from the bottom
        bottomBorder.classList.add('visible');
    } else {
        bottomBorder.classList.remove('visible');
    }
}

// Add scroll event listener
window.addEventListener('scroll', manageBorders);

// Also check on page load
document.addEventListener('DOMContentLoaded', manageBorders);