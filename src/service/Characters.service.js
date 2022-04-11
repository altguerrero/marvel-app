import axios from "axios";
import urlBuild from "../utils/urlBuild.utils";

const baseUrl = process.env.REACT_APP_BASE_URL;
const authUrl = process.env.REACT_APP_AUTH_PARAMS_URL;

export const getAllCharacters = async (params = { limit: 10 }) => {
  const endpoint = `characters?${authUrl}&limit={limit}`;
  const url = urlBuild(baseUrl, endpoint, params);

  try {
    const res = await axios.get(url);
    return res;
  } catch (error) {
    throw new Error("Error in request: " + error.message);
  }
};

export const getCharacter = async (params) => {
  const endpoint = `characters/{id}?${authUrl}`;
  const url = urlBuild(baseUrl, endpoint, params);

  try {
    const res = await axios.get(url);
    return res;
  } catch (error) {
    throw new Error("Error in request: " + error.message);
  }
};
