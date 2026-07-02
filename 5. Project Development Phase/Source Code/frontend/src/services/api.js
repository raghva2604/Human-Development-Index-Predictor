import axios from "axios"

const API = axios.create({
  baseURL:  "http://13.203.195.19",
})

export const predictHDI = async (data) => {
  const response = await API.post("/predict", data)
  return response.data
}

export default API
