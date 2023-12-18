import axios from "axios";

export default class HttpService {

    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    get(url, headers = {}) {
      const fullUrl = `${this.baseUrl}${url}`;
      return axios.get(fullUrl, { headers });
    }
  
    post(url, data, headers = {}) {
      const fullUrl = `${this.baseUrl}${url}`;
      return axios.post(fullUrl, data, { headers });
    }
  
    put(url, data, headers = {}) {
      const fullUrl = `${this.baseUrl}${url}`;
      return axios.put(fullUrl, data, { headers });
    }
  
    delete(url, headers = {}) {
      const fullUrl = `${this.baseUrl}${url}`;
      return axios.delete(fullUrl, { headers });
    }
  
    // Custom request with method and data
    request(method, url, data, headers = {}) {
      const fullUrl = `${this.baseUrl}${url}`;
      return axios.request({ method, fullUrl, data, headers });
    }
  }