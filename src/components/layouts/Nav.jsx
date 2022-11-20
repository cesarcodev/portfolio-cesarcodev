import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { ToggleDarkMode } from "../ToggleDarkMode";
import { Navs } from "../../../data/Links";

export const Nav = ({rutaActual, setRutaActual}) => {
 
  let [open, setOpen] = useState(false);

  const clickNav = (key) =>{
    setRutaActual(key);
    setOpen(false);
  }

  return (
    <div className="shadow-md w-full fixed  z-10 top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-sky-900 py-4 md:px-24 px-7">
        <div className="font-bold text-lg cursor-pointer flex items-center  text-white">
          <div className=" mr-1 ">
            <img src="/portfolio-cesarcodev/LogoC.png" width={"45px"} />
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
          className={`md:flex md:items-center text-center md:pb-0 pb-6 absolute md:static  md:z-auto z-[9] left-0 w-full md:w-auto md:pl-0 pl-0 transition-all duration-500 ease-in-out  bg-sky-900 ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Navs.map((link, index) => (
            <li
              key={index}
              className={`md:ml-8 text-xl md:hidden block md:my-0 my-7 `} 
            >
              <a className="text-white cursor-pointer"   onClick={() => clickNav(link.key)} >{link.name}</a>
            </li>
          ))}

         <ToggleDarkMode/>


        </ul>
      </div>
    </div>
  );
};
