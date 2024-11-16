// Smooth Scroll Navigation - Active Link Highlight
window.addEventListener("scroll", function () {
	let sections = document.querySelectorAll("section");
	let navLinks = document.querySelectorAll("nav ul li a");

	sections.forEach((section, index) => {
		let top = window.scrollY;
		let offset = section.offsetTop - 100;
		let height = section.offsetHeight;

		if (top >= offset && top < offset + height) {
			navLinks.forEach((link) => {
				link.classList.remove("active");
			});
			navLinks[index].classList.add("active");
		}
	});
});

// Function to validate the entire form
// function validateForm(formId) {
// 	const form = document.getElementById(formId);
// 	const requiredFields = form.querySelectorAll(
// 		"input[required], select[required], textarea[required]"
// 	);
// 	let isValid = true;

// 	// Clear previous error messages
// 	clearErrorMessages(form);

// 	// Loop through all required fields
// 	requiredFields.forEach((field) => {
// 		if (!field.checkValidity()) {
// 			isValid = false;
// 			showErrorMessage(field, getErrorMessage(field));
// 		}
// 	});

// 	return isValid;
// }

// Function to get personalized error messages for each field
// function getErrorMessage(field) {
// 	if (field.validity.valueMissing) {
// 		return "This field is required.";
// 	} else if (field.validity.typeMismatch) {
// 		if (field.type === "email") {
// 			return "Please enter a valid email address.";
// 		} else if (field.type === "tel") {
// 			return "Please enter a valid phone number.";
// 		} else if (field.type === "date") {
// 			return "Please select a valid date.";
// 		}
// 	} else if (field.validity.patternMismatch) {
// 		return "Please enter the correct format.";
// 	}
// 	return "This field is invalid.";
// }

// Function to show error messages near the field
// function showErrorMessage(field, message) {
// 	const errorMessage = document.createElement("div");
// 	errorMessage.classList.add("error-message");
// 	errorMessage.innerText = message;

// 	field.classList.add("error");
// 	field.parentElement.appendChild(errorMessage);
// }

// Function to clear all previous error messages
// function clearErrorMessages(form) {
// 	const errorMessages = form.querySelectorAll(".error-message");
// 	const errorFields = form.querySelectorAll(".error");
// 	errorMessages.forEach((message) => message.remove());
// 	errorFields.forEach((field) => field.classList.remove("error"));
// }

// Function to move to the next section if validation is successful
// function nextSection(currentId, nextId) {
// 	const isFormValid = validateForm(currentId);
// 	if (isFormValid) {
// 		document.getElementById(currentId).style.display = "none";
// 		document.getElementById(nextId).style.display = "block";
// 	} else {
// 		alert("Please fill out all required fields correctly.");
// 	}
// }

// function to show add reference button if the checkbox is checked
function toggleReferenceButton() {
	let checkbox = document.getElementById("add-references");
	let button = document.getElementById("add-reference");
	if (checkbox.checked) {
		button.style.display = "block";
	} else {
		button.style.display = "none";
	}
}

function toggleConvictionButton() {
	let checkbox = document.getElementById("add-convictions");
	let button = document.getElementById("add-conviction");
	if (checkbox.checked) {
		button.style.display = "block";
	} else {
		button.style.display = "none";
	}
}

function toggleEducationButton() {
	let checkbox = document.getElementById("add-education");
	let button = document.getElementById("add-education-button");
	if (checkbox.checked) {
		button.style.display = "block";
	} else {
		button.style.display = "none";
	}
}

function toggleExperienceButton() {
	let checkbox = document.getElementById("add-experience");
	let button = document.getElementById("add-experience-button");
	if (checkbox.checked) {
		button.style.display = "block";
	} else {
		button.style.display = "none";
	}
}

// document
// 	.getElementById("main-form")
// 	.addEventListener("submit", function (event) {
// 		const firstNameField = document.getElementById("first-name");
// 		const lastNameField = document.getElementById("last-name");
// 		const emailField = document.getElementById("email");

// 		if (!firstNameField.value.trim()) {
// 			nameField.style.backgroundColor = "#F77979";
// 			alert("Please enter your first name.");
// 			event.preventDefault(); // Prevent form submission
// 			return;
// 		}
// 		if (!lastNameField.value.trim()) {
// 			nameField.style.backgroundColor = "#F77979";
// 			alert("Please enter your last name.");
// 			event.preventDefault(); // Prevent form submission
// 			return;
// 		}
// 		if (!emailField.value.trim()) {
// 			nameField.style.backgroundColor = "#F77979";
// 			alert("Please enter your email.");
// 			event.preventDefault(); // Prevent form submission
// 			return;
// 		}

// 		// Form will submit if all validations pass
// 	});
