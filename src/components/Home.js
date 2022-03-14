import react from "react";
import Skills from "./subcomponents/skill";
import Profile from "./subcomponents/profile";
import Social_network from "./subcomponents/socialnetwork";
import Language from "./subcomponents/language";
import Strength from "./subcomponents/strength";
import Noticeable_experiences from "./subcomponents/noticeable_exprience";
import Education from "./subcomponents/education";
import Work_exprience from "./subcomponents/workexprience";
import Certificate from "./subcomponents/certificate";
import arrow from "../assets/image/arrow.svg";
import circle from "../assets/image/circle.svg";

export default function Home() {
  return (
    <main className=" w-screen h-screen bg-[lightyellow]  flex flex-col items-start px-10 text-[35px]">
      {datas.map(data => (
        <section className="flex flex-col items-start ">
          <h1 className="text-[blue]">{data.name}</h1>
          <div className="px-10 ">
            <data.func />
          </div>
        </section>
      ))}
    </main>
  );
}
const datas = [
  { name: "Language", func: Language },
  { name: "Noticeable Expriences", func: Noticeable_experiences },
];
