// imports the axios library (popular library in JS for making HTTP requests to APIs)
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api"
});

// This exports the api instance above so it can be imported and used in other parts of your application, such as components or services that need to interact with the backend
export default api;
