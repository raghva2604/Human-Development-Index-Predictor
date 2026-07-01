import axios from "axios"

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
})

export const predictHDI = async (data) => {
  const response = await API.post("/predict", data)
  return response.data
}

export default API
