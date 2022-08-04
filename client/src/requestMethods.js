import axios from "axios";


// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

const TOKEN = document.cookie.split("=")[1]
console.log(TOKEN)


const BASE_URL = "http://localhost:5000/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const userRequest = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
