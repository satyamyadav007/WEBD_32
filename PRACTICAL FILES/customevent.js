const EventEmitter = require("events");

// class MyEmitter extends EventEmitter {}

const myEmitter = new EventEmitter();

myEmitter.on("Greet", (name) => {
    console.log(`Hello, ${name}!`);
});

myEmitter.on("exit", () => {
    console.log("Program is exiting......");
});

myEmitter.emit("Greet", "Satyam");
myEmitter.emit("exit");