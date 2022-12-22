import React from 'react';

function Gallery() {
  return (
    <div className='mt-40'>
    <div className='grid grid-cols-4 gap-2 flex items-center'>
      <div className="mb-2">
      <img alt="..." className="max-w-md h-64 rounded-lg" src={require("../../assets/img/camp1.jpg")}/>
      </div>
      <div className="mb-2">
      <img alt="..." className="max-w-lg h-64 rounded-lg" src={require("../../assets/img/camp2.jpg")}/>
      </div>
      <div className="mb-2">
      <img alt="..." className="max-w-xs h-64 rounded-lg" src={require("../../assets/img/camp3.jpg")}/>
      </div>
      <div className="mb-2">
      <img alt="..." className="max-w-md h-64 rounded-lg" src={require("../../assets/img/camp4.jpg")}/>
      </div>
      <div className="mb-2">
      <img alt="..." className="max-w-md h-64 rounded-lg" src={require("../../assets/img/camp5.jpg")}/>
      </div>
    </div>
    </div>
  );
}

export default Gallery;