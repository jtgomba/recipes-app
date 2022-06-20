import axios from "axios";
import qs from "qs";

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
      field: [
        "label",
        "image",
        "dietLabels",
        "healthLabels",
        "ingredients",
        "calories",
        "url",
        "yield",
      ],
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  };
};

export const youtubeOptions = (query) => {
  return {
    method: "GET",
    params: {
      query: query,
      next: "EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D",
      hl: "en",
      gl: "US",
      sort: "r",
    },
    headers: {
      "X-RapidAPI-Key": "64c324ccadmshd13054b9548e8a9p1c0d3fjsnbe75316a3848",
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
  };
};

export const fetchData = async (url, options) => {
  const response = await axios.request(url, options);
  const data = await response.data;

  return data;
};
