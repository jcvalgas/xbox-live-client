import api from "./api";

interface userLoginObj {
    email: string,
    password: string,
}

const loginService = {
    login: (values: userLoginObj) => api.post('/auth', values)
    .then((response: any) => {
        return response;
    })
    .catch((err: any) => {
        console.log(`ERRO NA CHAMADA:\n${err}`);
        
    })
}

export {
    loginService,
}