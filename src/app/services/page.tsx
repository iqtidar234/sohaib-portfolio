"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Video Editing",
    description:
      "I edit and produce videos that captivate and engage audiences, ensuring seamless transitions, perfect pacing, and stunning visuals.",
    href: "",
  },
  {
    num: "02",
    title: "Promotional Video Production",
    description:
      "I craft promotional videos that effectively communicate your message, whether for products, services, or brands, with compelling visuals and sound design.",
    href: "",
  },
  {
    num: "03",
    title: "Social Media Video Content",
    description:
      "I develop short, impactful videos optimized for social media platforms like Instagram, TikTok, and Facebook, ensuring they resonate with the target audience.",
    href: "",
  },
  {
    num: "04",
    title: "Motion Graphics",
    description:
      "I create dynamic motion graphics that enhance your videos with engaging visual effects, perfect for explainer videos, advertisements, and presentations.",
    href: "",
  },
  {
    num: "05",
    title: "Cash Cow Video Production",
    description:
      "I specialize in producing cash cow videos designed to generate passive income through YouTube channels, combining attention-grabbing visuals with monetizable content strategies.",
    href: "",
  },
  {
    num: "06",
    title: "Logo Animation",
    description:
      "I bring logos to life with smooth, creative animations that leave a lasting impression and enhance brand identity across digital platforms.",
    href: "",
  },
  {
    num: "07",
    title: "Event and Corporate Video Production",
    description:
      "I produce high-quality videos for events, conferences, and corporate functions, capturing key moments and delivering a professional final product.",
    href: "",
  },
  {
    num: "08",
    title: "Training and Educational Videos",
    description:
      "I create instructional and educational videos tailored to your specific needs, making complex topics easy to understand and engaging.",
    href: "",
  },
  {
    num: "09",
    title: "Product Reviews and Unboxings",
    description:
      "I specialize in producing detailed and engaging product reviews and unboxing videos, showcasing features and benefits to your target audience.",
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
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-accent transition-all duration-500">
                  {service.num}
                </div>
                {/* <Link
                  href={service.href}
                  target="blank"
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link> */}
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/* description */}
              <p className="text-white/60 ">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
