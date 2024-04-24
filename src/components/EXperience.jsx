import React from "react";
import { v4 as uuidv4 } from "uuid";



const EXperience = () => {
  const skills = [
    
    {
      id: uuidv4(),
      src: "https://res.cloudinary.com/dtrfmlzrw/image/upload/v1713942789/python_n6gyed.png",
      title: "Python",
      style: "shadow-sky-600",
    },
    {
      id: uuidv4(),
      src: "https://res.cloudinary.com/dtrfmlzrw/image/upload/v1713942353/html_fcruka.png",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: uuidv4(),
      src: "https://res.cloudinary.com/dtrfmlzrw/image/upload/v1713942422/css_ang2mc.png",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: uuidv4(),
      src: "https://res.cloudinary.com/dtrfmlzrw/image/upload/v1713942476/javascript_wmigf0.png",
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: uuidv4(),
      src: "https://res.cloudinary.com/dtrfmlzrw/image/upload/v1713942524/reactjs_yftdew.png",
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: uuidv4(),
      src: "https://res.cloudinary.com/dtrfmlzrw/image/upload/v1713942578/nodejs_eyaqjf.png",
      title: "Node Js",
      style: "shadow-green-500",
    },
    {
      id: uuidv4(),
      src: "https://res.cloudinary.com/dtrfmlzrw/image/upload/v1713942626/bootstrap_xiohdq.png",
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: uuidv4(),
      src: "https://res.cloudinary.com/dtrfmlzrw/image/upload/v1713942733/tailwind_bl8zys.png",
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: uuidv4(),
      src: "https://res.cloudinary.com/dtrfmlzrw/image/upload/v1713945668/git_rznpqa.png",
      title: "Github",
      style: "shadow-gray-400",
    },
    
  ];

  return (
    <div
      name="skills"
      className="pt-10 md:p-[45px] min-h-screen flex flex-col justify-center bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto my-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are technologies I'm confident with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4 sm:py-6 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EXperience;
