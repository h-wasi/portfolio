import React from "react";
import { SkillsMarque } from "./Marque";
import { bskill, cskill, fskill, mskill, wskill } from "@/constant";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";

function SkillComponent() {
  return (
    <div //
      className="xl:deep-gridd deep-gridm grid-skills gap-4 h-[120vh] max-xl:h-[205vh] py-4 px-6 duration-1000 bg-gradient-to-bl from-violet-800 from-10% via-indigo-900 via-40% to-violet-900 to-95% relative overflow-hidden text-white"
      id="skills"
    >
      <div className="absolute bg-black/10 backdrop-blur-xl w-screen h-screen"></div>
      <SkillsMarque />
      <div className="border frontend border-slate-600/10 shadow-lg shadow-black/20 ring-1 ring-black/15 bg-black/20 backdrop-blur-xl  rounded-xl relative z-20">
        <div className="w-full h-full flex items-center justify-center">
          {/* <h1>Frontend</h1> */}
          <div className="flex flex-wrap justify-around gap-6 items-center px-3">
            {fskill.map((skill) => {
              return <Card key={skill.name} skill={skill} />;
            })}
          </div>
        </div>
      </div>
      <div className="backend border border-slate-600/10 shadow-lg shadow-black/20 ring-1 ring-black/15 bg-black/20 backdrop-blur-xl rounded-xl relative z-20">
        <div className="w-full h-full flex items-center justify-center">
          {/* <h1>Backend</h1> */}
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {bskill.map((skill) => {
              return <Card key={skill.name} skill={skill} />;
            })}
          </div>
        </div>
      </div>
      <div className="cloud border border-slate-600/10 shadow-lg shadow-black/20 ring-1 ring-black/15 bg-black/20 backdrop-blur-xl rounded-xl relative z-10">
        <div className="w-full h-full flex items-center justify-center">
          {/* <h1>Cloud</h1> */}
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {cskill.map((skill) => {
              return <Card key={skill.name} skill={skill} />;
            })}
          </div>
        </div>
      </div>
      <div className="web-scraping border border-slate-600/10 shadow-lg shadow-black/20 ring-1 ring-black/15 bg-black/20 backdrop-blur-xl rounded-xl relative z-10">
        <div className="w-full h-full flex items-center justify-center">
          {/* <h1>Web Scraping</h1> */}
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {wskill.map((skill) => {
              return <Card key={skill.name} skill={skill} />;
            })}
          </div>
        </div>
      </div>
      <div className="Miscellaneous border border-slate-600/10 shadow-lg shadow-black/20 ring-1 ring-black/15 bg-black/20 backdrop-blur-xl rounded-xl relative z-10">
        <div className="w-full h-full flex items-center justify-center">
          {/* <h1>Miscellaneous</h1> */}
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {mskill.map((skill, i) => {
              return (
                <div key={i}>
                  <Card key={skill.name} skill={skill} />
                </div>
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
