import axios from "axios";

const baseURL = "https://amo-inn-api.services.mobilon.ru"

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
