// ## An object-oriented book-list!

// - [ ] Create a class BookList
// - [ ] Create another class called Book

// #### Each Book should have several properties:

// 1. Title
// 2. Category   
// 3. Author
// 4. isRead (default to `false`)
// 5. finishedDate

// Book class will have the following methods:
class Book{
    constructor(Title,Category,Author,isRead,finishedDate){
        this.Title  = Title;
        this.Category = Category;
        this.Author = Author;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead(){
        return this.isRead = true;
    }
}
// - `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

// #### BookList should have the following properties:

// 1. An array of all the Books
// 2. Current read book index
class BookList{
    constructor(){
        this.books = [];
        this.currentIndexBook = 0;
    }
    add(books = []){
     this.books = this.books.concat(books)
       return this.books;
    }
    getCurrentBook(){
        return this.books[this.currentIndexBook]
    }
    getNextBook(){
        return this.books[this.currentIndexBook + 1]
    }
    getPrevBook(){
        return this.books[this.currentIndexBook - 1]
    }
    changeCurrentBook(updateBook){
        this.currentIndexBook = updateBook;
        return this.currentIndexBook;
    }
}

// #### BookList Methods

// - [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
// - [] `getCurrentBook()` should return the current book using the `index` and the book array
// - [] `getNextBook()` should return the next book using the `index` and the book array
// - [] `getPrevBook()` should return the previous book using the `index` and the book array
// - [] `changeCurrentBook` should accept one parameter and update the current index.

// After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.


book1 = new Book("Amit Garg","Junior Level Books","Reader's Zone ");
book2 = new Book("Lalit Kumar","Client Server Computing"," Sun India Publications");
book3 = new Book("Vinay Kumar Singha","Mobile Computing","K Nath & Sons, Meerut  ");
book4 = new Book("Sharad Kumar Verma","Client Server Computing"," Sun India Publications");
book5 = new Book("Gunjan Verma","Computer Networks"," Thakur Publications ");

let library = new BookList();
library.add(book1,book2,book3,book4,book5);
