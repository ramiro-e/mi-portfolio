import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import { useTheme } from "next-themes";


const Footer = ({}) => {
  const { theme } = useTheme();

  return (
    <>
      <div className="my-5 laptop:mt-20 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold text-2xl">Contactame</h1>
          <div className="mt-4 flex">
            <button key={1} onClick={() => window.open("https://wa.me/+541158928151")} className={`tablet:text-base p-1 laptop:p-3 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
        theme === "dark"
          ? "hover:bg-slate-600 text-white"
          : "hover:bg-slate-100"
      } hover:scale-105 active:scale-100  tablet:first:ml-0 link`}>
              <img src={"/images/techlogos/whatsapp.png"} style={{height: "50px"}} className="pr-2"></img><div className="pt-1 text-xl">{"Whatsapp"}</div>
            </button>
            <button key={2} onClick={() => window.open("mailto:ramiroestevez96@gmail.com")} className={`tablet:text-base p-1 laptop:p-3 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
        theme === "dark"
          ? "hover:bg-slate-600 text-white"
          : "hover:bg-slate-100"
      } hover:scale-105 active:scale-100  tablet:first:ml-0 link`}>
              <img src={"/images/techlogos/gmail.png"} style={{height: "50px"}} className="pr-2"></img><div className="pt-1 text-xl">{"Email"}</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
