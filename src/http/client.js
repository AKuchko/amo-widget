import axios from "axios"// 
// import { config } from 'dotenv'

// config()

// import { BASE_URL } from "../../vue.config";

const baseURL = "http://localhost:3000"

const axiosInstance = axios.create({
  baseURL,
  timeout: 6000,
})


export default {
  get: axiosInstance.get,
  post:  axiosInstance.post,
  delete:  axiosInstance.delete,
  put: axiosInstance.put,
}