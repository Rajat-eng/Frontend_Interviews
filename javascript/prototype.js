const obj1 = {
  name: "Rajat",
  getName: function () {
    return this.name;
  },
};

const obj2 = {
  name: "Dikss",
  __proto__: obj1,
};

console.log(obj2.getName()); // Dikss

function X() {}

// Adding a method to X.prototype
X.prototype.greet = function () {
  console.log("Hello from X.prototype");
};

// if want X.greet then write wfunc as Function.prototype.greet=func

const instance = new X();

// Checking relationships
console.log(instance.__proto__ === X.prototype); // true
console.log(X.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
