import api from "./api";

interface userLoginObj {
  email: string;
  password: string;
}

interface userRegisterObj {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: number;
  isAdmin: boolean;
}

const loginService = {
  login: (values: userLoginObj) =>
    api
      .post("/auth", values)
      .then((response: any) => response)
      .catch((err: any) => {
        console.log(`ERRO NA CHAMADA:\n${err}`);
      }),

  loggedUser: () =>
    api
      .get("/auth")
      .then((response: any) => response.data)
      .catch((err: any) => {
        console.log(`ERRO NA CHAMADA:\n${err}`);
      }),
};

const registerService = {
  register: (values: userRegisterObj) =>
    api
      .post("/user", values)
      .then((response: any) => response)
      .catch((err: any) => {
        console.log(`ERRO NA CHAMADA:\n${err}`);
      }),
};

export { loginService, registerService };
