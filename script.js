function Library () {
    let memorizedBooks  = []
    class Book{
        constructor(bookName, author, yearOfRelease, description) {
            this._bookName = bookName;
            this._author = author;
            this._yearOfRelease  = yearOfRelease;
            this._description = description;
        }

        static {console.log(this)}

        get bookDetails() {
            return this //Easier to remember
        }
    }

    function retrieveFormData() {
        let bookName = document.querySelector('#bookName').value;
        let author = document.querySelector('#author').value;
        let yearOfRelease = document.querySelector('#yearOfRelease').value;
        let description = document.querySelector('#description').value;
        let book = {bookName, author, yearOfRelease, description};
        console.log(book);
        return book
    }

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

    function createBook() {
        let book = retrieveFormData(); //Retrieve the values from the HTML form and insert them as an object into a variable
        newBook = new Book(book.bookName,book.author,book.yearOfRelease,book.description); //Create a newBook element
        memorizedBooks.push(newBook); //Push it to memory
        console.log('------');
        console.log(newBook);
        console.log('------');
        return
    }

    function submitBook(button) {
        console.log(`${button} has been pressed!`)
        button.addEventListener('click', () => {
            createBook();
            console.log(`book pushed to library!`)
            console.log(memorizedBooks)
        })
    }

    function updateCards(array) {
        const CARDCONTAINER = document.querySelector('.cardContainer')
        for (let book of array) {
            let bookCard = document.createElement('div');
            bookCard.classList.add('card');
            bookCard.classList.add(`${book._bookName}`)

            let title = document.createElement('strong');
            title.textContent = `${book._bookName}`;
            let author = document.createElement('p');
            author.textContent = `${book._author}`;
            let yearOfRelease = document.createElement('p');
            yearOfRelease.textContent = `${book._yearOfRelease}`;
            let description  = document.createElement('p');
            description.textContent  = `${book._description}`;

            let content = [title,author,yearOfRelease,description]
            for (let element of content) {
                bookCard.appendChild(element)
            }
            if (!document.querySelector(`.${book._bookName}`)) {
                CARDCONTAINER.appendChild(bookCard)
            } else {
                console.log(`the book titled: ${book._bookName} is already present in the DOM`)
            }
        }
        console.log('-----')
    }

    function initializer() {
        const NEWBOOKDIALOGBUTTON = document.querySelector('#submitBook');
        const NEWBOOKDIALOG = document.querySelector('dialog'); //should probably update this so that i can have a system for removing previously stored books... but eeeh, thats beyond what is requested for now.
        const SUBMITBOOKTOMEMORY = document.querySelector('#submitButton');

    }
}
