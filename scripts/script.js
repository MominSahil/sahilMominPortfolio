const myApp = {

}

$('a[href*=\\#]').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop : $(this.hash).offset().top
    }, 1000);
});

myApp.init = () => {
    console.log("Hire me and I will remove this console log.");
}

$(document).ready(function(){
    myApp.init();
})