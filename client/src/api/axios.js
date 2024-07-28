import axios from "axios";

// const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = process.env.REACT_APP_API_URL ?? "https://bitfl.onrender.com/api/";
const API_URL = "https://bitfl.onrender.com/api/";
const instance = axios.create({
    baseURL: API_URL,
});

export default instance;
