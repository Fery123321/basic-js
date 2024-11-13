class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        if(this.items.length === 0) {
            throw new Error("Underflow");
        }
        return this.items.pop() 
    }
    isEmpty() {
       return this.items.length === 0;
    }
    peek() {
        if(!Number.isInteger(this.items[this.items.length-1])) {
            return undefined;
        }
       return this.items[this.items.length-1]; 
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push("hello");
console.log(stack.items.length);

console.log(stack.peek());
console.log(stack.items.length);
