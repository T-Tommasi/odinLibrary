const library = [];
const submitBook = document.querySelector('#submitBook');
const removeBook = document.querySelector('#removeBook');

function Book(bookName,author,year,description) {
    if (!bookName || !author || !year || !description) {
        alert('You did not insert all the necessary data!');
        return
    };
    let book = {
        name: bookName,
        author: author,
        year: year,
        description: description,
    };
    library.push(book);
    return;
}
