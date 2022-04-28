let form = document.querySelector('form');
let bookListRoot = document.querySelector('.book_List');

const nameElm = form.elements.bookName;
const authorElM = form.elements.bookAuthor;
const imageEle = form.elements.bookImages;



class Book{
    constructor(name, author, img){
        this.name = name;
        this.author = author;
        this.img = img;
        this.isRead = false;
    }
    toggleIsRead(){
        this.isRead = !this.isRead;
    }
}

class BookList{
    constructor(books = []){
        this.books = books;
    }
    addBook(name, author, img){
        let book = new Book(name, author, img);
        this.books.push(book);
        this.createUI();
    }
    createUI(){
        bookListRoot.innerHTML = "";
       this.books.forEach(book => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = book.img;
        let h2 = document.createElement('h2');
        h2.innerText = book.name;
        let p = document.createElement('p');
        p.innerText = book.author;
        let button = document.createElement('button');
        button.classList.add('btn')
        button.innerText = book.isRead
            ? 'Completed'
            : 'Mark as read'
            button.addEventListener('click', () => {
                book.toggleIsRead();
                this.createUI();
            });
        li.append(img,h2,p,button);
        bookListRoot.append(li);
       })
    }
}

let library = new BookList(); 

function handleSubmit(){
    event.preventDefault();
    const name = nameElm.value;
    const author = authorElM.value;
    const img = imageEle.value;
    library.addBook(name, author ,img);
    nameElm.value = ' ';
    authorElM.value = ' ';
    imageEle.value = ' ';
}

form.addEventListener('submit',handleSubmit);