import request from "./request";


const api_key = process.env.REACT_APP_API

export const fetchCredits= (id) => 
  request
    .get(`/movie/${id}/credits`)
    .then(res => res.data)
    .catch((err) => {
      console.log(err);
    });