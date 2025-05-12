// Function to load components
async function loadComponents() {
    try {
        // Load Border
        const borderResponse = await fetch('components/border.html');
        const borderHTML = await borderResponse.text();
        const borderContainer = document.getElementById('border');
        if (borderContainer) {
            borderContainer.innerHTML = borderHTML;
        } else {
            console.error('Border container not found');
        }

        // Load Header
        const headerResponse = await fetch('components/header.html');
        const headerHTML = await headerResponse.text();
        const headerContainer = document.getElementById('header');
        if (headerContainer) {
            headerContainer.innerHTML = headerHTML;
        } else {
            console.error('Header container not found');
        }

        // Load Footer
        const footerResponse = await fetch('components/footer.html');
        const footerHTML = await footerResponse.text();
        const footerContainer = document.getElementById('footer');
        if (footerContainer) {
            footerContainer.innerHTML = footerHTML;
        } else {
            console.error('Footer container not found');
        }

        // Run border management after components load
        if (typeof manageBorders === 'function') {
            manageBorders();
        }
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// Load components when the page loads
document.addEventListener('DOMContentLoaded', loadComponents);