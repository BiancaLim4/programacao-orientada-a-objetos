//----Stack (Last in, first out)----
class stack {
    constructor(){
        this.item = [];
    }
    add_book(book) {
        this.item.push(book);
        console.log(`Everything's okay! You've added "${book}" to the stack.`);
    }

    remove_book() {
       if (this.item.length === 0) {
            console.log("The stack is empty! Nothing to remove.");
            return;
        }
        let removed = this.item.shift();
        console.log(`You removed "${removed}" from the stack!`);
    }

    show_books_amount() {
        return console.log("Há", this.item.length, "livros na prateleira!");
    }

    show_the_last_book() {
        if (this.item.length === 0) {
            console.log("The queue is empty! No last book.");
            return;
        }
        let last = this.item[this.item.length - 1];
        console.log(`The last book is: ${last}`);
    }
}
