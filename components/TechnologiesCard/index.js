import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const TechnologiesCard = ({ name, image }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full flex items-center p-2 mob:p-4 rounded-lg cursor-pointer transition-all ease-out duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 link`}
    >
      <img style={{width:"50px"}} className="pr-4" src={image}></img>
      <h2 className="text-2xl leading-none">{name}</h2>
    </div>
  );
};

export default TechnologiesCard;
