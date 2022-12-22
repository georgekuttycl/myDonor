import axios from "./requestBase";

export async function customerRegister(data){
    data.otp = 0;
    let res = await axios.post('/customerRegistration', data);
    return res.data;
}

export async function hospitalRegister(data){
    data.otp = 0;
    let res = await axios.post('/hospitalRegistration', data);
    return res.data;
}

export async function login(data){
    let res = await axios.post('login', data);
    return res.data;
}

export async function checkOtp(data){
    let res = await axios.post('checkOtp/', data);
    return res.data;
}

