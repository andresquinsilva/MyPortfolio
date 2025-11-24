let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: "available" },
  { id: 2, title: "1984", author: "George Orwell", status: "borrowed" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", status: "overdue" }
];

// Display All Books
function displayBooks() {
  document.getElementById("available-books").innerHTML = "";
  document.getElementById("borrowed-books").innerHTML = "";
  document.getElementById("overdue-books").innerHTML = "";

  books.forEach(book => {
    let bookElement = document.createElement("li");
    bookElement.textContent = `${book.title} by ${book.author}`;

    if (book.status === "available") {
      bookElement.appendChild(createStatusButtons(book.id, ["borrowed", "overdue"]));
      document.getElementById("available-books").appendChild(bookElement);
    } else if (book.status === "borrowed") {
      bookElement.appendChild(createStatusButtons(book.id, ["available", "overdue"]));
      document.getElementById("borrowed-books").appendChild(bookElement);
    } else if (book.status === "overdue") {
      bookElement.appendChild(createStatusButtons(book.id, ["available", "borrowed"]));
      document.getElementById("overdue-books").appendChild(bookElement);
    }
  });
}

// Create status change buttons
function createStatusButtons(id, statusOptions) {
  let buttonContainer = document.createElement("div");
  statusOptions.forEach(status => {
    let button = document.createElement("button");
    button.textContent = `Mark as ${status}`;
    button.onclick = () => changeBookStatus(id, status);
    buttonContainer.appendChild(button);
  });
  return buttonContainer;
}

// Add New Book
function addBook() {
  let title = document.getElementById("book-title").value;
  let author = document.getElementById("book-author").value;
  let status = document.getElementById("book-status").value;
  let id = books.length ? books[books.length - 1].id + 1 : 1;
  books.push({ id, title, author, status });
  displayBooks();
}

// Change Book Status
function changeBookStatus(id, newStatus) {
  let book = books.find(book => book.id === id);
  if (book) {
    book.status = newStatus;
    displayBooks();
  }
}

function removeOverdueBooks() {
  books = books.filter(book => book.status !== "overdue");
  displayBooks();
}

// Initial display
displayBooks();
