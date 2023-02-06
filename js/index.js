var mobileButton = document.getElementById('menu-button')
var mobileNav = document.getElementById('nav-menu-mobile')


function openMenu() {
    
    mobileNav.classList.toggle('opened')
    
}

mobileButton.addEventListener('click', openMenu)


function closeMenu() {
    mobileNav.classList.remove('opened')

}



var menuMobileLink = document.getElementsByClassName('mobileLink')

Array.from(menuMobileLink).forEach((menuMobileLink) => {
    
    menuMobileLink.addEventListener('click', closeMenu)

});


function changeTheme() {

    var bodyDoc = document.body 
    bodyDoc.style.backgroundColor = 'black'

    
}
