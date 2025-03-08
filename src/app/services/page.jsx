"use client";
import { BsArrowDownRight } from "react-icons/bs";
import React from "react";
import { easeIn, motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build fast, responsive, and user-friendly websites using modern technologies. From frontend to backend, I ensure seamless performance and a great user experience.",
    href: "",
  },
  {
    num: "02",
    title: "App Development",
    description:
      "I develop cross-platform and native apps with smooth performance, intuitive UI, and robust functionality, ensuring a seamless user experience on both mobile and web platforms",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX",
    description:
      "I design intuitive, user-friendly interfaces with a focus on usability and aesthetics, ensuring a seamless and engaging experience for users across web and mobile platforms",
    href: "",
  },
  {
    num: "04",
    title: "Digital Marketing",
    description:
      "I create data-driven digital marketing strategies, including SEO, social media, and paid ads, to boost brand visibility, drive traffic, and maximize conversions effectively.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((items, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group "
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-500">
                    {items.num}
                  </div>
                  <Link
                    href={items.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-hover transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primar text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-hover transition-all duration-500">
                  {items.title}
                </h2>
                <p className="text-white/60">{items.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
