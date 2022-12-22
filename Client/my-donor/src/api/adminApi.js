import axios from "./requestBase";


const hospital = async (data)=>{
    var response = await axios.get('/admin/getallone',data);
    return response.data;
}

const approveHospital = async (data)=>{
    var response = await axios.get('/admin/hospitalapproval/' + data);
    return response.data;
}

const rejectHospital = async (data)=>{
    var response = await axios.get('/admin/rejecthospital/' + data);
    return response.data;
}


//show appointment and customer details
const getCustomerDetails = async (data)=>{
    var response = await axios.get('/admin/getallappointments/', data);
    return response.data;
}

export {hospital, approveHospital, rejectHospital,getCustomerDetails}