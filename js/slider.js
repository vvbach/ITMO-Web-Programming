$(document).ready(function () {
    $('.slider-wrapper').slick({
        infinite: true,          
        slidesToShow: 1,         
        slidesToScroll: 1,              
        arrows: true,  
        prevArrow: $('.slider-prev'),
        nextArrow: $('.slider-next'),        
        autoplay: true,          
        autoplaySpeed: 3000,     
    });
});
  