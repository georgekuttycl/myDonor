import axios from "./requestBase";

async function register(data){
    let res = await axios.post('customerRegistration/', data);
    return res.data;
}

export default{
    customerRegistration: register
}