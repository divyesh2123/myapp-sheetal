import axios from 'axios';

let token = JSON.parse(localStorage.getItem("token"));

console.log(token);
const authFetchData = axios.create({
  baseURL: 'https://real-pear-fly-kilt.cyclic.app',
  headers: {
    Accept: 'application/json',
    Authorization : `bearer ${token.jwtToken}`
  },
});

export default authFetchData;