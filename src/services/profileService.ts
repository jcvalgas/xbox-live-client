import api from "./api";
import swall from "sweetalert";

interface profileCreateObj {
  title: string;
  imageUrl: string;
}

const createService = {
  create: (values: profileCreateObj) =>
    api
      .post("/profile", values)
      .then((response: any) => response)
      .catch((err: any) => {
        swall({
          title: "Erro!",
          text: `${err.message}`,
          icon: "error",
          timer: 7000,
        });
      }),
};

const getProfileService = {
  getByid: (id: string) =>
    api
      .get(`/profile/${id}`)
      .then((response: any) => response.data)
      .catch((err: any) => {
        swall({
          title: "Erro!",
          text: `${err.message}`,
          icon: "error",
          timer: 7000,
        });
      }),
};

const profileUpdateService = {
  update: (values: profileCreateObj, id: string) =>
    api
      .patch(`/profile/${id}`, values)
      .then((response: any) => response.data)
      .catch((err: any) => {
        swall({
          title: "Erro!",
          text: `${err.message}`,
          icon: "error",
          timer: 7000,
        });
      }),
};

const profileDeleteService = {
  delete: (id: string) =>
    api.delete(`/profile/${id}`)
    .then((response) => response.data)
    .catch((err: any) => {
      swall({
        title: "Erro!",
        text: `${err.message}`,
        icon: "error",
        timer: 7000,
      });
    }),
}

export { createService, getProfileService, profileUpdateService, profileDeleteService};
