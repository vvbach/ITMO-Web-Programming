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

function highlightActiveMenu(){
    const menuItems = document.querySelectorAll('.header__dropdown-link, .header__nav-link');
    const currentPage = document.location.pathname.split('/').pop();
    menuItems.forEach((item) => {
        if (item.getAttribute('href') == currentPage){
            item.classList.add('header__link-activated');
        }
        else {
            item.classList.remove('header__link-activated');
        }
    });
}

function initialize(){
    setFooterAtBottom();
    setPositionDropdownMenu();
    setContentPosition();
    highlightActiveMenu();
}

document.addEventListener("DOMContentLoaded", initialize);
window.onresize = initialize;
