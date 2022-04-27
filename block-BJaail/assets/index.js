class Book{
    constructor(titel,author,refNum){
        this.titel = titel;
        this.author = author;
        this.refNum = refNum;
    }

}

class BookList{
    constructor(){
        this.Books = [];
        this.currentIndexbook = 0;
    }

    addBook(Books = []){
        this.Books = this.Books.concat(Books);
        return this.Books;
    }
}