
const pswrd1 = document.querySelector("#password");
const pswrd2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
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