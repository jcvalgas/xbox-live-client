import api from "./api";

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
      .catch((err: any) => err),
};

export {createService}