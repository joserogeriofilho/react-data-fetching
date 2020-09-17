import axios from 'axios';

export default class AxiosService {

  constructor(api_url, api_endpoint) {
    this.api_url = api_url;
    this.api_endpoint = api_endpoint;
    this.http = axios.create({ baseURL: api_url });
  }

  async $get(params = {}) {
    return this.http.get(this.api_endpoint, { params }).then(response => {
      return response.data;
    });
  }
  
}