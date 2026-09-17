const EventEmitter = require("events");


const myEmitter = new EventEmitter();

myEmitter.on("load", (name) => {
    console.log(`welcom, ${name}!`);
});

myEmitter.on("exit", () => {
    console.log("Program is exiting......");
});

myEmitter.emit("load", "Satyam");
myEmitter.emit("exit");