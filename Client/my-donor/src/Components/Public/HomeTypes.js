import React from 'react';

function Types() {
    return (
        <div className='mt-40'>
            <div className="container mx-auto">
                <h2 className=" text-center font-bold" style={{ color: 'red', fontFamily: "'Raleway','sans-serif'" }}>Types of Donation</h2>
                <br />
                <br />
                <h5 className="text-center">The human body contains five liters of blood, which is made of several useful components i.e. Whole blood, Platelet, and Plasma.
                    Each type of component has several medical uses and can be used for different medical treatments. your blood donation determines the best donation for you to make.
                    For plasma and platelet donation you must have donated whole blood in past two years.</h5>
                <div className="flex justify-center px-6 my-12">
                    <div className="w-full xl:w-full lg:w-full flex">
                        <div
                            className="lg:block lg:w-full h-full bg-cover"
                            style={{
                                backgroundImage: "url(" + require("../../assets/img/homtyp.jpg") + ")",
                            }}
                        ></div>
                        <div className="w-full lg:w-full bg-white p-5 rounded-lg lg:rounded-l-none">
                            <p className="text-lg font-medium"><span className="text-lg font-bold">Whole Blood :</span> Blood Collected straight from the donor after its donation usually separated into red blood cells, platelets, and plasma.</p>
                            <p className="text-lg font-medium"><span className="text-lg font-bold">Plasma :</span> The straw-coloured liquid in which red blood cells, white blood cells, and platelets float in.Contains special nutrients which can be used to create 18 different type of medical products to treat many different medical conditions.</p>
                            <p className="text-lg font-medium"><span className="text-lg font-bold">Platelet :</span> The tiny 'plates' in blood that wedge together to help to clot and reduce bleeding. Always in high demand, Vital for people with low platelet count, like malaria and cancer patients.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Types;