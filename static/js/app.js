function toggleContact() {
	const contactBox = document.querySelector(".services__service--contact");
	contactBox.addEventListener("click", function() {
		console.log("active chat");
	})
}

toggleContact();