/*
1. What is Node.js? Event-driven Architecture
Node.js is a runtime environment that allows you to run JavaScript code outside of a browser, typically on the server side. It is built on Chrome’s V8 JavaScript engine.

Event-driven architecture in Node.js means that the flow of the program is determined by events (such as user actions, messages, or I/O operations). Instead of waiting for operations to complete, Node.js registers callbacks and continues executing other code. When an event occurs, the corresponding callback is invoked.

Key Points:

Single-threaded, but can handle many connections concurrently.
Uses events and callbacks to handle asynchronous operations.
2. Event Loop: Phases, Timers, Callbacks
The Event Loop is the mechanism that allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible.

Phases of the Event Loop:

Timers: Executes callbacks scheduled by setTimeout() and setInterval().
Pending Callbacks: Executes I/O callbacks deferred to the next loop iteration.
Idle, Prepare: Internal use only.
Poll: Retrieves new I/O events; executes I/O related callbacks.
Check: Executes callbacks scheduled by setImmediate().
Close Callbacks: Executes close event callbacks (e.g., socket.on('close', ...)).
Timers and Callbacks:

Timers: Scheduled functions (e.g., setTimeout, setInterval).
Callbacks: Functions executed in response to events (e.g., I/O completion).
*/

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
setImmediate(() => console.log("Immediate"));
process.nextTick(() => console.log("NextTick"));
console.log("End");

// output ->
// Start
// End
// NextTick
// Timeout
// Immediate
/*
3. Call Stack vs Callback Queue
Call Stack:
The call stack is where the JavaScript engine keeps track of function calls. When a function is invoked, it’s pushed onto the stack; when it returns, it’s popped off.

Callback Queue (Task Queue):
The callback queue holds messages (callbacks) to be processed after the current script execution completes and the call stack is empty. The event loop moves callbacks from the queue to the stack when ready.

Flow:

Synchronous code runs on the call stack.
Asynchronous operations (like I/O) register callbacks.
When async operations complete, their callbacks are placed in the callback queue.
The event loop pushes callbacks from the queue to the stack when the stack is empty.
*/

console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

console.log('C');
// output -> 
// A 
// C 
// B


/*
4. Non-blocking I/O
Non-blocking I/O means that Node.js does not wait for I/O operations (like reading files, querying databases, or network requests) to complete before moving on to execute other code. Instead, it uses callbacks, promises, or async/await to handle the result when the operation finishes.

Benefits:

Efficiently handles many concurrent operations.
Ideal for I/O-heavy applications (e.g., web servers, APIs).
*/
// Non-blocking I/O example
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('Reading file...');
// Here, "Reading file..." is printed before the file contents, demonstrating non-blocking behavior.






