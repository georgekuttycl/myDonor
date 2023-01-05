import React, { Component, useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { hospitalPurchaseHistory } from "../../api/adminApi";

function HospitalPurchaseHistory() {
    const [data, setData] = useState([{}])

    const columns = ["hospitalName", "group", "quantity","amount","date"];


    const options = {
      filterType: "checkbox",
    };

    useEffect(()=>{
      hospitalPurchaseHistory().then(res=>{
        setData(res);
        console.log(res);
      });
    },[]);
  return (
    <div className="mr-2 ml-12 animate__animated animate__zoomIn">
    <MUIDataTable
      title={<h3>Hospital Purchase History</h3>}
      data={data}
      columns={columns}
      options={options}
    />
  </div>
  )
}

export default HospitalPurchaseHistory