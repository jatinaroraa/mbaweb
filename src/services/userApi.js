import axios from "axios";
import { baseUrl } from "../constants";

export const createUser = async (body) => {
  try {
    console.log(body, "bodyy crr user");
    let res = await axios.post(`${baseUrl}/user/createAccount`, body);
    return res.data;
  } catch (error) {
    //error in toast
  }
};
