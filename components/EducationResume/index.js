import React from "react";

const EducationResume = ({ institution, image, degree, dates }) => {

  return (
    <div
    className={`w-full flex items-center rounded-lg bg-slate-100 dark:bg-slate-600 `}
  >
    <img className=" h-16 rounded-l-lg" src={image}></img>
    <div className=" p-2 mob:p-3 ">
        <div className="flex mb-1.5">
            <h3 className="text-md leading-none">{dates}</h3>
            <h3 className="ml-2 text-md leading-none opacity-50">{institution}</h3>
            
        </div>
        <h2 className="text-lg leading-none">{degree}</h2>

    </div>

  </div>
  );
};

export default EducationResume;