// Array to store books
let library = [];

// Function to add a book to the library
function addBook(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const genre = document.getElementById('genre').value;
    
    if (title && author && pages && genre) {
        const book = { title, author, pages, genre };
        library.push(book);
        displayBooks(library);
        clearForm();
    } else {
        alert("Please fill in all the fields.");
    }
}

// Function to display books in the library
function displayBooks(books) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book');
        bookItem.innerHTML = `<strong>Title:</strong> ${book.title}<br>
                              <strong>Author:</strong> ${book.author}<br>
                              <strong>Pages:</strong> ${book.pages}<br>
                              <strong>Genre:</strong> ${book.genre}<br>`;
        bookList.appendChild(bookItem);
    });
}

// Function to search for books by title
function searchBooks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = library.filter(book => book.title.toLowerCase().includes(searchTerm));
    displayBooks(filteredBooks);
    
    const noBooksFoundMessage = document.getElementById('noBooksFoundMessage');
    noBooksFoundMessage.style.display = filteredBooks.length === 0 ? 'block' : 'none';
}

// Function to clear the form after adding a book
function clearForm() {
    document.getElementById('addBookForm').reset();
}

// Event listener for form submission
document.getElementById('addBookForm').addEventListener('submit', addBook);
