import React from "react";

function ProCard(props) {
  return (
    <>
      <div>
        <a
          href={props.weblink}
          className="text-xs border-p cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={props.image}
            alt={props.alts}
            className="bg-gray-200 py-1 px-1 img-box transform hover:scale-105 ease-out duration-700 mb-1"
          />
          {props.title}
        </a>
        <div className="mb-4 mt-4 ">
          <a
            href={props.button}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs view_code"
          >
            View Code
          </a>
        </div>
      </div>
    </>
  );
}

export default ProCard;
