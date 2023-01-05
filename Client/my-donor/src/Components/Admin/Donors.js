import React, { Component, useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import {getCustomerDetails} from "../../api/adminApi";

function Donors() {
  const [data, setData] = useState([{}])

  const columns = ["name", "bloodGroup", "address", "date","weight"];


  const options = {
    filterType: "checkbox",
  };

  useEffect(()=>{
    getCustomerDetails().then(res=>{
      console.log(res)
      setData(res);
    });
  },[]);
  return (
      <div className="mr-2 ml-12 animate__animated animate__zoomIn">

        <MUIDataTable
          title={<h3>Donors List</h3>}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );
}
export default Donors;