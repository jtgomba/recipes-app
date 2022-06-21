import axios from "axios";

//params needs at a object with at least equaling something e.g. q: "chicken"
export const recipeOptions = (search) => {
  return {
    method: "GET",
    params: { from: "0", size: "50", q: search },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_API_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };
};

export const getOneRecipe = (id) => {
  return {
    method: "GET",
    params: { id: id },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_API_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };
};

export const getSimilar = (id) => {
  return {
    method: "GET",
    params: { recipe_id: id },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_API_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };
};

export const youtubeOptions = (query) => {
  return {
    method: "GET",
    params: {
      query: query,
      hl: "en",
      gl: "US",
      sort: "r",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_API_KEY,
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
  };
};

export const fetchData = async (url, options) => {
  const response = await axios.request(url, options);
  const data = await response.data;

  return data;
};
