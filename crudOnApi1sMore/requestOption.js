import { TOKEN } from "./constant.js";

export const requestOptions1 = (method) => {
  var requestOptions = {
    method: method,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    redirect: "follow",
  };
  return requestOptions;
};
