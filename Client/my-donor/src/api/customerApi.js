import axios from "./requestBase";

// const customer = async (data)=>{
//     var response = await axios.get('/customer/details',data);
//     return response.data;
// }
// export {customer}

const updateCustomer =async (data)=>{
    var response=await axios.get('/customer/update');
    console.log(response)
    return response;
}
const updateCustomerPost= async(data)=>{
    var response=await axios.post('/customer/update', data);
    console.log(response)
    return response;

}

//customer donation
const customerAppointment= async(data)=>{
    var response=await axios.post('/customer/donation', data);
    return response;
}

const guestAppointment= async(data)=>{
    var response=await axios.post('/customer/donation/guest', data);
    return response;
}

//request blood.
const bloodRequest= async(data)=>{
    var response=await axios.post('/customer/requestblood', data);
    return response;
}

// invoice print.
const hospitalInvoice=async(data)=>{
    var response=await axios.get('/user/invoice', data);
    return response;
}

const feedbackCustomerPost =async (data)=>{

    var response=await axios.post('customer/feedbackDetails',data);

    return response.data;

}
export  {
    updateCustomer,
    updateCustomerPost,
    customerAppointment,
    guestAppointment,
    bloodRequest,
    hospitalInvoice,
    feedbackCustomerPost
}