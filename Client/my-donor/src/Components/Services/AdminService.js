import axios from "./axios";

export async function getAllAppointments(){
    var res = await axios.get('admin/getallappointments');
    return res.data;
}

export async function approveAppointment(data){
    var res = await axios.get('admin/approve-appointment/' + data);
    return res.data;
}