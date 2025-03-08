"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFlutter } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I am a passionate web and app developer with expertise in creating seamless, user-friendly digital experiences. With a strong focus on performance and design, I build responsive websites, intuitive applications, and engaging user interfaces. My goal is to craft solutions that enhance user interaction and drive success.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tanvir Hasan",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 1601-593895",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "WhatsApp",
      fieldValue: "(+880) 1953-332460",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "tanvirmern@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bangla",
    },
  ],
};
const experience = {
  icon: "/resume/badge.svg",
  title: "My Experience",
  description:
    "I have experience in developing fast, responsive, and user-friendly websites using modern technologies. From frontend to backend, I build scalable and high-performance web solutions.",
  items: [
    {
      company: "Sobji Bari",
      position: "Web Developer & Founder",
      duration: "2024 - Present",
    },
    {
      company: "Center Police Hospital",
      position: "IT Engineer",
      duration: "2019 - 2020",
    },
    {
      company: "BPNC",
      position: "Freelance App Developer",
      duration: "Summer 2024",
    },
    {
      company: "Creative IT",
      position: "CAP Project Intern",
      duration: "6 Months",
    },
    {
      company: "Era International",
      position: "Freelance Web Developer",
      duration: "Spring 2024",
    },
  ],
};
const education = {
  icon: "/resume/cap.svg",
  title: "My Education",
  description:
    "I have experience in developing fast, responsive, and user-friendly websites using modern technologies. From frontend to backend, I build scalable and high-performance web solutions.",
  items: [
    {
      institution: "Creative IT",
      degree: "Frontend Web Development",
      duration: "2023",
    },
    {
      institution: "Udemy",
      degree: "App Developmet",
      duration: "2024",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2021-2022",
    },
    {
      institution: "BUBT",
      degree: "Bsc. in Computer Science",
      duration: "2019-2025",
    },
    {
      institution: "Savar Model College",
      degree: "HSC",
      duration: "2017-2019",
    },
    {
      institution: "Savar Adhar Chandra High School",
      degree: "SSC",
      duration: "2015-2017",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Proficient in HTML, CSS, JavaScript, React, Next.js,Node.js and Flutter. Skilled in building responsive web & android applications, optimizing performance, and ensuring seamless user experiences.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML-5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind Css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList>
            <TabsTrigger>Experience</TabsTrigger>
            <TabsTrigger>Education</TabsTrigger>
            <TabsTrigger>Skills</TabsTrigger>
            <TabsTrigger>About me</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
