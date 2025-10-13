let authorForm = document.getElementById("author") as HTMLInputElement;
let titleForm = document.getElementById("title") as HTMLInputElement;
let yearForm = document.getElementById("year") as HTMLInputElement;
let isbnForm = document.getElementById("isbn") as HTMLInputElement;

export class FormValidation {
	static validateAuthor(author: HTMLInputElement) {
		if (author.validity.typeMismatch) {
			author.setCustomValidity("Please enter a valid author name.");
		} else if (author.validity.valueMissing) {
			author.setCustomValidity("Author name is missing");
		}
	}
}
