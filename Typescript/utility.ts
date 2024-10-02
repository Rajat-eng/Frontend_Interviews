function eu1() {
  interface User {
    fname: string;
    lname: string;
    age: number;
  }
  type partial<T> = Partial<T>;
  type pick<T, K extends keyof T> = Pick<T, K>;

  type PartialWithRequired = partial<User> &
    Required<pick<User, "fname" | "lname">>;

  let y: PartialWithRequired = {
    fname: "rajat",
    lname: "dsa",
  };
}

function eu2() {
  interface ApiResponse<T> {
    data: T;
    statusCode?: number;
    error?: string;
  }

  interface User {
    name: string;
    address: {
      street: string;
      city: string;
    };
  }

  async function fetchData<T>(apiUrl: string): Promise<ApiResponse<T>> {
    try {
      const response: any = await callAPI(apiUrl);
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  const userUrl = "https://example.com/api/user";
  fetchData<User>(userUrl)
    .then((response) => {
      if (response.statusCode === 200) {
        console.log("User data:", response.data);
      } else {
        console.error("Error:", response.error);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function callAPI(apiUrl: string) {
  return Promise.resolve({
    data: {
      name: "John",
      address: { street: "123 Main St", city: "Example City" },
    },
    statusCode: 200,
  });
}
