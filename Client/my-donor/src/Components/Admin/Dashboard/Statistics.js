import React, { Component, useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { adminStats,purchaseHistory } from "../../../api/adminApi";
import HospitalPurchaseHistory from "../HospitalPurchaseHistory";
import CustomerPurchaseHistory from "../CustomerPurchaseHistory";
import {AnimatedOnScroll} from "react-animated-css-onscroll";

function Statistics() {
  const [stat, setStat] = useState({});

  useEffect(() => {
    adminStats().then((data)=>{
    console.log(data);
    setStat(data);

      //counter
    // let end = data.purchaseCount;
    // console.log(end);
    // let counts=setInterval(updated);
    // let upto=0;
    // function updated(){
    //     var count= document.getElementById("counter");
    //     count.innerHTML=++upto;
    //     if(upto==end)
    //     {
    //         clearInterval(counts);
    //     }
    // }
   });
  }, []);

  return (
    <>
    <div className="flex flex-wrap justify-around p-2 ml-4">
      <div className="w-6/12 px-4 animate__animated animate__flipInX">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4 hover:bg-red-500 hover:text-white rounded">
            <div className="flex flex-wrap">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 className="text-blueGray-400 uppercase font-bold text-xs">

                  Hospitals
                </h5>
                <span className="font-semibold text-xl text-blueGray-700">
                  {stat.hospitalCount}
                </span>
              </div>
              <div className="relative w-auto pl-4 flex-initial">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                  <i className="fas fa-hospital"></i>
                </div>
              </div>
            </div>
            <p className="text-sm text-blueGray-400 mt-4">
              <span className="text-emerald-500 mr-2">
                <i className="fas fa-arrow-up"></i> 2,99%{" "}
              </span>
              <span className="whitespace-nowrap"> Since last month </span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-6/12 animate__animated animate__flipInX">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4  hover:bg-red-500 hover:text-white rounded">
            <div className="flex flex-wrap">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                  Donors
                </h5>
                <span className="font-semibold text-xl text-blueGray-700">
                {stat.customerCount}
                </span>
              </div>
              <div className="relative w-auto pl-4 flex-initial">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                  <i className="fas fa-user"></i>
                </div>
              </div>
            </div>
            <p className="text-sm text-blueGray-400 mt-4">
              <span className="text-red-500 mr-2">
                <i className="fas fa-arrow-down"></i> 4,01%
              </span>
              <span className="whitespace-nowrap"> Since last week </span>
            </p>
          </div>
        </div>
      </div>
    </div>
     <div className="flex flex-wrap justify-around p-2 ml-4">
     <div className="w-6/12 px-4 animate__animated animate__flipInX">
       <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
         <div className="flex-auto p-4  hover:bg-red-500 hover:text-white rounded">
           <div className="flex flex-wrap">
             <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
               <h5 className="text-blueGray-400 uppercase font-bold text-xs">

                 Stock Available
               </h5>
               <span className="font-semibold text-xl text-blueGray-700">
                 {stat.stockCount}
               </span>
             </div>
             <div className="relative w-auto pl-4 flex-initial">
               <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                 <i className="fas fa-archive"></i>
               </div>
             </div>
           </div>
           <p className="text-sm text-blueGray-400 mt-4">
             <span className="text-emerald-500 mr-2">
               <i className="fas fa-arrow-up"></i> 2,99%{" "}
             </span>
             <span className="whitespace-nowrap"> Since last month </span>
           </p>
         </div>
       </div>
     </div>

     <div className="w-6/12 animate__animated animate__flipInX">
       <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
         <div className="flex-auto p-4  hover:bg-red-500 hover:text-white rounded">
           <div className="flex flex-wrap">
             <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
               <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                 Purchase Number
               </h5>
               <span className="font-semibold text-xl text-blueGray-700" id="counter">
                 {stat.purchaseCount}
               </span>
             </div>
             <div className="relative w-auto pl-4 flex-initial">
               <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                 <i className="fas fa-shopping-cart"></i>
               </div>
             </div>
           </div>
           <p className="text-sm text-blueGray-400 mt-4">
             <span className="text-red-500 mr-2">
               <i className="fas fa-arrow-down"></i> 4,01%
             </span>
             <span className="whitespace-nowrap"> Since last week </span>
           </p>
         </div>
       </div>
     </div>
   </div>
   <AnimatedOnScroll animationIn="zoomIn" animationOut="zoomOut">
   <HospitalPurchaseHistory/>
   </AnimatedOnScroll>
   <AnimatedOnScroll animationIn="zoomIn" animationOut="zoomOut">
   <br></br>
   <CustomerPurchaseHistory className="mt-10"/>
   <br></br>
</AnimatedOnScroll>
  </>
  );
}

export default Statistics;
