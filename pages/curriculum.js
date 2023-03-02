import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import ExperienceResume from "../components/ExperienceResume";
import EducationResume from "../components/EducationResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import TechnologiesCard from '../components/TechnologiesCard'

import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {/* {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )} */}
      {data.showCursor && <Cursor />}
      <div
        className={"container mx-auto mb-10"}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full bg-gray-50 dark:bg-slate-800 laptop:max-w-4xl p-5 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Proyectos</h1>

                {resume.projects.map(
                  ({ name, description, features, lessons }, index) => (
                    <ProjectResume
                      key={index}
                      index={index}
                      name={name}
                      description={description}
                      features={features}
                      lessons={lessons}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Tecnologías</h1>
                <div className="mt-5 w-full flex flex-wrap">
                  {resume.technologies.map((tech, index) => (
                      <div key={index}
                      className={`m-1 flex items-center p-2 rounded-lg bg-slate-100 dark:bg-slate-600`}
                    >
                      <img style={{width:"30px"}} className="pr-2" src={tech.image}></img>
                      <h2 className="text-lg leading-none">{tech.name}</h2>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experiencia</h1>

                {resume.experiences.map(
                  ({ dates, type, employer, position }, index) => (
                    <ExperienceResume
                      key={index}
                      dates={dates}
                      type={type}
                      employer={employer}
                      position={position}
                    ></ExperienceResume>
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Educación</h1>
                <div className="mt-5 grid grid-cols-1 laptop:grid-cols-2 gap-5">
                
                {resume.education.map(
                  ({ institution, image, degree, dates }, index) => (
                    <EducationResume
                    key={index}
                    institution={institution}
                    image={image}
                    degree={degree}
                    dates={dates}
                    ></EducationResume>
                    )
                  )}

                </div>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
