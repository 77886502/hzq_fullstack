// 这里有什么问题
function Book(isbn,title,author){
    // this.isbn = isbn;    public属性
    // this.title = title;
    // this.author = author;
    this.setIsbn(isbn);
    this.setTitle(title);
    this.setAuthor(author);    
}
Book.prototype =  {
    setIsbn(isbn){
        // isbn 不能this 要可读
        // private 私有属性，只有对象方法内 this. 调用 但是在外界不能访问
        // JS内不存在 private, 约定以 _ 开头的就是私有属性
        if (!this.checkIsbn(isbn)) 
        throw new Error('ISBN格式有误!');
        this._isbn = isbn; 
    },
    getIsbn(){
        return this._isbn; 
    },
    setTitle(title){
        this._title = title;
    },
    setAuthor(author){
        this._author = author;
    }, 
    checkIsbn(isbnn){
        if(!isbn) return false;
        return (/\d{3}-\d-\d{3}-\d{5}-\d/.test(isbn));
    }
}
// class 只是语法糖
// private 
const jsDontKonw = new Book('978-7-121-29899-8','React全栈','陈玉珏');
console.log(jsDontKonw.getIsbn());
// console.log(jsDontKonw.__proto__ == Book.prototype);
// jsDontKonw.isbn = 'dddd';
// console.log(jsDontKnow instanceof Book)
// console.log(Book.prototype.isPrototypeOf(jsDontKnow));