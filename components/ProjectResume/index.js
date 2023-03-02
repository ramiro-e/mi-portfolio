import React, {useState} from "react";

const ProjectResume = ({ name, description, github ,features, lessons }) => {

  const [collapse, setCollapse] = useState(false)
  console.log(github)
  return (
    <div className="mt-2">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="text-xl mt-2 mb-1">{name}</h2>
            <button className="ml-3 p-1 pr-1.5 mt-0.5 bg-slate-100 bg-slate-100 dark:bg-black rounded-full flex h-6" onClick={()=>{window.open(github)}}><img src="images/techlogos/github.png" className="w-4 h-4 mr-1"></img> <div className="h-4 text-sm leading-tight">Github</div> </button>
          </div>
          <button className="h-7 rounded-lg p-1 px-2 transition-all ease-out duration-300 hover:bg-slate-100 dark:hover:bg-slate-600 " onClick={()=>{setCollapse(!collapse)}}>Ver Mas</button>

        </div>
        <p className="mb-2 opacity-50">{description}</p>
      </div>
      <div className={`w-full  transition-all ease-out duration-300 truncate ${collapse ? 'max-h-44' : 'max-h-0'}`}>
        <div>
          <h2 className="ml-1">Caracteristicas</h2>
          <div className="flex flex-wrap">
          {features.map(
            (feature , index) => (
              <small key={index}  className="m-0.5 p-1 px-2 rounded-lg bg-slate-100 dark:bg-slate-600">{feature}</small>
            )
          )}
          </div>
        </div>
        <div>
          <h2 className="ml-1">Aprendizaje</h2>
          <div className=" flex flex-wrap">
          {lessons.map(
          (lesson , index) => (
            <small key={index}  className="m-0.5 p-1 px-2 rounded-lg bg-slate-100 dark:bg-slate-600">{lesson}</small>
          )
          )}
          </div>
        </div>
      </div>
      {/* <div className="text-lg w-2/5">
        <h2>{dates}</h2>
        <h3 className="text-sm opacity-50">{type}</h3>
      </div>
      <div className="w-3/5">
        <h2 className="text-lg font-bold">{position}</h2>
        {bulletsLocal && bulletsLocal.length > 0 && (
          <ul className="list-disc">
            {bulletsLocal.map((bullet, index) => (
              <li key={index} className="text-sm my-1 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </div>
  );
};

export default ProjectResume;
