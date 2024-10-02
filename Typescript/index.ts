// intersection
interface Response<T> {
  data: T;
  success: boolean;
}

interface Error {
  success: boolean;
  error: {
    message: string;
  };
}

interface UserData {
  name: string;
  age: number;
}

type UserRespnse = Response<UserData>;
