const inputObject = {
  country: {
    state: {
      city: {
        name: "Varanasi",
      },
    },
  },
};
let str = "country.state.city";
const keys = str.split(".");

let ans = keys.reduce((acc, curr) => {
  acc = acc[curr];
  return acc;
}, inputObject);

console.log(ans);
