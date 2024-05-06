// Get current date and time

const lastModif = document.lastModified;
const lastModifText = 'Last Modified: ' + lastModif;
document.getElementById('lastModified').textContent = lastModifText;

// weekday: 'long', month: 'short', day: 'numeric',
const options = {year: 'numeric'};
const currentYear = new Date().toLocaleDateString('en-US', options);
const copyrightYear = '&copy' + currentYear;
document.getElementById('currentDate').innerHTML = copyrightYear + "  WDD230 Web Frontend Development"




// Responsive Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});