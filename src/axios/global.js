import axios from 'axios';

let d = JSON.parse(localStorage.getItem("token"));
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] =  `Bearer ${d.jwtToken}`