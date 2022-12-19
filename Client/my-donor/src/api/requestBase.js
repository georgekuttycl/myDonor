import axios from 'axios';

axios.defaults.headers['content-type'] = 'application/json';
axios.defaults.baseURL = 'http://localhost/'

const token = localStorage.getItem('token');
if(token){
    axios.defaults.headers['authorization'] = `Bearer ${token}`;
}

export default axios;