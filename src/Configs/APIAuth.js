import axios from "axios";

export const BASE_URL = "https://capstone-project-4.herokuapp.com/api";


export const getUser = () => {
  const userStr = localStorage.getItem('user');
  if(userStr) return JSON.parse(userStr);
  else return null;
}

export const getToken = () => {
  return localStorage.getItem('token') || null ;
}

export const setUserTokenSession = (token) => {
  localStorage.setItem("token", token);
}

export const setUserSession = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
}

export const removeUserSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

export const getUserData = () => {
  return axios.get(`${BASE_URL}/users`);
}