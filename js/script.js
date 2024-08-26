document.addEventListener("DOMContentLoaded", function() {
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    let isDown = false;
    let startX;
    let scrollLeft;

    function handleMouseDown(e) {
        isDown = true;
        carouselWrapper.classList.add("active");
        startX = e.pageX - carouselWrapper.offsetLeft;
        scrollLeft = carouselWrapper.scrollLeft;
    }

    function handleMouseLeave() {
        isDown = false;
        carouselWrapper.classList.remove("active");
    }

    function handleMouseUp() {
        isDown = false;
        carouselWrapper.classList.remove("active");
    }

    function handleMouseMove(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carouselWrapper.offsetLeft;
        const walk = (x - startX) * 3;
        carouselWrapper.scrollLeft = scrollLeft - walk;
    }

    function handleTouchStart(e) {
        isDown = true;
        startX = e.touches[0].pageX - carouselWrapper.offsetLeft;
        scrollLeft = carouselWrapper.scrollLeft;
    }

    function handleTouchEnd() {
        isDown = false;
    }

    function handleTouchMove(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - carouselWrapper.offsetLeft;
        const walk = (x - startX) * 3;
        carouselWrapper.scrollLeft = scrollLeft - walk;
    }

    carouselWrapper.addEventListener("mousedown", handleMouseDown);
    carouselWrapper.addEventListener("mouseleave", handleMouseLeave);
    carouselWrapper.addEventListener("mouseup", handleMouseUp);
    carouselWrapper.addEventListener("mousemove", handleMouseMove);
    
    carouselWrapper.addEventListener("touchstart", handleTouchStart);
    carouselWrapper.addEventListener("touchend", handleTouchEnd);
    carouselWrapper.addEventListener("touchmove", handleTouchMove);
});