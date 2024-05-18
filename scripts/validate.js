
const pswrd1 = document.querySelector("#password");
const pswrd2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pswrd2.addEventListener("focusout", checkSame);

// PASSWORDS MATCH
function checkSame() {
	if (pswrd1.value !== pswrd2.value) {
		message.textContent = "❗PASSWORDS DO NOT MATCH!";
		message.style.visibility = "show";
		pswrd2.style.backgroundColor = "#fff0f3";
		pswrd2.value = "";
		pswrd2.focus();
	} else {
		message.style.display = "none";
		pswrd2.style.backgroundColor = "#fff";
		pswrd2.style.color = "#000";
	}
}

// RANGE VALUES
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}