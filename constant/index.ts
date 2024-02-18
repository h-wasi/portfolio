import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { HoverCardContent } from "@radix-ui/react-hover-card";
import exp from "constants";
import { complex } from "framer-motion";
import React from "react";

export const links = [
  { url: "", name: "LinkedIn" },
  { url: "https://twitter.com/h-wasi", name: "Twitter" },
  { url: "https://github.com/h-wasi", name: "Github" },
  { url: "https://discord.com/users/1157004264837754890", name: "Discord" },
];
export const sections = [
  { url: "#about", name: "About" },
  { url: "#skills", name: "Skills" },
  { url: "#projects", name: "Projects" },
  { url: "#contact", name: "Contact" },
];
export const info =
  "DIGITAL CRAFTSMAN, CRAFTING INNOVATIVE WEB EXPERIENCES WITH MERN";
export const name = "Wasi ";
export const pronouns = "(He/Him)";
export const overview =
  " a seasoned Fullstack Engineer, excels in diverse tech stacks and containerization. His expertise enables him to create robust, scalable systems and his proficiency in cloud technologies leads to unparalleled digital solutions. His tech prowess and creativity ignite innovation. Curious about his skillset?";

const skillIcons = [
  {
    url: "/NextJS-Dark.svg",
    name: "Next.js :",
    width: 50,
    description:
      "The powerhouse for React, crafting high-performance web applications that delight users and boost SEO.",
  },
  {
    url: "/JavaScript.svg",
    name: "JavaScript :",
    width: 40,
    description:
      "The heart of web development, crafting dynamic, interactive experiences that captivate users.",
  },
  {
    url: "/TypeScript.svg",
    name: "TypeScript :",
    width: 40,
    description:
      "Supercharge JavaScript with static types, enhancing code quality and developer productivity.",
  },
  {
    url: "/TailwindCSS-Dark.svg",
    name: "Tailwind CSS :",
    width: 50,
    description:
      "Rapidly prototype with utility-first CSS, allowing for custom UI tailored to your brand's aesthetic.",
  },
  {
    url: "/framer.svg",
    name: "Framer Motion :",
    width: 40,
    description:
      "Unleash creativity with Framer, a game-changer for interactive web applications, empowering designers to bring their vision to life.",
  },
  {
    url: "/shadcn.svg",
    name: "ShadcnUI :",
    width: 45,
    description:
      "Build accessible web apps with confidence, offering a robust component library for inclusive design.",
  },
  {
    url: "/node.svg",
    name: "Node.js :",
    width: 90,
    description:
      "Elevate JavaScript to the server-side, enabling scalable and efficient backend solutions.",
  },
  {
    url: "/mongodb.svg",
    name: "MongoDB :",
    width: 120,
    description:
      "Empower your applications with a flexible NoSQL database, providing a document-oriented storage solution for modern applications.",
  },
  {
    url: "/ExpressJS-Dark.svg",
    name: "Express.js :",
    width: 50,
    description:
      "Express.js: Streamline web application development with a minimalist web framework, offering a fast and unopinionated approach.",
  },
  {
    url: "/Prisma.svg",
    name: "Prisma :",
    width: 45,
    description:
      "Simplify database workflows with an open-source toolkit, including an ORM and database migrations, for a smooth development process.",
  },
  {
    url: "/Docker.svg",
    name: "Docker :",
    width: 50,
    description:
      "Containerize your applications, ensuring consistency across development, testing, and production environments.",
  },
  {
    url: "/Kubernetes.svg",
    name: "Kubernetes :",
    width: 50,
    description:
      "Orchestrate your containers, automating deployment, scaling, and operations for robust application management.",
  },
  {
    url: "/AWS-Dark.svg",
    name: "AWS :",
    width: 55,
    description:
      "Amazon Web Services: Leverage the cloud for scalable infrastructure, offering a suite of services to grow and innovate.",
  },
  {
    url: "/bright.svg",
    name: "BrightData :",
    width: 110,
    description:
      "Amplify your data collection efforts with a network of residential IPs, enhancing web scraping and data enrichment.",
  },
  {
    url: "/ppt.svg",
    name: "Pupeteer :",
    width: 40,
    description:
      "Puppeteer: A sneaky headless browser that takes control, capturing the essence of the web with ease!",
  },
  {
    url: "/Auth.svg",
    name: "NextAuth :",
    width: 60,
    description:
      "NextAuth: Secure your Next.js applications with authentication, supporting a variety of sign-in options and social logins.",
  },
  {
    url: "/clerk.avif",
    name: "Clerk :",
    width: 110,
    description:
      "Clerk: Manage users and authentication with ease, providing a secure and scalable solution for modern web applications.",
  },
  {
    url: "/cron.svg",
    name: "CronJobs :",
    width: 70,
    description:
      "CronJobs: Schedule tasks efficiently, ensuring regular data updates, backups, and reports run on time.",
  },
];
export const fskill = skillIcons.slice(0, 6);
export const bskill = skillIcons.slice(6, 10);
export const cskill = skillIcons.slice(10, 13);
export const wskill = skillIcons.slice(13, 15);
export const mskill = skillIcons.slice(15);
