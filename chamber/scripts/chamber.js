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
document.getElementById('caption').textContent = `${currentYear} ${currentMonth}`;




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
