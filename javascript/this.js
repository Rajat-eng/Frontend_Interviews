var length = 4;
function callback() {
  console.log("xxx");
  console.log(this.length);
}

const obj = {
  length: 5,
  method: function (fn) {
    fn();
  },
};

// obj.method(callback);
// output 4 bcoz fn context becomes global object when calling from window context

// althogh if i want to print 5
// const obj = {
//     length: 5,
//     method: function x(fn) {
//       fn.call(this);
//     },
// };
// obj.method(callback);

const obj2 = {
  length: 5,
  method: function () {
    //arguments=[callback,1,2] as an object
    arguments[0]();
  },
};

// obj2.method(callback, 1, 2);

// ------------------------------------ //
const obj3 = {
  name: "Alice",
  greet: function () {
    const innerFunc = () => {
      console.log("Hello, " + this.name);
    };
    innerFunc();
  },
};

obj3.greet(); // Output: Hello, Alice

function example2() {
  let worker = {
    slow(min, max) {
      alert(`Called with ${min},${max}`);
      return min + max;
    },
  };

  function cachingDecorator(func, hash) {
    let cache = new Map();
    return function () {
      let key = hash(arguments); // (*)
      if (cache.has(key)) {
        return cache.get(key);
      }

      let result = func.call(this, ...arguments); // (**)

      cache.set(key, result);
      return result;
    };
  }

  function hash(args) {
    return args[0] + "," + args[1];
  }

  worker.slow = cachingDecorator(worker.slow, hash);

  alert(worker.slow(3, 5)); // works
  alert("Again " + worker.slow(3, 5)); // same (cached)
}
