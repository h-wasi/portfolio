import { SkillsMarque } from "./Marque";
import { bskill, cskill, fskill, mskill, wskill } from "@/constant";
// import { Tooltip } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/tooltip";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Image from "next/image";

function SkillComponent() {
  return (
    <div 
      className="xl:deep-gridd deep-gridm grid-skills gap-4 h-[120vh] max-xl:h-[270vh] py-4 px-6 duration-1000 bg-gradient-to-bl from-violet-800 from-10% via-indigo-900 via-40% to-violet-700 to-95% relative overflow-hidden text-white"
      id="skills"
    >
      <div className="absolute bg-black/10 backdrop-blur-xl w-screen h-[120vh] max-xl:h-[270vh] h bg-grid bg-cover bg-opacity-20"></div>
      <SkillsMarque />
      <div className="border frontend border-slate-600/10 shadow-lg shadow-black/20 ring-1 ring-black/15 bg-black/20 backdrop-blur-xl  rounded-xl relative z-20 overflow-hidden">
        <div className="relative -left-4 -top-3 flex">
          <div className="h-[3.4rem] w-[10rem] border border-gray-800/30 rounded-xl bg-gradient-to-r from-cyan-700 to-blue-700 skew-x-[-20deg] absolute"></div>
          <Badge Children={"FrontEnd"} />
        </div>
        <div className="w-full h-full flex items-center justify-center bg-grid">
          <div className="flex flex-wrap justify-around gap-6 items-center px-3">
            {fskill.map((skill) => {
              return <Card key={skill.name} skill={skill} />;
            })}
          </div>
        </div>
      </div>
      <div className="backend border border-slate-600/10 shadow-lg shadow-black/20 ring-1 ring-black/15 bg-black/20 backdrop-blur-xl rounded-xl relative z-20 bg-grid overflow-hidden">
        <div className="relative -left-4 -top-3 flex">
          <div className="h-[3.4rem] w-[10rem] border border-gray-800/30 rounded-xl bg-gradient-to-r from-cyan-700 to-blue-700 skew-x-[-20deg] absolute"></div>
          <Badge Children={"BackEnd"} />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-6 items-center px-3">
            {bskill.map((skill) => {
              return <Card key={skill.name} skill={skill} />;
            })}
          </div>
        </div>
      </div>
      <div className="cloud border border-slate-600/10 shadow-lg shadow-black/20 ring-1 ring-black/15 bg-black/20 backdrop-blur-xl rounded-xl relative z-10 bg-grid overflow-hidden">
        <div className="relative -left-4 -top-3 flex">
          <div className="h-[3.4rem] w-[8rem] border border-gray-800/30 rounded-xl bg-gradient-to-r from-cyan-700 to-blue-700 skew-x-[-20deg] absolute"></div>
          <Badge Children={"Cloud"} />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-6 items-center px-3">
            {cskill.map((skill) => {
              return <Card key={skill.name} skill={skill} />;
            })}
          </div>
        </div>
      </div>
      <div className="web-scraping border border-slate-600/10 shadow-lg shadow-black/20 ring-1 ring-black/15 bg-black/20 backdrop-blur-xl rounded-xl relative z-10 overflow-hidden">
        <div className="relative -left-4 -top-3 flex">
          <div className="h-[3.4rem] w-[12.7rem] border border-gray-800/30 rounded-xl bg-gradient-to-r from-cyan-700 to-blue-700 skew-x-[-20deg] absolute"></div>
          <Badge Children={"Web Scraping"} />
        </div>
        <div className="w-full h-full flex items-center justify-center bg-grid">
          <div className="flex flex-wrap justify-center gap-6 items-center px-3">
            {wskill.map((skill) => {
              return <Card key={skill.name} skill={skill} />;
            })}
          </div>
        </div>
      </div>
      <div className="Miscellaneous border border-slate-600/10 shadow-lg shadow-black/20 ring-1 ring-black/15 bg-black/20 backdrop-blur-xl rounded-xl relative z-10 overflow-hidden">
        <div className="relative -left-4 -top-3 flex">
          <div className="h-[3.4rem] w-[13.2rem] border border-gray-800/30 rounded-xl bg-gradient-to-r from-cyan-700 to-blue-700 skew-x-[-20deg] absolute"></div>
          <Badge Children={"Miscellaneous"} />
        </div>
        <div className="w-full h-full flex items-center justify-center bg-grid">
          <div className="flex flex-wrap justify-center gap-6 items-center px-3">
            {mskill.map((skill, i) => {
              return (
                <Tooltip
                  key={i}
                  content={skill.description}
                  className="p-3 bg-black/30 backdrop-blur-lg border border-black/20 shadow-md rounded-xl text-white"
                >
                  <div key={i}>
                    <div>
                      <Image
                        src={skill.url}
                        width={skill.width}
                        height={20}
                        alt={skill.name}
                      ></Image>
                    </div>
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SkillComponent;

function Card({
  skill,
}: {
  skill: {
    url: string;
    name: string;
    width: number;
    description: string;
  };
}) {
  return (
    <HoverCard key={skill.name}>
      <HoverCardTrigger asChild>
        <div>
          <Image
            src={skill.url}
            width={skill.width}
            height={20}
            alt={skill.name}
          ></Image>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-black/30 backdrop-blur-md">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{skill.name}</h4>
            <p className="text-md"> {skill.description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

function Badge({ Children }: { Children: string }) {
  return (
    <h1 className="absolute top-4 text-lg tracking-[.18rem] text-white left-10">
      {Children}
    </h1>
  );
}
