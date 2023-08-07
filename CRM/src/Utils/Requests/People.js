import axios from "axios";
import { apiUrl } from "../../api";

export const getOwners = () => axios.get(apiUrl + "/owners");
export const getUsers = () => axios.get(apiUrl + "/users");
export const getGuests = () => axios.get(apiUrl + "/guests");

export const updateOwner = (id, body) =>
  axios.put(apiUrl + `/owners/${id}`, body);

export const addOwner = (body) => {
  console.log(body);
  return axios.post(apiUrl + "/auth-owner/signup", body);
};
