const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.

// IIFE
const counter = (function () {
  let greetCount = 0;
  function inner() {
    console.log(`Hello ${greetCount}x`);
    return greetCount++;
  }

  inner.reset = function () {
    counter = 0;
  };

  return inner;
})();

counter();
counter();
counter.reset(); // counter has function definition of inner

let cb = (data) => {
  console.log("data", data);
};
let f = (function (cb) {
  return function (...args) {
    cb(...args);
  };
})(cb);

f(1);
