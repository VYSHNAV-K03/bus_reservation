import axios from "axios";
import { apiUrl } from "../../api";

export const getAllTravels = () => axios.get(apiUrl + "/travels");
export const getATravel = (id) => axios.get(apiUrl + `/travels/${id}`);
export const updateTravel = (id, body) =>
  axios.put(apiUrl + `/travels/${id}`, body);
export const removeTravel = (id) => axios.delete(apiUrl + `/travels/${id}`);
export const addNewTravel = (body) => axios.post(apiUrl + "/travels", body);
