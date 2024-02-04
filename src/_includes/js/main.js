// future use for gallery navigation

function showGallery(slide) {
    var selectedSlide = slide * 1;
    const galleryCarousel = document.querySelector('#gallery-large');
    
    var carouselInstance = bootstrap.Carousel.getOrCreateInstance(galleryCarousel);
    carouselInstance.cycle;   
    carouselInstance.to(selectedSlide);
}