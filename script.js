var popupoverlay = document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-pop-button")

addpopupbutton.addEventListener("click",function(){
          popupoverlay.style.display="block"
          popupbox.style.display='block'
})

var cancelpopup= document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
          event.preventDefault()
          popupoverlay.style.display="none"
          popupbox.style.display='none'


})
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-tittle-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click", function(event) {
          event.preventDefault();
      
          // Ensure all input fields are filled
          if (!booktitleinput.value || !bookauthorinput.value || !bookdescriptioninput.value) {
              alert("Please fill in all fields!");
              return;
          }
      
          var div = document.createElement("div");
          div.setAttribute("class", "book-container");
      
          div.innerHTML = `
              <h2>${booktitleinput.value}</h2>
              <h5>${bookauthorinput.value}</h5>
              <p>${bookdescriptioninput.value}</p>
              <button>delete</button>`;
      
          container.append(div);
      
          // Hide popup overlay and box
          popupoverlay.style.display = "none";
          popupbox.style.display = "none";
      });
      
      // Handle delete functionality
      container.addEventListener("click", function(event) {
          if (event.target.tagName === "BUTTON" && event.target.textContent === "delete") {
              event.target.parentElement.remove();
          }
      });


      

      

/*
// Render books from localStorage on page load
function renderBooks() {
          const books = JSON.parse(localStorage.getItem("books")) || []; // Get saved books or initialize as empty array
          container.innerHTML = ""; // Clear container to prevent duplicates
          books.forEach((book) => {
              addBookToDOM(book);
          });
      }
      
      // Add a book to the DOM
      function addBookToDOM(book) {
          var div = document.createElement("div");
          div.setAttribute("class", "book-container");
          div.innerHTML = `
              <h2>${book.title}</h2>
              <h5>${book.author}</h5>
              <p>${book.description}</p>
              <button>delete</button>`;
          container.append(div);
      }
      
      // Save a book to localStorage
      function saveBook(book) {
          const books = JSON.parse(localStorage.getItem("books")) || [];
          books.push(book);
          localStorage.setItem("books", JSON.stringify(books));
      }
      
      // Add book event listener
      addbook.addEventListener("click", function(event) {
          event.preventDefault();
      
          // Validate input fields
          if (!booktitleinput.value || !bookauthorinput.value || !bookdescriptioninput.value) {
              alert("Please fill in all fields!");
              return;
          }
      
          // Create book object
          const book = {
              title: booktitleinput.value,
              author: bookauthorinput.value,
              description: bookdescriptioninput.value,
          };
      
          // Save to localStorage and add to DOM
          saveBook(book);
          addBookToDOM(book);
      
          // Clear input fields and hide popup
          booktitleinput.value = "";
          bookauthorinput.value = "";
          bookdescriptioninput.value = "";
          popupoverlay.style.display = "none";
          popupbox.style.display = "none";
      });
      
      // Delete book event listener
      container.addEventListener("click", function(event) {
          if (event.target.tagName === "BUTTON" && event.target.textContent === "delete") {
              const books = JSON.parse(localStorage.getItem("books")) || [];
              const bookDiv = event.target.parentElement;
              const title = bookDiv.querySelector("h2").textContent;
      
              // Update localStorage by removing the book
              const updatedBooks = books.filter((book) => book.title !== title);
              localStorage.setItem("books", JSON.stringify(updatedBooks));
      
              // Remove book from DOM
              bookDiv.remove();
          }
      });
      
      // Initial render of books on page load
      renderBooks();*/
      