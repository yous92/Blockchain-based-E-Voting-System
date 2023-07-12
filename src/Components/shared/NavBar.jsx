
import {  useState } from "react";

const NavBar = () => {
  const [activePage, setActivePage] = useState(0);
  const pages = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "How it works",
      href: "/voting",
    },
  ];

  const [menueActive, setActive] = useState(false);
  return (
    <div className="absolute w-full z-50" data-testid="navbar" >
      {/* Large screen menu  */}
      <div className="md:flex justify-between xl:px-28 lg:px-10 md:px-10 py-10 hidden ">
        <div className="-mt-8 -ml-4">
          <img
            src="/images/logo.gif"
            width={110}
            height="100"
            alt="exaview logo"
          ></img>
        </div>
        <div className="flex">
          {pages.map((elem, key) => (
            <a
              href={elem.href}
              key={key}
              className={`xl:ml-20 lg:ml-18 md:ml-10 pt-2 hover:text-light-green `}
              onClick={() => setActivePage(key)}
            >
              {elem.name}
             
            </a>
          ))}

          {/* <div className="ml-5 ">
            <a href="/login">
              <button className="ml-8 btn-green bg-black  border border-gray-200">Sign Up</button>
            </a>
          </div> */}
        </div>
      </div>

      {/* Phone menue */}
      <div
        className={`md:hidden justify-between px-5 py-5 flex ${
          menueActive ? "bg-[rgba(0,200,0,.05)]" : ""
        }`}
      >
        <div>
          <img
            src="/images/logo.gif"
            width={75}
            height="75"
            alt="exaview logo"
            className="-mt-3 -ml-2"
          ></img>
        </div>
        <div className="pt-4" onClick={() => setActive(!menueActive)}>
          <div className="h-[3px] w-8 bg-yellow-400 rounded mb-[6px]"></div>
          <div className="h-[3px] w-8 bg-yellow-400 rounded mb-[6px]"></div>
          <div className="h-[3.5px] w-8 bg-yellow-400 rounded"></div>
        </div>
      </div>
      {menueActive ? (
        <div className="block md:hidden bg-[rgba(0,0,0,.8)] pb-4 downMenu">
          {pages.map((elem, key) => (
            <a
              href={elem.href}
              key={key}
              className={`w-fit mx-auto pt-2 block ${
                activePage == key ? "text-light-green font-semibold" : ""
              }`}
              onClick={() => {
                setActivePage(key);
                setActive(false);
              }}
            >
              {elem.name}
              {activePage == key ? (
                <div className="py-1 w-fit px-1 mx-auto  bg-light-green rounded-lg"></div>
              ) : (
                <></>
              )}
            </a>
          ))}
          <div className="mx-auto mt-5 w-fit block text-xs">
            {/* <a href="/singup">
              <button className="btn-green text-black">Sign Up</button>
            </a> */}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
