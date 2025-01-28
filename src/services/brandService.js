import api from "./api";

// creates an async function called getBrands
// an async function basically means it will return a promise and allow me to use "await" inside the function to wait for promises to resolve
export const getBrands = async () => {
  // this line makes a GET request using the "api" instance I created in ./api.js
  // "await" tells Javascript to wait until the API request is complete before moving on with the code
  const response = await api.get("/brand-index");
  return response.data;
};
