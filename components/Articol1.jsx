import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

export default function Articol1(props) {
  const { imageSrc, title, description } = props;
  return (
    <div className="p-4 m-4 border-2 border-gray-200 drop-shadow-2xl rounded-xl">
      <div className="">
        <Image src={imageSrc} className="rounded-md" alt="articol" />
      </div>
      <div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="font-sans text-md">{description}</p>
        <button className="rounded-md border-2 bg-red-600 text-white pl-2 pr-2 mt-2 hover:scale-110 transition-transform">
          Read more
        </button>
      </div>
    </div>
  );
}

Articol1.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
