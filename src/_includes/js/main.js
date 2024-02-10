// future use for gallery navigation

function showGallery(slide) {
    var selectedSlide = slide * 1;
    const galleryCarousel = document.querySelector('#gallery-large');
    
    var carouselInstance = bootstrap.Carousel.getOrCreateInstance(galleryCarousel);
    carouselInstance.cycle;   
    carouselInstance.to(selectedSlide);
}

function showPdf(localFile) {
    const re = /[0-9]{6,8}/;
    if (re.test(localFile)) {
        var fileUri = '/files/' + localFile + '.pdf';
        var options = {
            assumptionMode: true
        };
        // document.getElementById("pdfObject").data = fileUri;
        PDFObject.embed(fileUri, "#pdf", options);

        // For mobile
        // window.location.href(fileUrl);

        var myModal = new bootstrap.Modal(document.getElementById('pdfModal'));
        myModal.show();
        
    }    
}