import react from "react";
import Skills from "./skill";
import arrow from "../assets/image/arrow.svg";
import circle from "../assets/image/circle.svg";
import { social_network, Profile } from "./json/social";

export default function Home() {
  return (
    <div className="w-screen h-[297mm] bg-[black] flex justify-center">
      <main className="h-[297mm] w-[210mm] bg-[yellow] text-center border-2 border-[red] border-solid">
        <section className="w-full h-[150px]">
          <h2> Abolhasan Binandeh </h2> {/ * profile start * /}
          <div className="flex justify-start  ">
            <img src={arrow} alt="arrow" />
            <h1> Profile </h1>
          </div>
          <div className="flex justify-start  ">
            <div className="flex flex-row  flex-wrap">
              {Profile.map(item => (
                <div className="flex justify-start pl-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="5" cy="5" r="5" />
                  </svg>
                  {Object.keys(item).map(key => (
                    <div>
                      <span className="text-[red]"> {key}: </span>
                    </div>
                  ))}
                  {Object.values(item).map(value => (
                    <span className="text-[blue]"> {value} </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-row ">
          <div className="w-full h-full bg-[lightblue]">
            <div className="flex flex-row">
              <img src={arrow} alt="arrow" />
              <h2> Education </h2>
            </div>
            <div>
              <div className="flex flex-row">
                <img src={arrow} alt="arrow" />
                <h1 className="text-bold"> Social network </h1>
              </div>
              <div className="flex flex-col">
                {social_network.map(item => (
                  <div className="flex justify-start pl-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="5" cy="5" r="5" />
                    </svg>
                    {Object.keys(item).map(key => (
                      <div>
                        <span className="text-[red]"> {key}: </span>
                      </div>
                    ))}
                    {Object.values(item).map(value => (
                      <span className="text-[blue]"> {value} </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-[red]">
            <div>
              <div className="flex flex-row">
                <img src={arrow} alt="arrow" />
                <h2> Skills </h2>
              </div>
              <div>
                <Skills />
              </div>
            </div>
            <div className="flex flex-row">
              <img src={arrow} alt="arrow" />
              <h2> Certificate </h2>
            </div>
            <div className="flex flex-row">
              <img src={arrow} alt="arrow" />
              <h2> Work exprience </h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
