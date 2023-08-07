import axios from "axios";
import { apiUrl } from "../../api";

export const getOwnerBookings = () => axios.get(apiUrl + "/bookings/my");
export const getAllBookings = () => axios.get(apiUrl + "/bookings/all");

export const removeBooking = (id) => axios.delete(apiUrl + `/bookings/${id}`);

export const changeVerificationStatus = (bookingId, status) =>
  axios.patch(apiUrl + `/bookings/${bookingId}`, { verification: status });

export const postSoldSeat = (slug, seat) =>
  axios.post(apiUrl + `/bookings/sold/${slug}`, { seatNumber: seat });
