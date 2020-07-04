$(document).ready(function(){
    
    $('.humborger').click(function(){

        $('.main-contant').toggle();
      
    });

    $("body").niceScroll({
        cursorcolor: "#ff1313", 
        cursorwidth: "8px",
        cursorborder:'none'
    });

    // $('.card').hover(function(){

    //       $('this.more-in').slideDown().sibling().slideUp();
    // });

    
    $('.card').hover(function(){
        $(this).children('.more-in').slideToggle(400);
        $('.card .more-in').not( $(this).children('.more-in')).slideUp(0);
    });
    
//   $('div.slide h4').hover(function(){
//     $(this).next().slideToggle();
//     $('div.slide p').not( $(this).next()).slideUp();
      
//   });
$('.about-slider').slick();

$(".snake").snakeify({
      speed: 300
    });
    
    $('.day-tabs ul li').click(function(){

        $(this).addClass('active').siblings('li').removeClass('active');

    });
    $('select').niceSelect();

    $('a.d').on('click',function(e){
        e.preventDefault();
    });



    // for up button

    
 $(window).scroll(function(){
    // button up
    if($(window).scrollTop() >=550)
    {
        $('.up').fadeIn(1000);
    }
    else
    {
        $('.up').fadeOut(1000);
    }
 });

 if($(window).scrollTop() >=550)
 {
     $('.up').fadeIn(1000);
 }
 else
 {
     $('.up').fadeOut(1000);
 }
// up button click

$('.up button').click(function(){
    $('html , body').animate({
        scrollTop:0
    },500)

});












  });
