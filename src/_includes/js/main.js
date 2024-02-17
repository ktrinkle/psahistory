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
        
        var hasTouchScreen = testBrowser();

        if (hasTouchScreen && (window.location.hostname == "psa-history" || window.location.hostname == "localhost"))
        {
            console.log('mobile check');
            window.open(window.location.origin + fileUri);
        } else {
            PDFObject.embed(fileUri, "#pdf", options);
            var myModal = new bootstrap.Modal(document.getElementById('pdfModal'));
            myModal.show();
        }
    }
}

function testBrowser() {
    // mozilla recommended method, 2024

    let hasTouchScreen = false;
    if ("maxTouchPoints" in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
        hasTouchScreen = navigator.msMaxTouchPoints > 0;
    } else {
        const mQ = matchMedia?.("(pointer:coarse)");
        if (mQ?.media === "(pointer:coarse)") {
            hasTouchScreen = !!mQ.matches;
        } else if ("orientation" in window) {
            hasTouchScreen = true; // deprecated, but good fallback
        } else {
            // Only as a last resort, fall back to user agent sniffing
            const UA = navigator.userAgent;
            hasTouchScreen =
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
        }
    }

    return hasTouchScreen;
}