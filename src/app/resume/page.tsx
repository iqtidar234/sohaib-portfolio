"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

// about data
const about = {
  title: "About me",
  descripiton:
    " I'm Iqtidar Hussain, a frontend React.js and Next.js developer with 1 year of experience. I specialize in building responsive, dynamic web applications, transforming complex ideas into intuitive, user-friendly interfaces. My expertise includes collaborating on projects that require seamless functionality and engaging digital experiences.",
  info: [
    { fieldName: "Name", fieldValue: "Iqtidar Hussain" },
    { fieldName: "Phone", fieldValue: "(+92) 3149133164" },
    { fieldName: "Experience", fieldValue: "1 Years" },
    { fieldName: "Skype", fieldValue: "iqtidarhussain" },
    { fieldName: "Nationality", fieldValue: "Pakistani" },
    { fieldName: "Email", fieldValue: "iqtidar2345@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English, Urdu" },
  ],
};

// expereince data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "As a web developer with over a year of experience, I have worked at Uzair Technology, contributing to notable projects such as FarmnCho, Tippie-Doo, PrestigePlusRewards, and Redvok. Beyond hands-on development, I also train and mentor web development teams, ensuring that best practices are followed and fostering growth within the team. My focus is on creating seamless, user-centric web experiences that drive business success.",
  items: [
    {
      company: "Uzair Technology",
      position: "Frontend React.js Next.js Developer",
      duration: "2022 - Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "A blend of creative flair and a strong tech foundation, bridging aesthetics and functionality.",
  items: [
    {
      institution: "Al-Ilam Public School",
      degree: "Matric Education",
      duration: "Completed",
    },
    {
      institution: "Karwan Model College Kohat",
      degree: "FSC",
      duration: "Completed",
    },
    {
      institution: "Kohat University of Science and Technology",
      degree: "Bachelor of Computer Science",
      duration: "Currently in 7th Semester",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  descripton:
    "Expert in building responsive and intuitive web applications, with a strong command of tools like React.js and Next.js to create engaging and seamless digital experiences.",
  skillList: [
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaJs />, name: "JavaScript (ES6+)" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind.css" },
    { icon: <FaGithub />, name: "Github" },
    { icon: <TbBrandRedux />, name: "React/Redux" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
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
          defaultValue="eperience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-[16px]">
            <TabsTrigger value="eperience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* expreience */}
            <TabsContent value="eperience" className="w-full">
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
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] mb-4 text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot  */}
                            <span className=" w-[6px] h-[6px] rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot  */}
                            <span className=" w-[6px] h-[6px] rounded-full"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.descripton}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                {" "}
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.descripiton}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex  items-center justify-center xl:justify-start gap-4 "
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
