import api from "./api";

const homepageService = {
  home: (id: string) =>
    api
      .get(`/homepage/${id}`)
      .then((response: any) => response.data)
      .catch((err: any) => err),
};

export { homepageService };
