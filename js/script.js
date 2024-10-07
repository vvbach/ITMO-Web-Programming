function setFooterAtBottom(){
    var footer = document.getElementsByTagName('footer')[0];
    var windowHeight = window.innerHeight;
    var documentHeight = document.scrollingElement.offsetHeight;

    if (documentHeight < windowHeight){
        footer.classList.add('bottom');
    }
    else {
        footer.classList.remove('bottom');
    }
}

document.addEventListener("DOMContentLoaded", setFooterAtBottom);

window.onresize = setFooterAtBottom
