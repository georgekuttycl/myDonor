import axios from "./requestBase";


// update service for hospital.
const updateHospital =async (data)=>{
    var response=await axios.get('/user/updatehospital');
    return response;

}
// update function for hospital.
const updateHospitalPost =async (data)=>{
    var response=await axios.post('user/updatehospital',data);
    return response.data;
}

//request blood.
const bloodRequest= async(data)=>{
    var response=await axios.post('/customer/requestblood', data);
    return response;
}

//payment
const hospitalPayment= async(data)=>{
    var response=await axios.get('/user/payment', data);
    return response;
}

//paymentStore
const hospitalPaymentStore= async(data)=>{
    var response=await axios.get('/user/paymentStore', data);
    return response;
}
// invoice print.
const hospitalInvoice=async(data)=>{
    var response=await axios.get('/user/invoice', data);
    return response;
}

const feedbackHospitalPost =async (data)=>{

    var response=await axios.post('user/feedback',data);

    return response.data;

}

const hospitalName =async (data)=>{
    var response=await axios.get('/user/hospitalDetails',data);
    return response.data;
}

const hospitalStats =async (data)=>{
    var response=await axios.get('/user/hospital/stats',data);
    return response.data;
}
export  {updateHospital,updateHospitalPost,bloodRequest,hospitalPayment,hospitalPaymentStore,hospitalInvoice, feedbackHospitalPost,hospitalName,hospitalStats};