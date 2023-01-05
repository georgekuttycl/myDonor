import React, { Component, useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { customerPurchaseHistory } from "../../api/adminApi";

function CustomerPurchaseHistory() {
    const [data, setData] = useState([{}])

    const columns = ["hospitalName", "group", "quantity","amount","date"];


    const options = {
      filterType: "checkbox",
    };

    useEffect(()=>{
      customerPurchaseHistory().then(res=>{
        setData(res);
        console.log(res);
      });
    },[]);
  return (
    <div className="w-11/12 ml-10">
    <MUIDataTable
      title={<h3>Customer Purchase History</h3>}
      data={data}
      columns={columns}
      options={options}
    />
  </div>
  )
}

export default CustomerPurchaseHistory