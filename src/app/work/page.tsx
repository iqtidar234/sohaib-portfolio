"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: " product animation  ",
    title: "Project 1",
    description:
      "Product animation is a visual technique used to showcase a product's design, features, and functionality through motion. It allows viewers to see the product in action, often highlighting details that may not be easily visible in static images. This type of animation can demonstrate how the product works, how its parts fit together, or how it solves a particular problem. Product animations are commonly used in marketing, e-commerce, and product demonstrations to help potential customers understand the product's value and benefits in a more engaging and interactive way.",
    stack: [{ name: "Ae" }, { name: "Pr" }],
    image: "/assets/work/saltmine.webp",
    video: "/videos/jaymproductanimation.mp4",
    live: "https://www.behance.net/gallery/206657793/Revolutionizing-Dental-Care",
    github: "https://github.com/Uzair-Technology/saltmine-mobileTablet",
  },
  {
    num: "02",
    category: "social media video",
    title: "projects 2",
    description:
      "A social media video is a short, engaging video designed specifically for platforms like Instagram, Facebook, TikTok, and YouTube. These videos are usually tailored to capture attention quickly, with eye-catching visuals and clear messaging. They can be used for various purposes, such as promoting products, sharing tutorials, telling stories, or creating brand awareness. Social media videos are typically optimized for mobile viewing and often include captions, music, and quick transitions to keep viewers engaged. Their goal is to encourage interaction, sharing, and building connections with the audience.",
    stack: [{ name: "Ae" }, { name: "Pr" }],
    image: "/assets/work/marathon-web.png",
    video: "/videos/social-media-video.mp4",
    live: "https://www.behance.net/gallery/204914731/Showcase-Of-Restaurant-Website-Design",
    github: "https://github.com/iqtidar234/Event-Project",
  },
  {
    num: "03",
    category: "logo animation",
    title: "project 3",
    description:
      "Logo animation is the process of bringing a logo to life through motion and special effects. It adds movement, transitions, and visual flair to a static logo, making it more dynamic and engaging. Animated logos are often used in video intros, advertisements, websites, and social media to capture attention and leave a lasting impression. The animation can include elements like the logo appearing, transforming, or interacting with its environment in creative ways. Logo animation helps enhance brand identity by making the logo more memorable and visually appealing to audiences.",
    stack: [{ name: "Ae" }, { name: "Pr" }],
    video: "/videos/logo-animation.mp4",
    image: "/assets/work/prestige.png",
    live: "https://www.behance.net/gallery/205021653/Tutor-Match-UX-Case-Study",
    github: "https://github.com/Uzair-Technology/prestige-user-side",
  },
  {
    num: "04",
    category: "Icon Animation",
    title: "project 3",
    description:
      "Icon animation involves adding movement and effects to simple icons to make them more interactive and engaging. These animations can range from subtle transitions, like fading or sliding, to more complex movements, such as icons morphing or rotating. Icon animations are often used in websites, apps, or user interfaces to enhance user experience by providing visual feedback, guiding users, or drawing attention to key actions or features. Animated icons make interfaces feel more responsive and dynamic, helping to create a more engaging and intuitive experience for users.",
    stack: [{ name: "Ae" }, { name: "Pr" }],
    video: "/videos/icon-animation.mp4",
    image: "/assets/work/prestige.png",
    live: "https://www.behance.net/gallery/205021653/Tutor-Match-UX-Case-Study",
    github: "https://github.com/Uzair-Technology/prestige-user-side",
  },
  {
    num: "05",
    category: "Slide Show ",
    title: "project 3",
    description:
      "Slideshow videos may include background music, text, effects, or voiceovers to make the presentation more engaging. They are commonly used for events, promotions, tutorials, or memories. The simplicity of a slideshow video makes it a great option for summarizing key points or visually presenting a series of ideas in a clear and appealing way.",
    stack: [{ name: "Ae" }, { name: "Pr" }],
    video: "/videos/slide-show.mp4",
    image: "/assets/work/prestige.png",
    live: "https://www.behance.net/gallery/205021653/Tutor-Match-UX-Case-Study",
    github: "https://github.com/Uzair-Technology/prestige-user-side",
  },
  {
    num: "06",
    category: "Icon Animation",
    title: "project 3",
    description:
      "Motion graphics is a type of animation that combines graphic design and movement to create visually engaging content. It involves animating text, shapes, illustrations, and other visual elements to communicate ideas or tell a story. Unlike traditional animation, which focuses on character movements, motion graphics often highlight abstract elements, like logos, charts, or data, and are commonly used in explainer videos, advertisements, presentations, and social media. The purpose of motion graphics is to make information more dynamic and easier to understand while adding a creative and polished look to the content.",
    stack: [{ name: "Ae" }, { name: "Pr" }],
    video: "/videos/motion-graphic.mp4",
    image: "/assets/work/prestige.png",
    live: "https://www.behance.net/gallery/205021653/Tutor-Match-UX-Case-Study",
    github: "https://github.com/Uzair-Technology/prestige-user-side",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const videoRef = useRef<any>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 1.0; // Set volume to full
    }
  }, []);

  const handleSlideChange = (swiper: any) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, ease: "easeIn", duration: 0.4 },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px]flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>

              <ul className=" flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {/*remove the last comma  */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {/* <Link href={project.live} target="blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}

                {/* github project button */}
                {/* <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
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
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* iamge */}
                      <div className="relative w-full h-full">
                        {/* <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        /> */}
                        <video
                          ref={videoRef}
                          autoPlay
                          muted // Add this line to allow autoplay
                          loop
                          src={project.video}
                          className="absolute w-full h-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 botom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
