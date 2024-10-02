const obj = { count: 1 };

Object.defineProperty(obj, "a", {
  get() {
    return this.count + 1;
  },
  set(value) {
    this.count = value;
  },
});
obj.a = 7;
console.log(obj.a);
