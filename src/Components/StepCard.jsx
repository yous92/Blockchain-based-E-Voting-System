import React from "react";

const StepsCards = ({ step }) => {
  return (
    <div className="bg-black-900 bg-effect px-5 py-10 border rounded-xl hover:shadow-[rgba(255,255,255,.1)] text-center md:w-1/4 m-5 cursor-pointer hover:scale-105 transition-all duration-500 hover:shadow-2xl border-gray-600">
      <div className="text-2xl font-bold">{step.title}</div>
      <div className="text-sm mt-5 text-gray-500">{step.description}</div>
    </div>
  );
};

export default StepsCards;
