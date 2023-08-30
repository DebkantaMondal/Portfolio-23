console.log('This is my Portfolio Site');

//Navigation Bar Handling
const humburgElement = document.getElementById("humburg-icon");
const mobileMenuOptions = document.getElementById("mobile-menu-options");
const mobileMenuClose = document.getElementById("mobile-menu-close");
//click event
humburgElement.addEventListener('click', () => {

    mobileMenuOptions.style.display = 'block';
    mobileMenuOptions.classList.add("mobile-menu-screen");

})
mobileMenuClose.addEventListener('click', () => {

    mobileMenuOptions.style.display = 'none';
    mobileMenuOptions.classList.remove("mobile-menu-screen");

})


