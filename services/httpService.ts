import axios, { AxiosRequestConfig } from "axios";
import { SERVER_URL } from "../constants";

const requestConfig = {
  baseURL: SERVER_URL,
};

const { get, post, interceptors, put } = axios.create(requestConfig);

interceptors.request.use(
  function (axiosConfig) {
    const config = axiosConfig;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get,
  post,
  put,
};
