import api from "./api";

export const getWatches = async () => {
  const response = await api.get("/watch-index");
  return response.data;
};
