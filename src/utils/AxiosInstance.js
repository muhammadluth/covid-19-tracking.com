import Axios from "axios";

const AxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
});

export default AxiosInstance;
