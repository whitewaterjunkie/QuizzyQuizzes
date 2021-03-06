import React from "react";

function Question({ question }) {
  return (
    <div className="mb-10 text-sm md:text-md lg:text-lg xl:text-2xl text-[#293264] font-[700] font-[Inter]">
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
    </div>
  );
}

export default Question;
