import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai"; 
import { GrProjects } from "react-icons/gr";


export default function Sidenav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      
      {nav ? (
        <div className="flex-col justify-center  items-center justify-content  mx-auto fixed w-full h-screen bg-white/90  z-20">
          <a onClick={handleNav}
            href="#hero"
            className="w-[50%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4"> Home </span>
          </a>
          <a onClick={handleNav}
            href="#work"
            className="w-[50%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4"> About Me </span>
          </a>
          <a onClick={handleNav}
            href="#projects"
            className="w-[50%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4"> Diving Expertise </span>
          </a>
          <a onClick={handleNav}
            href="#contact"
            className="w-[50%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4"> Contact </span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="justify-content  md:block hidden fixed top-[25%] z-10">
        <div className="justify-content flex flex-col">
          <a
            href="#hero"
            className="rounded-full  shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
