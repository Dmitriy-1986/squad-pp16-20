$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});

let r, g, b, color, intColor;
intColor = Math.floor(Math.random()  * Math.pow(2, 24));
r = intColor >> 16;
g = (intColor >> 8) & 255;
b = intColor & 255;
color = `rgb( ${r}, ${g}, ${b} )`;
document.body.style.backgroundColor = color;
