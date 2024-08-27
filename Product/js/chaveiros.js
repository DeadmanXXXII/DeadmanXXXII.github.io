// Chaveiros Product-Specific JavaScript

document.addEventListener("DOMContentLoaded", function() {
    // Any product-specific JS functionality can go here

    const buyNowButton = document.querySelector('.buy-now');

    buyNowButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Handle the purchase process
        alert('Please complete your purchase on the payment page.');
        window.location.href = 'BuyNow.html';
    });
});
