"use strict";

// WOW
new WOW().init();
"use strict";

// Slider
$(document).ready(function () {
  $(".comments-slider").slick({
    arrows: true,
    dots: true,
    infinite: false
  });
});
"use strict";

// Slider
$(document).ready(function () {
  $(".first-screen-slider").slick({
    arrows: true,
    dots: false,
    infinite: false,
    prevArrow: $('.first-screen-slider-arrow-left'),
    nextArrow: $('.first-screen-slider-arrow-right')
  });
}); // Bottom hover

if (window.innerWidth > 480) {
  $(".first-screen-slider__bottom").hover(function () {
    var leftCss = {
      transform: "translateX(-500%)"
    };
    var rightCss = {
      transform: "translateX(500%)"
    };
    $(".first-screen-slider-arrow-left").css(leftCss);
    $(".first-screen-slider-arrow-right").css(rightCss);
  }, function () {
    var UnCss = {
      transform: "translateX(0)"
    };
    $(".first-screen-slider-arrow-left").css(UnCss);
    $(".first-screen-slider-arrow-right").css(UnCss);
  });
}
"use strict";

var validateForms = function validateForms(selector, rules, successModal, yaGoal) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function submitHandler(form) {
      var formData = new FormData(form);
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("form sended");
          }
        }
      };

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData); // modal show

      form.reset();
    }
  });
}; // Example
// validateForms(".contact__form", {
//         name: {required: true, minLength: 2},
//         contacts: {required: true, minLength: 1},
//         recommendation: {required: true, minLength: 1},
//     },
//     "contact-modal" 
// )
// window.onscroll = function showHeader() {
//     let header = document.querySelector(".header");
//     if (window.pageYOffset > 200) {
//         header.classList.add("header-fixed");
//     } else {
//         header.classList.remove("header-fixed");
//     }
// }
"use strict";
"use strict";

var header = document.querySelector(".header");
var burger = document.querySelector(".header__burger");
var menu = document.querySelector(".header__menu");
burger.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("dark");
  menu.classList.toggle("active");
  document.querySelector(".body").classList.toggle("lock");
});
"use strict";

// Slider
$(document).ready(function () {
  $(".trust-slider").slick({
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
    speed: 1000,
    pauseOnFocus: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
