import api from "./api";
import swall from 'sweetalert';

interface profileCreateObj {
  title: string;
  imageUrl: string;
  userId: string;
  favoritos: string[];
}

const createService = {
  create: (values: profileCreateObj) =>
    api
      .post("/profile", values)
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

export {createService}