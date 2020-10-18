const myApp = {

}

$('a[href*=\\#]').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop : $(this.hash).offset().top
    }, 1000);
});

$('.menu__dropdown').on('click', function (e) {
    e.preventDefault();
    $('.menu').css("display", "flex");
    $('header').toggleClass('menu__hideDropdown');
    console.log("clicking fine");
})

$('div:not(.menu__dropdown').on('click', function() {
    $('header').removeClass('menu__hideDropdown');
})

myApp.init = () => {
    console.log("Hire me and I will remove this console log.");
}

$(document).ready(function(){
    myApp.init();
})