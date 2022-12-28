import React from 'react';

function Gallery() {
  return (
   <div className=''>
    <h1 className='text-center text-red-600 mt-40'>Gallery</h1>
   <section class="overflow-hidden text-gray-700 mt-10">
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
           src={require("../../assets/img/camp1.jpg")}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={require("../../assets/img/camp2.jpg")}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={require("../../assets/img/camp3.jpg")}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={require("../../assets/img/camp4.jpg")}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={require("../../assets/img/camp5.jpg")}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
             src={require("../../assets/img/camp3.jpg")}/>
        </div>
      </div>
    </div>
  </div>
</section>
   </div>

  );
}

export default Gallery;