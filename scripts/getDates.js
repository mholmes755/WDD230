const lastModif = document.lastModified;
lastModifText = 'Last Modified: ' + lastModif;
document.getElementById('lastModified').textContent = lastModifText;

// weekday: 'long', month: 'short', day: 'numeric',
const options = {year: 'numeric'};
const currentYear = new Date().toLocaleDateString('en-US', options);
const copyrightYear = '&copy' + currentYear;
document.getElementById('currentDate').innerHTML = copyrightYear;
