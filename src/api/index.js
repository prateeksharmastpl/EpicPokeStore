import axios from 'axios';

// setting up Axios instance 
const createAxiosInstance = (baseURL) => {
    return axios.create({
      baseURL: baseURL
    });
  };
  
export default createAxiosInstance;