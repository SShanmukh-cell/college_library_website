console.log('This is a JS tutorial');

// constructor
// Display();
class Book {
    constructor(Name, Author, Type) {
        this.name = Name;
        this.author = Author;
        this.type = Type;
    }
}
// display constructor
class Display {
    add(book) {
        console.log('adding to ui');
        let tableBody = document.getElementById('tableBody')
        let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libararyForm = document.getElementById('libraryForm');
        libararyForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message!</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`
        setTimeout(function () {
            message.innerHTML = '';
        }, 4000);
    }
}

// add submit event listener to libraryForm
let libararyForm = document.getElementById('libraryForm');
libararyForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    // console.log('you have sunmitted library form');
    // console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' Your book has been added to the library');
    }
    else {
        // show error to the user
        display.show('Error', ' This is an incorrent book');
    }

    localStorage.setItem(`${book.name}`, `${book.author}`);
}
