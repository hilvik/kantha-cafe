// Function to handle border visibility
function manageBorders() {
    const topBorder = document.querySelector('.top-border');
    const bottomBorder = document.querySelector('.bottom-border');
    
    // Calculate scroll position
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // Hide top border when scrolled down slightly
    if (scrollPosition > 50) {
        topBorder.classList.add('hidden');
    } else {
        topBorder.classList.remove('hidden');
    }
    
    // Show bottom border only when very close to the bottom of the page
    if (scrollPosition + windowHeight >= documentHeight - 100) { // 100px from the bottom
        bottomBorder.classList.add('visible');
    } else {
        bottomBorder.classList.remove('visible');
    }
}

// Add scroll event listener
window.addEventListener('scroll', manageBorders);

// Ensure borders are visible on initial page load
document.addEventListener('DOMContentLoaded', function() {
    // Make sure top border is visible initially (remove any 'hidden' class that might be there)
    const topBorder = document.querySelector('.top-border');
    if (topBorder) {
        topBorder.classList.remove('hidden');
    }
    
    // Check if we need to show bottom border (if page is very short)
    manageBorders();
});