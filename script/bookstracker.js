

let library = [];

function addBook (){

        const title = prompt("Enter the book title");
        const author = prompt("Enter the author");
        const read = prompt("Have read? (yes/no)") ==="yes";


        const book = {
            title: title,
            author: author,
            isRead: read
        };

        library.push(book);
        console.log (`One more new book has been added to your library ${title}`);
}

function bookList (){

    console.log("Books list");
    library.forEach((book, index) =>{
        console.log(`${index + 1}. ${book. title} by ${book. author} - ${book. isRead ? "Read" : "Not Read"}`);
    });

}

function markedAsRead(title){
    
    const book = library.find(book => book.title === title);

    if(book){
        book.isReadread = true;
        console.log(`your book ${book.title} is marked as Read`);
    }else{
        console.log ("This book is not found");
    }
}





function listOfBooks(){

    let runing = true;

    while(runing){

        const choice = prompt(`Book Tracker:
            1. Add Book
            2. list Books
            3. Mark book as read
            4. Exit
            Enter your choice:`);

        switch(choice){
            case "1":
                thisaddBook();
                break;
            case "2":
            bookList();
                break;
            case "3":
                const title = prompt("Enter the title of book which want to be marked as read");
                markedAsRead(title);
                break;
            case "4":
                runing = false;
                alert ("Goodbye");
                break;
            default: 
                alert("Invalid Choice try again");

        }

    }

}

listOfBooks();