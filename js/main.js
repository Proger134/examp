"use strict";
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
  document.querySelector("body").classList.toggle("lock");
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
