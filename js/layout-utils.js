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

function setPositionDropdownMenu(){
    var dropdownContent = document.getElementsByClassName('header__dropdown-content')[0];
    var menuContainer = document.getElementsByClassName('header__menu-container')[0];

    dropdownContent.style.top = menuContainer.getBoundingClientRect().bottom + 'px'; 
}

function setContentPosition(){
    var topMenuContainer = document.getElementsByClassName('header__menu-container')[0];
    var content = document.getElementsByClassName('content')[0];

    content.style.marginTop = topMenuContainer.getBoundingClientRect().bottom + window.innerWidth * 0.03 + 'px'
}

function clickMenuBtn(){
    document.getElementsByClassName('header__dropdown-btn')[0].classList.toggle('header__dropdown-btn-change-animation');
    document.getElementsByClassName('header__dropdown-content')[0].classList.toggle('header__dropdown-content-open');
}

function initialize(){
    setFooterAtBottom();
    setPositionDropdownMenu();
    setContentPosition();
}

document.addEventListener("DOMContentLoaded", initialize);
window.onresize = initialize;
