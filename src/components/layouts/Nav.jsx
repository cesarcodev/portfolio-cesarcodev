import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { ToggleDarkMode } from "../ToggleDarkMode";


export const Nav = () => {
  let Links = [
    { name: "INICIO", key: "home" },
    { name: "SOBRE MI", key: "about" },
    { name: "POYECTOS", key: "projects " },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-sky-900 py-4 md:px-24 px-7">
        <div className="font-bold text-lg cursor-pointer flex items-center  text-white">
          <div className=" mr-1 ">
            <img src="/LogoC.png" width={"45px"} />
          </div>
          Cesarcodev
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
        >
          {open ? <BiX /> : <BiMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-6 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-0 transition-all duration-500 ease-in-out  bg-sky-900 ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:hidden block md:my-0 my-7"
            >
              <a className="text-white">{link.name}</a>
            </li>
          ))}

         <ToggleDarkMode/>


        </ul>
      </div>
    </div>
  );
};
