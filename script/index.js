$(document).ready(function () {
  // init Isotope
  var $grid = $(".portfolio").isotope();

  // filter items on menu click
  $(".portfolio-menu").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // filter items on menuActive click
  $(".portfolio-menu").on("click", "li", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // jQuery 1.7.2+ or Zepto.js
  $(".image-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // init owl-carousel-product-area
  $(".skills-area-wapper").owlCarousel({
    autoplay: true,
    dots: false,
    nav: false,
    margin: 10,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
      320: {
        items: 1,
      },
      500: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // init owl-carousel-customar-area
  $(".customar-area-wapper").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: "linear",
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
      0: {
        items: 3,
      },
      500: {
        items: 3,
      },
      600: {
        items: 4,
      },
      800: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });

  // smoothscroll js Not
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 100,
    speedAsDuration: true,
  });

  // bottom to top scroll javaScript here
  const scrollTop = document.getElementById("scrollTop");
  window.addEventListener("scroll", scrollFuncton);
  function scrollFuncton() {
    if (window.pageYOffset > 300) {
      scrollTop.style.display = "block";
    } else {
      scrollTop.style.display = "none";
    }
  }
  scrollTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});
