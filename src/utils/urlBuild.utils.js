import { parseTemplate } from "url-template";

const urlBuild = (baseUrl, url, params = {}) => {
  const template = parseTemplate(url).expand(params);
  return `${baseUrl}/${template}`;
};

export default urlBuild;
