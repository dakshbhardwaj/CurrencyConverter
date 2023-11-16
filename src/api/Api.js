import axios from 'axios';
import EnvironmentConfig from '../constants/EnvironmentConfig';

export const RequestType = {
  GET: 'GET',
  POST: 'POST',
};

class NiumAPI {
  constructor() {
    this.config = {};
    this.config.baseURL = EnvironmentConfig.baseURL;
    this.axios = axios.create({baseURL: this.config.baseURL});
    this.bindInterceptors();
    this.bindInterceptors.bind(this);
    this._get.bind(this);
    this._post.bind(this);
    this._delete.bind(this);
    this.get.bind(this);
    this.post.bind(this);
    this.delete.bind(this);
  }

  bindInterceptors() {
    this.axios.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    this.axios.interceptors.response.use(
      response => {
        if (!response.data) {
          return Promise.reject(response);
        }
        return response;
      },
      error => {
        if (error?.response) {
          return Promise.reject(error);
        }
        return Promise.reject(error);
      },
    );
  }

  _get(url, params) {
    return new Promise((resolve, reject) => {
      if (this._isInternetConnected()) {
        this.axios
          .get(url, {
            params: {...params},
          })
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      } else {
        reject(this._getNoConnectionResponse());
      }
    });
  }

  get(url, params) {
    return this._get(url, params);
  }

  _post(url, data, options) {
    return new Promise((resolve, reject) => {
      if (this._isInternetConnected()) {
        this.axios
          .post(url, data, options)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      } else {
        reject(this._getNoConnectionResponse());
      }
    });
  }

  _delete(url, data, options) {
    return new Promise((resolve, reject) => {
      if (this._isInternetConnected()) {
        this.axios
          .delete(url, data, options)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      } else {
        reject(this._getNoConnectionResponse());
      }
    });
  }

  post(url, data, options) {
    return this._post(url, data, options);
  }

  delete(url, data, options) {
    return this._delete(url, data, options);
  }

  _isInternetConnected() {
    return true;
  }

  _getNoConnectionResponse() {
    return {
      code: 'NO_INTERNET',
      msg: 'No internet connection.',
      error_data: [{msg: 'No internet connection.'}],
    };
  }
}

export default NiumAPI;
