import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          <img src={social.image} style={{height: "20px"}} className="pr-2"></img><div className="pt-1">{social.title}</div>
        </Button>
      ))}
    </div>
  );
};

export default Socials;
