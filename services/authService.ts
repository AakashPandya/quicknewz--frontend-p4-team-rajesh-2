import { API_URLS } from "../constants";
import httpService from "./httpService";

const signup = async (data) => {
  return await httpService.post(`${API_URLS.SIGNUP}`, data);
};

const signin = async (data) => {
  return await httpService.post(`${API_URLS.SIGNIN}`, data);
};

export default {
  signup,
  signin,
};
