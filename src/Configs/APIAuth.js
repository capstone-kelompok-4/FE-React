import axios from "axios";

export const BASE_URL = "https://capstone-project-4.herokuapp.com/api";


export const getUser = () => {
  const userStr = sessionStorage.getItem('user');
  if(userStr) return JSON.parse(userStr);
  else return null;
}

export const getToken = () => {
  return sessionStorage.getItem('token') || null ;
}

export const setUserTokenSession = (token) => {
  sessionStorage.setItem("token", token);
}

export const setUserSession = (user) => {
  sessionStorage.setItem("user", JSON.stringify(user));
}

export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
}

export const getUserData = () => {
  return axios.get(`${BASE_URL}/users`);
}