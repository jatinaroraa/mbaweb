import axios from "axios";
import { baseUrl } from "../constants";

export const createTagApi = async (body) => {
  try {
    const data = await axios.post(`${baseUrl}/tags/createTag`, body);
    return data.data;
  } catch (error) {
    //toast
    return null;
  }
};

export const getAllTagsApi = async () => {
  try {
    const data = await axios.get(`${baseUrl}/tags/getAllTags`);
    return data.data;
  } catch (error) {
    return null;
  }
};
