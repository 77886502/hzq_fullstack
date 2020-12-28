class Book {
    constructor(isbn,title,author){
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }
    display(){
        return `
            ISBN号:${this.isbn}
            Title:${this.title}
            Author:${this.author}

        `
    }
}
// 作业 返回所有对象上可以调用的方法或属性 attrs
let jsDontKnow = new Book('111','aa','bb');
const attrs = [...Object.getOwnPropertyNames(jsDontKnow),Object.getOwnPropertyNames(Book.prototype)];
console.log(attrs);