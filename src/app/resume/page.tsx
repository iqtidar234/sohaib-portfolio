"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

// about data
const about = {
  title: "About me",
  descripiton:
    "I'm  Sohaib Iqbal, a passionate video editor with 1.5 years of experience. I specialize in creating visually captivating and engaging video content that resonates with audiences. My expertise lies in blending creativity with technical precision, crafting high-quality videos that tell compelling stories. I thrive on transforming ideas into dynamic visuals, delivering emotionally impactful content that leaves a lasting impression. With a keen eye for detail and a commitment to innovation, I aim to push the boundaries of video editing, always striving for perfection in every project",
  info: [
    { fieldName: "Name", fieldValue: "Sohaib Iqbal" },
    { fieldName: "Phone", fieldValue: "(+92) 3159397089" },
    { fieldName: "Experience", fieldValue: "1.5+ Year" },
    { fieldName: "Skype", fieldValue: "sohaibiqbal_02" },
    { fieldName: "Nationality", fieldValue: "Pakistani" },
    { fieldName: "Email", fieldValue: "sohaib.khani2019@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English, Urdu ,Pashtu" },
  ],
};

// expereince data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "video editor at Uzair Technology 2023 / Present I specialized in creating promotional and social media videos that captivate and engage audiences. Using advanced tools like Adobe Premiere Pro and After Effects, I meticulously crafted high-quality video content, ensuring each project was visually stunning and effectively communicated its message. My role involved enhancing video quality with creative effects, smooth transitions, and compelling narratives to maximize viewer engagement. Additionally, as a team lead, I guided and mentored my team, fostering collaboration to achieve our content goals and deliver outstanding video projects that elevated the company's online presence.",
  items: [
    {
      company: "Uzair Technology",
      position: "Video Editor",
      duration: "2023 - Present",
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
      institution: "Madina Public School",
      degree: "Matric Education",
      duration: "Completed",
    },
    {
      institution: "Karwan Model College Kohat",
      degree: "FSC",
      duration: "Completed",
    },
    {
      institution: "Virtual University of Pakistan",
      degree: "Software Engineering",
      duration: "Currently in 1st Semester",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  descripton:
    "Expert in crafting visually captivating and emotionally impactful videos, with a strong command of tools like Adobe Premiere Pro and After Effects to produce engaging and seamless storytelling experiences.",
  skillList: [
    { icon: <SiAdobeaftereffects />, name: "After Effect" },
    { icon: <SiAdobepremierepro />, name: "Adove Premier" },
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
