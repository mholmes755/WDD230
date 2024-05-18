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
document.getElementById('caption').innerHTML = currentYear +" " + currentMonth;




// Responsive Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// // Number of Visits Local Storage

// const visitsDisplay = document.querySelector("#visits");


// let numVisits = Number(window.localStorage.getItem("visits"));

// if(numVisits !== 0){
//     visitsDisplay.textContent = `Number of Visits: ${numVisits}`;
// }
// else{
//     visitsDisplay.textContent = "This is your first Visit";
// }

// numVisits++;

// localStorage.setItem("visits", numVisits);