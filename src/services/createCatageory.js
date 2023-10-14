import axios from "axios";
import { baseUrl } from "../constants";

export const createCategory = async (body) => {
  try {
    let data = await axios.post(`${baseUrl}/category/createCategory`, body);
    return data.data;
  } catch (error) {
    //toast
  }
};

export const getCatageory = async () => {
  try {
    let data = await axios.get(`${baseUrl}/category/getAllCategory`);
    return data.data;
  } catch (error) {
    //toast
  }
};
