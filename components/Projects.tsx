import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

let projects = [
  {
    name: "Price Wise",
    description: "self-serve product and growth analytics",
    url: "https://price-wise-opal.vercel.app/",
    isDeployed: true,
    logoUrl: ["/data.svg", "/backend.svg"],
    previewUrl: "http://www.example1.com/preview.png",
    path: "/path/to/project1",
  },
  {
    name: "Price Wise",
    description: "self-serve product and growth analytics",
    url: "https://price-wise-opal.vercel.app/",
    isDeployed: false,
    logoUrl: ["/data.svg", "/backend.svg"],
    previewUrl: "http://www.example1.com/preview.png",
    path: "/path/to/project1",
  },
];

interface Props {
  name: string;
  description: string;
  isDeployed: boolean;
  logoUrl: string[];
  previewUrl: string;
  path: string;
}

function Projects() {
  return (
    <div className="grid-projects relative bg-white px-6" id="projects">
      <div className="sticky h-[23vh] top-0 border-b-2 border-black/50">
        <div className="bg-white flex justify-start gap-4 sm:text-7xl text-5xl font-bold items-center h-full">
          <span>⤵</span>
          <h1 className="">Projects</h1>
        </div>
      </div>
      <div className="projects-container py-6">
        {projects.map((p) => (
          <Project
            key={p.description}
            name={p.name} //
            description={p.description} //
            path={p.url}
            isDeployed={p.isDeployed}
            logoUrl={p.logoUrl}
            previewUrl={p.previewUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
function Project({
  name,
  description,
  isDeployed,
  logoUrl,
  previewUrl,
  path,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-state={isOpen ? "open" : "closed"}
      className="data-[state=open]:bg-black data-[state=open]:text-white data-[state=open]:fill-white py-6 px-4 border-b border-black flex justify-between items-center max-2xl:hidden"
    >
      <div className="flex items-center justify-center gap-3">
        <span className="flex gap-3">
          {logoUrl.length > 1 ? (
            logoUrl.map((l) => (
              <Image src={l} width={35} height={20} alt={l} key={l}></Image>
            ))
          ) : (
            <Image src={logoUrl[0]} width={35} height={20} alt="logo"></Image>
          )}
        </span>
        <p className="text-xl border-l-2 pl-3 border-black">{name}</p>
        <p className="max-md:hidden">{description}</p>
      </div>
      <Link
        target="_blank"
        href={path}
        className="border border-black rounded-xl w-[10.3rem] py-2 text-sm bg-white text-black flex items-center justify-center gap-2"
      >
        <Image src={"/backend.svg"} width={20} height={20} alt="logo"></Image>
        {isDeployed ? "Explore the Website" : "Explore the Code!"}
      </Link>
    </div>
  );
}
