import api from "./api";
import swall from 'sweetalert'

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
        swall({
          title: 'Erro!',
          text: `${err.message}`,
          icon: 'error',
          timer: 7000
        })
      }),

  loggedUser: () =>
    api
      .get("/auth")
      .then((response: any) => response.data)
      .catch((err: any) => {
        swall({
          title: 'Erro!',
          text: `${err.message}`,
          icon: 'error',
          timer: 7000
        })
      }),
};

const registerService = {
  register: (values: userRegisterObj) =>
    api
      .post("/user", values)
      .then((response: any) => response)
      .catch((err: any) => {
        swall({
          title: 'Erro!',
          text: `${err.message}`,
          icon: 'error',
          timer: 7000
        })
      }),
};

export { loginService, registerService };
