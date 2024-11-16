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
window.onresize = setFooterAtBottom;


function clickMenuBtn(){
    document.getElementsByClassName('dropdown-btn')[0].classList.toggle('dropdown-btn-change-animation');
    document.getElementsByClassName('dropdown-content')[0].classList.toggle('dropdown-content-open');
}

function setPositionDropdownMenu(){
    var dropdownContent = document.getElementsByClassName('dropdown-content')[0];
    var topMenuContainer = document.getElementsByClassName('top-menu-container')[0];

    dropdownContent.style.top = topMenuContainer.getBoundingClientRect().bottom + 'px'; 
}

document.addEventListener("DOMContentLoaded", setPositionDropdownMenu);
window.onresize = setPositionDropdownMenu;
