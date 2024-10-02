console.log("start");

const p1 = new Promise((resolve, reject) => {
  console.log("register p1");
  resolve("promise1");
}); // microtask

p1.then((data) => console.log(data)); // resolve after sync operations, microtask

setTimeout(() => {
  console.log("t1"); // macrotask
}, 0);

setTimeout(() => {
  console.log("t2"); // macrotask
}, 0);

Promise.resolve()
  .then(() => {
    console.log("h1");
  })
  .then(() => {
    console.log("h2");
  }); // microtask

process.nextTick(() => {
  console.log("next tick");
  // started after all sync operation in the next event loop cycle before ant timeout
});

console.log("end");

// start
// register p1
// end
// next tick
// promise1
// h1
// h2
// t1
// t2
