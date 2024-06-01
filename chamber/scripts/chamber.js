// Get current date and time

const lastModif = document.lastModified;
const lastModifText = "Last Modified: " + lastModif;
document.getElementById('lastModified').innerHTML = lastModifText;

// weekday: 'long', month: 'short', day: 'numeric',
const yearOption = {year: 'numeric'};
const monthOption ={month: 'short'}

const currentYear = new Date().toLocaleDateString('en-US', yearOption);
const currentMonth = new Date().toLocaleDateString('en-US', monthOption);

const copyrightYear = '&copy' + currentYear;

document.getElementById('currentDate').innerHTML = copyrightYear + " - WDD230 Web Frontend Development";
// document.getElementById('caption').textContent = `${currentYear} ${currentMonth}`;




// Responsive Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('ul');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// Days since last Visit Local Storage

document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.getElementById('message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = new Date();
    
    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = currentVisit - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        
        if (daysDifference < 7) {
            messageElement.textContent = "Back so soon? Great!";
        } else {
            messageElement.textContent = `It's been ${daysDifference} days since your last visit.`;
        }
    } else {
        messageElement.textContent = "Welcome! This is your first visit.";
    }
    
    localStorage.setItem('lastVisit', currentVisit);
});



// Directory Page, get info from JSON

const baseURL = "https://mholmes755.github.io/wdd230";
const membersURL = "https://mholmes755.github.io/wdd230/chamber/data/members.json";
const companyCards = document.querySelector('#companyCards');

async function getMembers(membersURL){

    // Fetch Data from URL
    const response = await fetch(membersURL);

    // Parse Data in JSON Format
    const data = await response.json();

    // Display members according to the name "companies" in my json file
    console.log(data);
    displayMembers(data.companies);
};

const displayMembers = (companies) =>{
    companies.forEach(companyGroup => {
        companyGroup.company.forEach(company =>{

            let section = document.createElement('section');
            let name = document.createElement('h3');
            name.textContent = company.name;

            let address = document.createElement('p');
            address.textContent = `Address: ${company.address}`;

            let phoneNumber = document.createElement('p');
            phoneNumber.textContent = `Phone Number: ${company.phoneNumber}`;

            let websiteURL = document.createElement('p');
            websiteURL.textContent = company.websiteURL;

            let icon = document.createElement('img');
            icon.setAttribute('src', company.icon);
            icon.setAttribute('width', '100');
            icon.setAttribute('height', '50');
            
            

            let membershipLevel = document.createElement('p');
            membershipLevel.textContent = `Member Level: ${company.membershipLevel}`;

            let description = document.createElement('p');
            description.textContent = company.description;
    
            section.appendChild(icon);
            section.appendChild(name);
            section.appendChild(description);
            section.appendChild(address);
            section.appendChild(phoneNumber);
            section.appendChild(membershipLevel);
            section.appendChild(websiteURL);

            companyCards.appendChild(section);
        });

    });

}

getMembers(membersURL);




// Weather Information
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const windSpeed = document.querySelector('#windSpeed');
const description = document.querySelector('#description');
const forecastContainer = document.querySelector('#forecast');

const currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=43.61&lon=-116.19&units=imperial&appid=facb7aca3b14efbdf278cb020b3ec24c';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.61&lon=-116.19&units=imperial&appid=facb7aca3b14efbdf278cb020b3ec24c';


async function fetchWeatherData(){ // Forecast Weather
    try{
        const [currentWeatherResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherURL),
            fetch(forecastURL)
        ]);
        if (currentWeatherResponse.ok && forecastResponse.ok){
            const currentWeatherData =  await currentWeatherResponse.json();
            const forecastData = await forecastResponse.json();
            displayCurrentWeather(currentWeatherData);
            displayForecast(forecastData);
        } 
        else{
            throw Error(await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}


const displayCurrentWeather = (data)=>{

        const roundedTemp = Math.round(data.main.temp);
        currentTemp.innerHTML = `Todays Temperature: ${roundedTemp}&deg;F`;
        const roundedWind = Math.round(data.wind.speed);
        windSpeed.innerHTML = `Wind speed: ${roundedWind} mph <i class="wi wi-strong-wind"></i>`;
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        description.textContent = `Coverage: ${data.weather[0].description}`;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('width', 75);
        weatherIcon.setAttribute('height', 90);
        // captionDesc.innerHTML = `${desc}`;
    };


        // Forecast code
        const displayForecast = (data) =>{
            const forecastList = data.list;
            const dailyForecast = forecastList.filter((forecast, index) => index % 8 === 0).slice(1,4);

            dailyForecast.forEach(forecast => {
                const forecastElement = document.createElement('div');
                forecastElement.classList.add('forecast');


                const options = {month: 'long', weekday: 'short', day: 'numeric'};
                const date = new Date(forecast.dt * 1000).toLocaleDateString('en-US', options);
                const temp = `Temp: ${Math.round(forecast.main.temp)} &deg;F`;
                const forecastDescription = forecast.weather[0].description;
                const windSpeedDescription = `Wind: ${Math.round(forecast.wind.speed)} mph <i class="wi wi-strong-wind"></i>`

                forecastElement.innerHTML =`
                <h3>${date}</h3>
                <p>${temp}</p>
                <p>Coverage: ${forecastDescription}</p>
                <p>${windSpeedDescription}</p>`;

                forecastContainer.appendChild(forecastElement);
            })
    };

fetchWeatherData();



// Banner Visibility
const banner = document.querySelector('#banner');

// Get the current day of the week
const currentDay = 2;//new Date().getDay();

// Days mapping
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Check if today is Monday (1), Tuesday (2), or Wednesday (3)
if (currentDay === 1 || currentDay === 2 || currentDay === 3) {
    banner.style.display = "block"; // Show the banner
} else {
    banner.style.display = "none"; // Hide the banner
}


// Responsive Banner
const bannerButten = document.querySelector('#bannerButton');
const bannerDiv = document.querySelector('#banner');

hamButton.addEventListener('click', () => {
	bannerDiv.classList.toggle('open');
	bannerButton.classList.toggle('open');
});


















