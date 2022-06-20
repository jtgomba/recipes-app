import axios from "axios";

//params needs at a object with at least equaling something e.g. q: "chicken"
export const recipeOptions = (search) => {
  return {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    params: {
      type: "public",
      q: search,
      app_id: process.env.REACT_APP_EDAMAM_APP_ID,
      app_key: process.env.REACT_APP_EDAMAM_APP_KEY,
    },
  };
};

export const fetchData = async (url, options) => {
  const response = await axios.request(url, options);
  const data = await response.data;

  return data;
};
