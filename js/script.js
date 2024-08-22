// script.js

// Example for a basic carousel functionality
document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');

    if (carouselWrapper) {
        let isMouseDown = false;
        let startX;
        let scrollLeft;

        carouselWrapper.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            startX = e.pageX - carouselWrapper.offsetLeft;
            scrollLeft = carouselWrapper.scrollLeft;
        });

        carouselWrapper.addEventListener('mouseleave', () => {
            isMouseDown = false;
        });

        carouselWrapper.addEventListener('mouseup', () => {
            isMouseDown = false;
        });

        carouselWrapper.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - carouselWrapper.offsetLeft;
            const walk = (x - startX) * 3; // scroll-fast
            carouselWrapper.scrollLeft = scrollLeft - walk;
        });
    }
});
