const objIntro = {
  name: "rahul",
  city: "gwalior",
};

function sayIntro(company, place) {
  console.log(
    `name is ${this.name}, place is ${this.city} and company is ${company} and work place is ${place} `
  );
}

Function.prototype.myApply = function (context, args) {
  // this is function sayIntro
  if (typeof this !== "function") {
    throw new Error(this, "invalid call");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("arguments are not in array");
  }
  context.fnc = this;
  return context.fnc(...args);
};

let value = sayIntro.myApply(objIntro, ["cognizant", "gurgaon"]);

// map polyfill
Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let index = 0; index < this.length; index++) {
    let tempResult = callback(this[index], index, this); // exampke num*2
    temp.push(tempResult);
  }
  return temp;
};

// filter polyfill
Array.prototype.myFilter = function (callback) {
  let temp = [];
  for (let index = 0; index < this.length; index++) {
    let tempResult = callback(this[index], index, this); // exampke num%2
    if (tempResult) {
      temp.push(this[i]);
    }
  }
  return temp;
};

// reduce polyfill
Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;

  for (let index = 0; index < this.length; index++) {
    if (acc !== "undefined") {
      acc = callback(acc, this[index], index, this);
    } else {
      acc = this[i];
    }
  }
  return acc;
};
