$(document).ready(function() {
  var owl = $('.owl-carousel');
  var mousewheel = $('.owl-mousewheel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  mousewheel.owlCarousel({
      loop: true,
      nav: true,
      margin: 0,
      responsive: {
        0: {
          items: 4
        },
        600: {
          items: 6
        },
        960: {
          items: 6
        },
        1300: {
          items: 6
        }
      }
    });
})

