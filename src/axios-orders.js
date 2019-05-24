import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-time-afed8.firebaseio.com/"
});

export default instance;
