const myApp = {};

$("a[href*=\\#]").on("click", function (e) {
  e.preventDefault();
  $("header").removeClass("menu__hideDropdown");
  $(".fa-times").removeClass("menu__dropdown--close");

  $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top,
    },
    1500
  );
});

$(".menu__dropdown i").on("click", function (e) {
  e.preventDefault();
  $(".menu").css("display", "flex");
  $("header").toggleClass("menu__hideDropdown");
  $(".fa-times").toggleClass("menu__dropdown--close");
  $(".fa-bars").toggleClass("menu__dropdown--open");
});

$("section").on("click", function () {
  $("header").removeClass("menu__hideDropdown");
  $(".fa-times").removeClass("menu__dropdown--close");
});

myApp.init = () => {
  let typed = new Typed(".home__work--typed", {
    strings: ["Front-End Developer", "Engineer", "Volunteer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
};

$(document).ready(function () {
  myApp.init();
});
