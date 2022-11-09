import useLoader from "../stores/loader";
import axios from "axios";

const Api = () => {
  const loader = useLoader();

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  api.interceptors.request.use((req) => {
    loader.start();
    return req;
  });

  api.interceptors.response.use(
    (res) => {
      loader.stop();
      return res;
    },
    (error) => {
      // console.error(error);
      loader.stop();
      throw error;
    }
  );

  return api;
};
export default Api;