import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fa1b435724a84452a5a97f2f1bb523a2",
  },
});

class APIClient<T> {
    endpoint: string;
  
    constructor(endpoint: string) {
      this.endpoint = endpoint; 
    }
  
    getAll = async (config: AxiosRequestConfig) => {
      const res = await axiosInstance.get<FetchResponse<T>>(this.endpoint, config);
      return res.data;
    };
  }
  
  export default APIClient;
