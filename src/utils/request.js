import axios from "axios";

function request(options) {
  return axios(options)
    .then(res => res)
    .catch(error => {
      const {
        response: { status, statusText }
      } = error;
      console.log("status", status);
      console.log("statusText", statusText);
      return Promise.reject(error);
    });
}

export default request;
