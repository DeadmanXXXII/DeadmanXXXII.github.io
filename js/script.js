document.addEventListener("DOMContentLoaded", function() {
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    let isDown = false;
    let startX;
    let scrollLeft;

    carouselWrapper.addEventListener("mousedown", (e) => {
        isDown = true;
        carouselWrapper.classList.add("active");
        startX = e.pageX - carouselWrapper.offsetLeft;
        scrollLeft = carouselWrapper.scrollLeft;
    });

    carouselWrapper.addEventListener("mouseleave", () => {
        isDown = false;
        carouselWrapper.classList.remove("active");
    });

    carouselWrapper.addEventListener("mouseup", () => {
        isDown = false;
        carouselWrapper.classList.remove("active");
    });

    carouselWrapper.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carouselWrapper.offsetLeft;
        const walk = (x - startX) * 3;
        carouselWrapper.scrollLeft = scrollLeft - walk;
    });
});
