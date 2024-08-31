import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/hasnain-ahmed-1a9547283/?lipi=urn%3Ali%3Apage%3Ad_flagship3_notifications%3BIFZeIOfrSseLqc1G%2FVStdQ%3D%3D",
  },
  { icon: <AiFillInstagram />, path: "" },
];
const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a
            href={item.path}
            key={index}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
