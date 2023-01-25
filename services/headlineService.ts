import { API_URLS } from "../constants";
import httpService from "./httpService";

const getAll = async () => {
  return await httpService.get(API_URLS.HEADLINES);
};

const getDetails = async (id: string) => {
  return await httpService.get(`${API_URLS.HEADLINES}/${id}`);
};

export default {
  getAll,
  getDetails,
};
