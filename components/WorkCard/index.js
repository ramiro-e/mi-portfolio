import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";


const WorkCard = ({ img, name, description, technologies, onClick }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  let stopMovie = (e) => {
    e.target.pause();
  }
  
  let playMovie = (e) => {
    e.target.play();
  }

  return (
    <div
      className={`overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link rounded-3xl cursor-pointer hover:bg-slate-100 bg-slate-50 dark:hover:bg-slate-600 dark:bg-slate-800 dark:text-white hover:scale-105 transition-all ease-out duration-300`}
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden h-48 mob:h-auto"
        
      >
        <video
          alt={name}
          className="h-full w-full object-cover"
          style={{width: "640px"}}
          src={img}
          muted={true}
          controls={false}
          onMouseOver={playMovie}
          onMouseOut={stopMovie}          
          loop={true}
        ></video>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50 pb-3">
        {description ? description : "Description"}
      </h2>
      <div className="flex flex-wrap">
      {technologies.map(({name, image}, index) => (
          <div
            className={`flex items-center p-1 px-2 mob:p-2 m-1 rounded-lg bg-slate-200 dark:bg-slate-700 link`}
            key={index}
          >
            <img style={{width:"30px"}} className="pr-2" src={image}></img>
            <h2 className="text-md leading-none">{name}</h2>
          </div>
      ))}

      </div>
    </div>
  );
};

export default WorkCard;
