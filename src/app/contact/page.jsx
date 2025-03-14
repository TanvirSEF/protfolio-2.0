"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+880) 1601593895",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tanvirmern@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Mirpur-2, Dhaka",
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("meoaqnlw");
  if (state.succeeded) {
    return (
      <p className="text-6xl flex justify-center items-center mt-[190px]">
        Thanks for Message!
      </p>
    );
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/meoaqnlw"
              method="POST"
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-default">Let's Work Together</h3>
              <p className="text-white/60">
                We believe that great collaborations lead to amazing results.
                Whether you need a creative partner, technical expertise, or
                strategic guidance, we're here to help. Let's turn your vision
                into reality and build something incredible together.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  id="firstname"
                  type="firstname"
                  placeholder="Firstname"
                />
                <Input id="lastname" type="lastname" placeholder="Lastname" />
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Input id="phone" type="phone" placeholder="Phone Number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">App Development</SelectItem>
                    <SelectItem value="mst">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                id="message"
                name="message"
                className="h-[200px]"
                placeholder="Type Your Message here."
              ></Textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <Button
                type="submit"
                disabled={state.submitting}
                className="max-w-40"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-default rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
