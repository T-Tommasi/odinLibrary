const library = [];
const submitBook = document.querySelector("#submitBook");
const removeBook = document.querySelector("#removeBook");
const dialog = document.querySelector(".dialogBox");
import { FormValidation } from "./formValidation";

function Book(bookName, author, year, description) {
	if (!bookName || !author || !year || !description) {
		alert("You did not insert all the necessary data!");
		return;
	}
	FormValidation.validateAuthor(author);
	let book = {
		name: bookName,
		author: author,
		year: year,
		description: description,
	};
	library.push(book);
	return;
}

function addNewBookModal() {
	if (dialog != dialog.open) {
		dialog.open();
	} else {
		dialog.close();
	}
}

submitBook.addEventListener("click", dialog.open());
