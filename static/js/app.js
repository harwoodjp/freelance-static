function toggleContact() {
	const contactBox = document.querySelector(".services__service--contact"),
		contactBottom = document.querySelector(".contact__message"),
		messageForm = document.querySelector(".message-form"),
		messageFormExit = document.querySelector(".message-form__exit");
	
	contactBottom.addEventListener("click", function() {
		messageForm.classList.toggle("message-form--active");
	});

	contactBox.addEventListener("click", function() {
		messageForm.classList.toggle("message-form--active");
	});
	messageFormExit.addEventListener("click", function() {
		console.log(messageForm);
		messageForm.classList.toggle("message-form--active");
	});


}

toggleContact();