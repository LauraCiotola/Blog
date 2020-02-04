$(".subscribe").click(function (){
    $('#hide').removeClass('nascondi');
    $('#hide').addClass('block');

    $('body').addClass('noscroll');
});
$(".close").click(function (){
    $('#hide').addClass('nascondi');
    $('#hide').removeClass('block');

    $('body').removeClass('noscroll');
});