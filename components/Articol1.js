import React from "react";
import imagine1 from "./imagine1.jpg";
import Image from "next/image";

function Articol1(props) {
  return (
    <div className="p-4 m-4 border-2 border-gray-200 drop-shadow-2xl rounded-xl">
      <div className="">
        <Image src={props.imagine} className='rounded-md' />
      </div>
      <div>
        <h4 className="text-xl font-semibold">
          {props.title}
        </h4>
        <p className="font-sans text-md">
         {props.descriere}
        </p>
        <button className="rounded-md border-2 bg-gray-800 text-white pl-2 pr-2 mt-2 hover:scale-110 transition-transform">
          Read more
        </button>


      </div>
    </div>
  );
}

export default Articol1;
