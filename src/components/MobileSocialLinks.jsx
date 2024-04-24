/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

const MobileSocialLinks = () => {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: "www.linkedin.com/in/nagendranagendra",
      name: "LinkedIn",
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: "https://github.com/K-R-Nagendra-Reddy",
      name: "Github",
    },
    {
      id: 3,
      child: <HiOutlineMail size={30} />,
      href: "mailto: nagendrakothurureddivari@gmail.com",
      name: "Mail",
    },
    {
      id: 4,
      child: <BsFillPersonLinesFill size={30} />,
      href: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/Nagendra_Reddy_2024-03-26-090131.pdf",
      name: "Resume",
      download: true,
    },
  ];

  return (
    <div className="mb-[20px] mt-[30px] w-full lg:hidden">
      <p className="text-gray-400 font-bold mb-[20px]">FIND ME IN</p>
      <div className="flex gap-4">
        {links.map(({ id, child, href, download, name }) => (
          <a
            key={id}
            href={href}
            download={download}
            target="_blank"
            rel="noreferrer"
            data-tooltip-id={id}
            data-tooltip-content={name}
            data-tooltip-place="top"
          >
            <span className="w-16 h-16 bg-blue-900 bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md  hover:-translate-y-1 transition-all hover:text-rose-500 cursor-pointer duration-300;">
              {child}
            </span>
            <Tooltip id={id} color="#000" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileSocialLinks;
