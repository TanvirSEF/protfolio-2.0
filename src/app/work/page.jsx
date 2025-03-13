"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { handler } from "tailwindcss-animate";
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Hekto E-commerce Website",
    description:
      "Hekto is a modern and stylish e-commerce website designed for online furniture and lifestyle product sales. The website features an elegant UI/UX with a clean layout, making the shopping experience seamless and visually appealing.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "ReactJs" },
      { name: "ReactJs" },
      { name: "API" },
      { name: "Redux" },
    ],
    image: "/work/thum-1.png",
    live: "https://hekt.netlify.app/",
    github: "https://github.com/TanvirSEF/hekto",
  },
  {
    num: "02",
    category: "frontend",
    title: "Orebi E-commerce Website",
    description:
      "Orebi is a modern and stylish e-commerce website designed for online Products and lifestyle product sales. The website features an elegant UI/UX with a clean layout, making the shopping experience seamless and visually appealing.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "ReactJs" },
      { name: "ReactJs" },
      { name: "API" },
      { name: "Redux" },
    ],
    image: "/work/thum-2.png",
    live: "https://vocal-speculoos-58b983.netlify.app/",
    github: "https://github.com/TanvirSEF/orebi",
  },
  {
    num: "03",
    category: "frontend",
    title: "Emprise–Travel & Tour Booking Website",
    description:
      "Emprise is a modern and intuitive travel booking website designed to help users explore and book exciting travel experiences worldwide. With a clean and visually appealing layout, this project provides an immersive user experience for travelers.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/work/thumb-4.png",
    live: "https://tanvirsef.github.io/Emprise/",
    github: "https://github.com/TanvirSEF/Emprise",
  },
  {
    num: "04",
    category: "frontend",
    title: "NewsPro – Modern News & Magazine Website",
    description:
      "NewsPro is a fully responsive and visually appealing news portal designed for delivering real-time news updates, trending stories, and category-based articles. This project provides a structured and engaging layout, ensuring a smooth reading experience for users.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/work/thumb-5.png",
    live: "https://tanvirsef.github.io/Newspaper/",
    github: "https://github.com/TanvirSEF/Newspaper",
  },
  {
    num: "05",
    category: "frontend",
    title: "Stellar Website Solutions for Startups | Finsweet",
    description:
      "Finsweet specializes in building high-quality, conversion-focused websites for early-stage startups. Our expert team provides strategy, wireframing, design, and development services to create stunning digital experiences. Explore our portfolio, read client testimonials, and get in touch to bring your vision to life!",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/work/thumb-6.png",
    live: "https://remarkable-sprite-d01388.netlify.app/",
    github: "https://github.com/TanvirSEF/FinSweet-Project",
  },
  {
    num: "06",
    category: "frontend",
    title: "Petroil - Leading Oil & Gas Industry Supplier",
    description:
      "Petroil has been a trusted name in the oil and gas industry since 1975, providing top-tier fuel distribution, refinery solutions, and industrial supply services. With a strong national presence, we specialize in modern refineries, fuel logistics, and industry partnerships. Explore our services, view our projects, and get in touch to learn more about our expertise.",
    stack: [{ name: "Html 5" }, { name: "Tailwind Css" }, { name: "Reactjs" }],
    image: "/work/thumb-7.png",
    live: "https://beautiful-melba-8bc9d7.netlify.app/",
    github: "https://github.com/TanvirSEF/petrol",
  },
  {
    num: "07",
    category: "frontend",
    title: "BWFC – Simplified Business Payments & Financial Management",
    description:
      "BWFC offers an all-in-one solution for managing business payments and financial transactions with ease. Designed for growing businesses, our platform ensures seamless invoicing, quick payment processing, and secure financial management. Join 32k+ businesses that trust BWFC to streamline their financial operations. Get started today!",
    stack: [{ name: "Html 5" }, { name: "Tailwind Css" }, { name: "Reactjs" }],
    image: "/work/thumb-8.png",
    live: "https://superlative-hotteok-b33b17.netlify.app/",
    github: "https://github.com/TanvirSEF/BWFC-",
  },
];

const Work = () => {
  const [project, SetProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    SetProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-hover transition-all duration-500 capitalize">
                {project.title} Project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="lg:flex grid grid-cols-2 gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-[14px] text-default">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex gap-4 items-center">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="cursor-pointer text-white text-3xl group-hover:text-hover" />
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="cursor-pointer text-white text-3xl group-hover:text-hover" />
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className=" absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="w-full h-full relative">
                        <Image
                          src={project.image}
                          fill
                          className=" object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-default hover:bg-hover text-primar text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
