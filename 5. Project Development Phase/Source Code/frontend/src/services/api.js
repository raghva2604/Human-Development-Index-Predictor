import axios from "axios";

const API = axios.create({
  baseURL: "https://nrdevelopers.duckdns.org",
});

export const predictHDI = async (data) => {
  const response = await API.post("/predict", data);
  return response.data;
};

export default API;