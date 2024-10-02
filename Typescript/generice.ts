function ex() {
  function x<T>(arg: T) {
    return arg;
  }
  x<string>("Rajat");
}

function e2() {
  interface Pair<T, U> {
    first: T;
    second: U;
  }

  // Function that uses the generic interface
  function printPair<T, U>(pair: Pair<T, U>): void {
    console.log(`First: ${pair.first}, Second: ${pair.second}`);
  }

  // Example usage
  let myPair: Pair<number, string> = { first: 10, second: "hello" };
  printPair<number, string>(myPair);
}

////////////////////////////////////////////
function e3() {
  interface ApiResponse<Data> {
    data: Data;
    isError: boolean;
  }
  interface UserData {
    name: string;
    value: number;
  }
  interface BlogData {
    title: string;
  }
  type UserDto = ApiResponse<UserData>;
  type BlogDto = ApiResponse<BlogData>;

  const userRes: UserDto = {
    data: {
      name: "Rajat",
      value: 0,
    },
    isError: false,
  };

  const blogRes: BlogDto = {
    data: {
      title: "Rajat",
    },
    isError: false,
  };
}
