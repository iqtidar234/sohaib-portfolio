import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/sohaibiqbal02/",
  },
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
          <a href={item.path} key={index} className={iconStyles} target="blank">
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
