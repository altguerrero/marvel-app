import axios from "axios";
import urlBuild from "../utils/urlBuild.utils";

const baseUrl = process.env.REACT_APP_BASE_URL;
const authUrl = process.env.REACT_APP_AUTH_PARAMS_URL;

export const getAllCharacters = async (params) => {
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

export const searchCharacters = async (params) => {
  const endpoint = `characters?${authUrl}&nameStartsWith={search}&limit={limit}`;
  const url = urlBuild(baseUrl, endpoint, params);

  try {
    const res = await axios.get(url);
    return res;
  } catch (error) {
    throw new Error("Error in request: " + error.message);
  }
};

export const getCharacterComic = async (resourceURI) => {
  const endpoint = `${resourceURI}?${authUrl}`;
  const url = endpoint;

  try {
    const res = await axios.get(url);
    return res;
  } catch (error) {
    throw new Error("Error in request: " + error.message);
  }
};
