import axios from "axios";
import { apiUrl } from "../../api";

export const getAllLocations = () => axios.get(apiUrl + "/locations");
export const getALocation = (id) => axios.get(apiUrl + `/locations/${id}`);
export const updateLocation = (id, body) =>
  axios.put(apiUrl + `/locations/${id}`, body);
export const removeLocation = (id) => axios.delete(apiUrl + `/locations/${id}`);
export const addNewLocation = (body) => axios.post(apiUrl + "/locations", body);
