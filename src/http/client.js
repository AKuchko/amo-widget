import axios from "axios"

const baseURL = "http://localhost:3000"

const axiosInstance = axios.create({
  baseURL,
  timeout: 60000,
})

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  delete: axiosInstance.delete,
  put: axiosInstance.put,
}