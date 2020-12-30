function Book(isbn, title, author){
    this.isbn = isbn;
    this.title = title;
    this.author = author;
}
let theHabbit = new Book('0-395-07122-4',"theHabbit","J.R.R. Tolkien");
// console.log(theHabbit.__proto__===Book.prototype);
console.log(Book.prototype);
console.log(theHabbit.__proto__);
