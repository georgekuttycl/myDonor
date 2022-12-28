import axios from "./requestBase";


// update service for hospital.
const getFeedback =async (data)=>{
    var response=await axios.get('/feedbackDetails',data);
    return response;
}

export {getFeedback}