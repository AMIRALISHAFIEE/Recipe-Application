import axios from "axios";
export default axios.create({
    baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
})