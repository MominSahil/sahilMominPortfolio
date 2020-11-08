const myApp = {

}

$('a[href*=\\#]').on('click', function(e){
    e.preventDefault();
    // const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    // const animationName = 'animated shake'
    $('header').removeClass('menu__hideDropdown');
    // $('main section').addClass('showHide');
    // $(this.hash).removeClass('showHide');
    // $(this.hash).addClass(animationName).one(animationEnd, function() {
    //     $(this.hash).removeClass(animationName);
    // })

    $('html, body').animate({
        scrollTop : $(this.hash).offset().top
    }, 1000);
});

$('.menu__dropdown i').on('click', function (e) {
    e.preventDefault();
    $('.menu').css("display", "flex");
    $('header').toggleClass('menu__hideDropdown');
})

$('section').on('click', function() {
    $('header').removeClass('menu__hideDropdown');
})

myApp.init = () => {
    console.log("HIRE ME!");
}

$(document).ready(function(){
    myApp.init();
})