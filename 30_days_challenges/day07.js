//------------ Objects -------- //

//---- Activity 01: object creation and access
const book = {
    title: "As You Like It",
    author: "William Shakespeare",
    year: 1898,
}
console.log(book);

console.log(book.title);
console.log(book.author);

//---- Activity 02: object methods
const book2 = {
    title: "As You Like It",
    author: "William Shakespeare",
    year: 1898,
    returnString: function () {
        return `The book "${this.title}" is written by ${this.author}`
    },
    updateBookYear: function (year) {
        this.year = year;
    }
}
console.log(book2.returnString());

book2.updateBookYear(1900);
console.log(book2);

//---- Activity 03: nested object 
const library = {
    name: "DU Central Library",
    books: [
        {
            title: "As You Like It",
            author: "William Shakespeare",
            year: 18
        },
        {
            title: "As You Like It",
            author: "William Shakespeare",
            year: 18
        },
    ]
}
console.log(library);

console.log(library.name);

// library.books.map(book => console.log(book.title));
library.books.forEach(book => console.log(book.title));

//---- Activity 04: the this keyword 
const book3 = {
    title: "As You Like It",
    author: "William Shakespeare",
    year: 1898,
    returnString: function () {
        return `The book "${this.title}" is written by ${this.author}`
    },
}
console.log(book3.returnString());

//---- Activity 05: object iteration 
for (const key in book) {
   console.log(`key: ${book[key]}`);
}
// for(const key in book){
//     console.log(`key: ${book[key]}`);
// }

console.log(Object.keys(book)); // [ 'title', 'author', 'year' ] 
console.log(Object.values(book));