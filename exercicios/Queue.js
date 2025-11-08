//----Queue (First in, first out)
  class Queue {
    constructor() {
        this.item = [];
    }

    add_book(book) {
        this.item.push(book);
        console.log(`Everything's okay! You've added "${book}" to the queue.`);
    }

    remove_book() {
        if (this.item.length === 0) {
            console.log("The queue is empty! Nothing to remove.");
            return;
        }
        let removed = this.item.shift();
        console.log(`You removed "${removed}" from the queue!`);
    }

    show_books_amount() {
        console.log(`There are ${this.item.length} books in the queue.`);
    }

    show_the_first_book() {
        if (this.item.length === 0) {
            console.log("The queue is empty! No first book.");
            return;
        }
        console.log(`The first book is: ${this.item[0]}`);
    }
  }



  




