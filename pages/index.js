import { useRef } from "react";
import Header from "../components/Header";
import TechnologiesCard from "../components/TechnologiesCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const description = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current, description.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={"relative"}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-10 mt-10">
          <div className="mt-5 flex items-center justify-center">
            <img src="/images/foto-curriculum-cuadrada.jpg" className="rounded-full hidden laptop:block" style={{height:"300px"}}></img>
            <div className="laptop:ml-10">
            {(data.headerTaglineOne && data.headerTaglineOne != "" &&
              <h1
                ref={textOne}
                className="text-3xl tablet:text-4xl laptop:text-4xl laptopl:text-8xl p-1 tablet:p-2 text-bold  mob:w-full laptop:w-4/5"
              >
                {data.headerTaglineOne}
              </h1>
            )}
            {(data.headerTaglineTwo && data.headerTaglineTwo != "" &&
              <h1
                ref={textTwo}
                className="text-3xl tablet:text-4xl laptop:text-4xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineTwo}
              </h1>
            )}
            {(data.headerTaglineThree && data.headerTaglineThree != "" &&
              <h1
                ref={textThree}
                className="text-3xl tablet:text-4xl laptop:text-4xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineThree}
              </h1>
            )}
            {(data.headerTaglineFour && data.headerTaglineFour != "" &&
              <h1
                ref={textFour}
                className="text-3xl tablet:text-4xl laptop:text-4xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineFour}
              </h1>
            )}
            {(data.description && data.description != "" &&
              <h1
                ref={description}
                className="text-lg tablet:text-xl laptop:text-xl laptopl:text-xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.description}
              </h1>
            )}
            
            </div>
            
          </div>

          <Socials className="mt-2 laptop:mt-10" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="tablet:m-10 text-3xl text-bold">Proyectos.</h1>

          <div className="mt-5 tablet:m-10 grid grid-cols-1 tablet:grid-cols-2 gap-9">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                technologies={project.technologies}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-3xl text-bold">Tecnologias.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-2 laptop:grid-cols-5 gap-5">
            {data.technologies.map((service, index) => (
              <TechnologiesCard
                key={index}
                name={service.name}
                image={service.image}
              />
            ))}
          </div>
        </div>
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">Sobre mi.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-4/5 laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
