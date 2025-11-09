import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "LDRP-ITR",
    location: "Gandhinagar, Gujarat",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Front-End Developer",
    location: "Chennai",
    description:
      "I worked as a front-end developer for 6 months at SparksFoundation. I also upskilled to the Front-End Development.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer, Shopware Developer",
    location: "Bopal, Ahmedabad",
    description:
      "I'm now a full-stack developer working at Zealous Commerce. My stack includes React, Next.js, Tailwind, PHP, MySQL and MongoDB. I'm open for full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Free Gift Products",
    description:
      "This plugin integrates the automatic addition of free products to customers' shopping carts based on the selected products.",
    tags: ["VueJs", "MySQL", "Symfony", "Twig"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Offer Banner",
    description:
      "You can create banners, showcasing within a specified date range, creating new pages which shows offer products, pair text with captivating images.",
    tags: ["VueJs", "MySQL", "Symfony", "Twig"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Automatic Invoice Generator",
    description:
      "This plugin automatically generates invoices in PDF format for customer orders, ensuring accurate billing and record-keeping.",
    tags: ["VueJs", "MySQL", "Symfony", "Twig"],
    imageUrl: "",
  },
  {
    title: "Real Time Chat App",
    description:
      "A real-time chat application that allows users to communicate instantly using Socket.io for seamless messaging.",
    tags: ["React", "MongoDB", "SockeIo", "NodeJs", "ExpressJs", "JWT"],
    imageUrl: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "MySQL",
  "Python",
  "BootStrap",
  "Framer Motion",
] as const;