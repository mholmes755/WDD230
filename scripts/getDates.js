// Get current date and time

const lastModif = document.lastModified;
const lastModifText = 'Last Modified: ' + lastModif;
document.getElementById('lastModified').textContent = lastModifText;

// weekday: 'long', month: 'short', day: 'numeric',
const options = {year: 'numeric'};
const currentYear = new Date().toLocaleDateString('en-US', options);
const copyrightYear = '&copy' + currentYear;
document.getElementById('currentDate').innerHTML = copyrightYear;


// Responsive Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// Toggle Dark/Light Mode

const modeBtn = document.querySelector('#mode');
const main = document.querySelector('main');
// const label = document.querySelectorAll('label');

modeBtn.addEventListener('click', () =>{
    if (modeBtn.textContent.includes('🕶️')){
        main.style.background = "#000"
        main.style.color = "#fff";
        // label.style.color = "#fff";
        modeBtn.textContent = "🔆";
    }
    else{
        main.style.background = "#fff"
        main.style.color = "#000";
        modeBtn.textContent = "🕶️";
    }
});

// Number of Visits Local Storage

const visitsDisplay = document.querySelector("#visits");


let numVisits = Number(window.localStorage.getItem("visits"));

if(numVisits !== 0){
    visitsDisplay.textContent = `Number of Visits: ${numVisits}`;
}
else{
    visitsDisplay.textContent = "This is your first Visit";
}

numVisits++;

localStorage.setItem("visits", numVisits);


// Weather Information
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.61&lon=-116.19&units=imperial&appid=facb7aca3b14efbdf278cb020b3ec24c';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data =  await response.json();
            console.log(data);
            displayResults(data);
        } 
        else{
            throw Error(await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}

const displayResults = (data)=>{
    //card builder code

        const roundedTemp = Math.round(data.main.temp);
        currentTemp.innerHTML = `${roundedTemp}&deg;F`;
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        const desc = data.weather[0].description;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('width', 25);
        weatherIcon.setAttribute('height', 30);
        captionDesc.innerHTML = `${desc}`;
};

apiFetch();
