//Navbar load dynamically
const navBar = '<div class="top-navbar">'+
'<ul>'+
    '<li>My Portfolio</li>'+
'</ul>'+
'<ul class="menu" id="desktop-menu">'+
    '<li><a href="./index.html">Home</a></li>'+
    '<li>About</li>'+
    '<li><a href="./projects-services.html">Projects & Services</a></li>'+
    '<li>Contact</li>'+
'</ul>'+
'<ul class="menu-mobile">'+
    '<li>'+
        '<span class="material-symbols-outlined" id="humburg-icon">'+
            'menu'+
        '</span>'+
    '</li>'+
'</ul>'+
'</div>'+
'<div class="mobile-menu-options" id="mobile-menu-options">'+
'<ul class="top-header-menu">'+
    '<li>My Portfolio</li>'+
    '<li class="menu-close" id="mobile-menu-close">'+
        '<span class="material-symbols-outlined">'+
            'close'+
        '</span>'+
    '</li>'+
'</ul>'+
'<ul class="mobile-menus">'+
    '<div class="first-half">'+
        '<li><a href="./index.html">Home</a></li>'+
        '<li>About</li>'+
        '<li><a href="./projects-services.html">Projects & Services</a></li>'+
        '<li>Contact</li>'+
    '</div>'+
    '<div class="second-half">'+
        '<li class="welcome-menu">Welcome To My portfolio Site</li>'+
        '<li class="lang-dropdown">'+
            '<select name="lang-dd" id="lang-dd">'+
                '<option value="en-in">English-India</option>'+
            '</select>'+
        '</li>'+
    '</div>'+
'</ul>'+
'</div>';

const topbar = '<div class="top-notification">'+
'<p>No Notifications Found !!</p>'+
'</div>';

const footer = '<div class="footer">'+
'<p>Designed & Maintained By Debkanta Mondal. Copyright 2023-24</p>'+
'</div>';


document.getElementById("nav-bar").innerHTML = navBar;
document.getElementById("top-bar").innerHTML = topbar;
document.getElementById("footer").innerHTML = footer;



