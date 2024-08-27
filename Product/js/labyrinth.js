// labyrinth.js
document.addEventListener("DOMContentLoaded", function() {
    const buyNowButton = document.querySelector(".buy-now");

    buyNowButton.addEventListener("click", function(event) {
        event.preventDefault();

        // Check if the user has paid
        const hasPaid = confirm("Have you completed the payment?");

        if (hasPaid) {
            window.location.href = "download-link"; // Replace with actual download link
        } else {
            alert("Please complete the payment before downloading.");
        }
    });
});
