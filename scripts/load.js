//Navbar load dynamically
const navBar = '<div class="top-navbar">'+
'<ul>'+
    '<li>My Portfolio</li>'+
'</ul>'+
'<ul class="menu" id="desktop-menu">'+
    '<li><a href="./index.html">Home</a></li>'+
    '<li><a href="./about.html">About</a></li>'+
    '<li><a href="./projects-services.html">Projects & Services</a></li>'+
    '<li><a href="./contact.html">Contact</a></li>'+
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
        '<li><a href="./about.html">About</a></li>'+
        '<li><a href="./projects-services.html">Projects & Services</a></li>'+
        '<li><a href="./contact.html">Contact</a></li>'+
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
'<p>Designed & Maintained By Debkanta Mondal. Copyright 2023-24&nbsp;&nbsp;<a href="./tnc.html">(Terms & Conditions | Privacy Policy)</a></p>'+
'</div>';

const mentainancePage = '<h1 class="mentainance-text">Page Under Mentainance</h1>';


document.getElementById("nav-bar").innerHTML = navBar;
document.getElementById("top-bar").innerHTML = topbar;
document.getElementById("footer").innerHTML = footer;

const pageMentainance = document.getElementById("page-mentainance");
if(pageMentainance != null) pageMentainance.innerHTML = mentainancePage;



