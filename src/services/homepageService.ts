import api from "./api";
import swall from 'sweetalert';

const homepageService = {
  home: (id: string) =>
    api
      .get(`/homepage/${id}`)
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

export { homepageService };
