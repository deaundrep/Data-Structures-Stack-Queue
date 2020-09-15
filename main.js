//This homework is to practice the two Data Structures Stack & Queue
//This has nothing to do with the Call Stack and the Event Queue
//It's just pure JavaScript

//This is a question that you are often asked to implement on a whiteboard

//Create a github repo for this and submit the link inside the Populi Assignment

//You are going to build 2 classes.
//1. A Stack
//2. A Queue

//You will a separate array for each class  as your stack or queue
//The 2 classes have nothing to do with each other.


//Stack Class

//There must be an array to represent the stack at start and it will initialize empty
//Stacks typically are built with the following methods
class Stack {
    constructor(){
        this.arr = [];
    }

//1) Push method adds to the top of the stack
push(item) {
    this.arr.push(item);
}
//2) Pop method removes from the top of the stack
pop() {
    this.arr.pop();
}
//3) Peek logs the top element on the stack
peek(){
    return this.arr[this.arr.length - 1];
}

//4) isEmpty returns true if the stack is empty
isEmpty(){
    return this.length === 0;
}
}
//Queue Class

//There must be an array to represent the queue and it will initialize empty

//Queues typically are built with the following methods
class Queue{
    constructor(){
        this.arr = [];
    }
//1) Enqueue method adds to the back of the queue
enqueue(item){
return this.arr.unshift(item);
}
//2) Dequeue method removes from the front of the queue
dequeue(){
    return this.arr.pop()
}
//3) Front logs the element at the front of the queue
peek(){
    return !this.arr.isEmpty() ? this.arr[0] : undefined;
}
//4) isEmpty return true if the queue is empty
isEmpty(){
    return this.length === 0;
}

//5) printQueue returns a string of items in the queue 
printQueue(){
    return this.arr.split(',');
}
}