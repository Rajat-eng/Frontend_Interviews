function p1(name) {
  return new Promise((resolve, reject) => {
    resolve(`name is ${name}`);
  });
}

function p2(job) {
  return new Promise((resolve, reject) => {
    resolve(`job is ${job}`);
  });
}

p1("Rajat")
  .then((res) => {
    console.log(res);
    return p2("Developer");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const promise1 = new polyfill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
}).then((res) => console.log(res));

const promise2 = new polyfill((resolve, reject) => {
  resolve(2);
});

function polyfill(executor) {
  let onResolve,
    onReject,
    isCalled = false,
    isFulfilled = false,
    isRejected = false,
    value,
    error;
  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function" && !isCalled) {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(err) {
    isRejected = true;
    error = err;
    if (typeof onReject === "function" && !isCalled) {
      onReject(err);
      isCalled = true;
    }
  }
  this.then = function (thenHandler) {
    onResolve = thenHandler;
    if (!isCalled && isFulfilled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };
  this.catch = function (catchHandler) {
    onReject = catchHandler;
    if (!isCalled && isRejected) {
      onReject(error);
      isCalled = true;
    }
    return this;
  };

  executor(resolve, reject);
}
