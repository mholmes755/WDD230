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

modeBtn.addEventListener('click', () =>{
    if (modeBtn.textContent.includes('🕶️')){
        main.style.background = "#000"
        main.style.color = "#fff";
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

// // Local Storage Functions
// function setVisits(){
//     localStorage.setItem('.visits', JSON.stringify());
// };

// function getVisits(){
//     return JSON.parse(localStorage.getItem('.visits'));
// }