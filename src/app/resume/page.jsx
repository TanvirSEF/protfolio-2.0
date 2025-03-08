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
          className={`flex flex-col xl:flex-row gap-[60px]`}
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-default">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-default"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              Experience
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              Experience
            </TabsContent>
            <TabsContent value="about" className="w-full">
              Experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
