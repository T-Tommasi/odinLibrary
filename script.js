function Library () {
    let memorizedBooks  = []
    class Book{
        constructor(bookName, author, yearOfRelease, description) {
            this._bookName = bookName;
            this._author = author;
            this._yearOfRelease  = yearOfRelease;
            this._description = description;
        }

        get bookDetails() {
            return this
        }
    }

    function retrieveFormData() {
        let bookName = document.querySelector('#bookName').value;
        let author = document.querySelector('#author').value;
        let yearOfRelease = document.querySelector('#yearOfRelease').value;
        let description = document.querySelector('#description').value;
        let book ={bookName, author, yearOfRelease, description};
        return book
    }

    function Listeners() {
        function dialogListener(target, source) {
            source.addEventListener('click', () => {
                target.showModal();
            })
        }
        function closeListener(target, source) {
            source.addEventListener('click', () => {
                target.close()
            })
        }
    }

    function createBook() {
        let book = retrieveFormData();
        newBook = new Book(book.bookName,book.author,book.yearOfRelease,book.description);
        memorizedBooks.push(newBook);
    }
}
