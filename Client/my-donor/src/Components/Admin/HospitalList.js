import {React, useState, useEffect} from 'react'
import {hospital, approveHospital, rejectHospital} from '../../api/adminApi';

function HospitalList() {
    const [hospitalDetails,setHospitalDetails] = useState([]);
    useEffect(() => {
        hospital().then((data) => {
            setHospitalDetails(data);
        });
    }, []);

    function approveHospitalEntry(e){
        let id = e.target.getAttribute('data-id');
        approveHospital(id);
        e.target.remove();
        alert('Status updated successfully.')
    }

    function rejectHospitalEntry(e){
        let id = e.target.getAttribute('data-id');
        rejectHospital(id);
        e.target.remove();
        alert('Status updated successfully.')
    }
    const getRow = (result,index)=>{
        return (
            <tr key={index} className="border border-solid">
                 <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{result.name}</td>
                 <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{result.address}</td>
                 <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{result.licenseNumber}</td>
                 <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{result.category}</td>
                 <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 {result.status === '0' ? <button type="button" class="border text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline" data-id={result.id} onClick={approveHospitalEntry} style={{backgroundColor:'green'}}>Approve</button> : <></>}
                 {result.status === '1' ? <button type="button" class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" data-id={result.id} onClick={rejectHospitalEntry}>Reject</button> : <></>}
                 </td>
            </tr>
        )
    }
  return (
      <div>
        <section class="py-1 bg-blueGray-50 ml-6 animate__animated animate__zoomIn">
<div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">

    <div class="block w-full overflow-x-auto">
      <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Hospital Name
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Address
                        </th>
           <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Liscence
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Category
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Action
                        </th>
          </tr>
        </thead>

        <tbody>
        {hospitalDetails.map(getRow)}
        </tbody>
      </table>
    </div>
  </div>
</section>
      </div>

  )
}

export default HospitalList