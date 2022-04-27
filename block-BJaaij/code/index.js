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
        this.isRead = function(){
            return true;
        }
        this.finishedDate = function(){
            return Date.now();
        }
    }
}
let markBookAsRead = new BookList("the dark nigth","hororr","ravi");
console.log(markBookAsRead);
markBookAsRead.isRead();
markBookAsRead.finishedDate();
// - `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

// #### BookList should have the following properties:

// 1. An array of all the Books
// 2. Current read book index
class BookList{
    constructor(Book,index){
        this.Book = Array[Book];
        this.index = Array[index];
    }
    add([Book]){
       return  this.Book = Book;

    }
    getCurrentBook(){
        return this.Book[this.index]
    }
    getNextBook(){
        return this.Book[this.index[1]];
    }
    getPrevBook(){
        return this.Book[this.index[0]];
    }
    changeCurrentBook(updateBook){
        return this.Book = updateBook;
    }
}
// #### BookList Methods

// - [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
// - [] `getCurrentBook()` should return the current book using the `index` and the book array
// - [] `getNextBook()` should return the next book using the `index` and the book array
// - [] `getPrevBook()` should return the previous book using the `index` and the book array
// - [] `changeCurrentBook` should accept one parameter and update the current index.

// After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.
