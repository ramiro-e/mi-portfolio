import React from "react";

const ExperienceResume = ({ dates, type, employer ,position }) => {

  return (
    <div className="mt-4 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div>
        <div className="flex align-center">
          <h2 className="text-lg">{employer}</h2>
          <h3 className="ml-2 mt-0.5 px-1 h-5 text-sm rounded-lg bg-slate-100 dark:bg-slate-600">{dates}</h3>
        </div>
        <div className="flex align-center">
          <h3 className="text-md opacity-50">{type}</h3>
          <h3 className="text-md ml-3">{position}</h3>
        </div>

      </div>
    </div>
  );
};

export default ExperienceResume;
