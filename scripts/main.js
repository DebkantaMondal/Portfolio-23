console.log('This is my Portfolio Site');

//Navigation Bar Handling
const humburgElement = document.getElementById("humburg-icon");
const mobileMenuOptions = document.getElementById("mobile-menu-options");
const mobileMenuClose = document.getElementById("mobile-menu-close");
//click event
humburgElement.addEventListener('click', () => {
    if (window.innerWidth <= 600) {
        mobileMenuOptions.style.display = 'block';
        mobileMenuOptions.classList.add("mobile-menu-screen");
    } else {
        mobileMenuOptions.style.display = 'none';
        mobileMenuOptions.classList.remove("mobile-menu-screen");
    }
})
mobileMenuClose.addEventListener('click', () => {
    if (window.innerWidth <= 600) {
        mobileMenuOptions.style.display = 'none';
        mobileMenuOptions.classList.remove("mobile-menu-screen");
    } else {
        mobileMenuOptions.style.display = 'none';
        mobileMenuOptions.classList.remove("mobile-menu-screen");
    }
})

//Weather Data Fetch
/*const url = `http://api.weatherstack.com/current?access_key=dd84379f24b00e2c03c04ec8de2a2a56&query=Basirhathttp://api.weatherstack.com/current?access_key=dd84379f24b00e2c03c04ec8de2a2a56&query=Basirhat`;

let data = [];

const weatherData = fetch(url)
    .then(response => {
        return response.json();
    })
    .then(result => {
        return result;
    })
    .catch(error => {
        console.log(error);
        return error;
    });


weatherData.then(data => {data.push(data)})

console.log(data);*/