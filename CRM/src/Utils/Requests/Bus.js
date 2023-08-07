import axios from "axios";
import { checkIfTokenExpired } from "../helpers";
import { isAuthenticated } from "./Auth";
import { apiUrl } from "../../api";

export const getAvailableBusesOfOwner = () => {
  // checkIfTokenExpired(isAuthenticated().token);
  return axios.get(apiUrl + "/bus/owner-bus-available");
};
export const getAllAvailableBuses = () =>
  axios.get(apiUrl + "/bus/all-bus-available");

export const getUnavailableBusesOfOwner = () =>
  axios.get(apiUrl + "/bus/owner-bus-unavailable");
export const getAllUnavailableBuses = () =>
  axios.get(apiUrl + "/bus/all-bus-unavailable");

export const addNewBus = (body) => axios.post(apiUrl + "/bus", body);

export const getBusBySlug = (slug) => axios.get(apiUrl + "/bus/" + slug);

export const removeBus = (slug) => axios.delete(apiUrl + "/bus/" + slug);

export const updateBus = (slug, body) =>
  axios.put(apiUrl + "/bus/" + slug, body);

// axios.post('/bus', body, { onUploadProgress: progressEvent => console.log(progressEvent.loaded) });
