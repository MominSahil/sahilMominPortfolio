const myApp = {};

$("a[href*=\\#]").on("click", function (e) {
  e.preventDefault();
  $("header").removeClass("menu__hideDropdown");

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
});

$("section").on("click", function () {
  $("header").removeClass("menu__hideDropdown");
});

myApp.init = () => {
  console.log("HIRE ME!");
};

$(document).ready(function () {
  myApp.init();
});
