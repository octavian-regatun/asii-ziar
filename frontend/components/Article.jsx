import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";
import image from "../components/thumbnail.jpg";

export default function Article(props) {
  const { title, description } = props;

  return (
    <div className="flex flex-col bg-gray-200 p-2 m-3 rounded-md border border-gray-400 shadow-md">
      <Image src={image} alt="" className="w-2/6 rounded-md" />
      <h1 className="text-2xl my-2 text-gray-900 font-semibold">{title}</h1>
      <span className="text-base text-gray-600">{description}</span>
      <div>
        <button className="text-lg bg-red-500 text-white rounded-sm px-5 py-1">
          Read Article
        </button>
      </div>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
