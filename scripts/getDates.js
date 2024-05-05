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
        // main.style.a.color = "#000";
        modeBtn.textContent = "🔆";
    }
    else{
        main.style.background = "#fff"
        main.style.color = "#000";
        modeBtn.textContent = "🕶️";
    }
});