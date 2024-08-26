// Smooth Scrolling for Carousel
document.addEventListener('DOMContentLoaded', function () {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const scrollAmount = 300; // Adjust this for the amount to scroll per click

    // Automatically scroll the carousel every 3 seconds
    setInterval(function () {
        carouselWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }, 3000);

    // Reset the scroll position to the start if it reaches the end
    carouselWrapper.addEventListener('scroll', function () {
        if (carouselWrapper.scrollLeft + carouselWrapper.clientWidth >= carouselWrapper.scrollWidth) {
            carouselWrapper.scrollTo({ left: 0, behavior: 'smooth' });
        }
    });
});

// Newsletter Form Validation
document.querySelector('.newsletter form').addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = document.querySelector('input[type="email"]');
    const emailValue = emailInput.value.trim();

    if (validateEmail(emailValue)) {
        alert('Thank you for subscribing!');
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
