/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { v4 as uuidv4 } from "uuid";


const Portfolio = () => {
  const portfolios = [
    {
      id: uuidv4(),
      src: "https://res.cloudinary.com/dtrfmlzrw/image/upload/v1713945910/nxttrendz_xlmnwd.png",
      demo: "https://nagendracart.ccbp.tech/",
      code: "https://github.com/K-R-Nagendra-Reddy/Nxt-Trendz---Cart-Features.git",
    },
    {
      id: uuidv4(),
      src: "https://res.cloudinary.com/dtrfmlzrw/image/upload/v1713945975/nxtwatch_j8in6i.png",
      demo: "https://nagnxtnag.ccbp.tech/",
      code: "https://github.com/K-R-Nagendra-Reddy/nxtwatch.git",
    },
    {
      id: uuidv4(),
      src: "https://res.cloudinary.com/dtrfmlzrw/image/upload/v1713946021/jobby_e2yfvj.png",
      demo: "https://nagjobnags.ccbp.tech/login",
      code: "https://github.com/K-R-Nagendra-Reddy/jobby-final.git",
    },
    {
      id: uuidv4(),
      src: "https://res.cloudinary.com/dtrfmlzrw/image/upload/v1713946084/emoji_ghd1lk.png",
      demo: "https://reactmojigame.ccbp.tech/",
      code: "https://github.com/K-R-Nagendra-Reddy/Emoji-GameFinal.git",
    },
    
    
    
  ];

  return (
    <div
      name="portfolio"
      className="md:min-h-screen flex flex-col justify-center bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 md:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                className="rounded-md duration-200 hover:scale-105 h-[180px]  w-full"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
