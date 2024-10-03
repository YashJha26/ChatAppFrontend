import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;
export default async function authFetchHandler({ endPoint, method = "GET", data }) {
  const url = `${BASE_URL}/${endPoint}`;
  //console.log("authHandler",data);
  const options = {
    withCredentials: true,
    method,
    data,
  };

  try {
    const response = await axios(url, options);
    return response;
  } catch (error) {
    console.log(error);
  }
}
