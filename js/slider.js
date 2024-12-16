function setFooterAtBottom(){
    var footer = document.getElementsByTagName('footer')[0];
    var content = document.querySelector('.content');
    var windowHeight = window.innerHeight;
    footerHeight = footer.getBoundingClientRect().height;
    if (content.getBoundingClientRect().height + parseFloat(content.style.marginTop) < windowHeight - footerHeight){
        footer.classList.add('bottom');
    }
    else {
        footer.classList.remove('bottom');
    }
}

$(document).ready(function () {
    $('.slider-wrapper').on('init', function () {
        setFooterAtBottom();
    });

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