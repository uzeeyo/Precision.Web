import { NextPage } from "next";
import Link from "next/link";
import { MouseEventHandler, useEffect, useState } from "react";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  const iconSize = 25;

  const [mobileMenuHidden, setMobileMenuHidden] = useState(true);
  const toggleMenu: MouseEventHandler = (e) => {
    e.preventDefault();
    setMobileMenuHidden(!mobileMenuHidden);
  };

  useEffect(() => {
    window.matchMedia("");
  }, [mobileMenuHidden]);

  return (
    <>
      <svg
        onClick={toggleMenu}
        className="md:hidden fill-slate-400 w-10 h-10 ml-auto border-2 rounded-lg p-1 border-slate-400 cursor-pointer"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill-rule="evenodd"
            d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
          ></path>
        </g>
      </svg>

      <div
        className={`fixed top-0 left-0 translate-x-[-50rem] md:translate-x-0 w-screen h-screen md:w-auto md:h-auto md:relative md:bg-transparent md:ml-auto bg-slate-800 z-50 ${
          mobileMenuHidden ? "bg-opacity-0 " : "slide-right"
        }`}
      >
        <svg
          onClick={toggleMenu}
          className="absolute h-10 mt-8 mr-8 right-0 fill-slate-500 cursor-pointer md:hidden"
          fill="blue"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="5 5 14 14"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
            ></path>
          </g>
        </svg>

        <div className="flex flex-col md:flex-row gap-8 justify-center h-full items-center text-xl">
          {mobileMenuHidden || (
            <img className="w-24 h-24 md:hidden" src="/images/logo-small.png" />
          )}
          <Link
            className="transition ease-in duration-200 border-b-2 border-transparent hover:border-blue-300"
            href={"/services"}
          >
            Services
          </Link>
          <Link
            className="transition ease-in duration-200 border-b-2 border-transparent hover:border-blue-300"
            href={"/about"}
          >
            About
          </Link>
          <Link
            className="transition ease-in duration-200 border-b-2 border-transparent hover:border-blue-300"
            href={"/contact"}
          >
            Contact Us
          </Link>
          <Link
            className="transition ease-in duration-200 border-b-2 border-transparent hover:border-blue-300"
            href={"/login"}
          >
            Login
          </Link>
          <div className="flex flex-row gap-6 items-center">
            <svg
              className="fill-slate-200"
              height={iconSize}
              width={iconSize}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 169.063 169.063"
            >
              <g>
                <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752 c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407 c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752 c17.455,0,31.656,14.201,31.656,31.655V122.407z"></path>
                <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561 C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561 c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"></path>
                <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78 c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78 C135.661,29.421,132.821,28.251,129.921,28.251z"></path>
              </g>
            </svg>

            <svg
              className=" fill-slate-200 "
              height={iconSize}
              width={iconSize}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-337 273 123.5 256"
            >
              <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z"></path>
            </svg>

            <svg
              className="fill-slate-200"
              height={iconSize}
              width={iconSize}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-271 311.2 256 179.8"
            >
              <path d="M-59.1,311.2h-167.8c0,0-44.1,0-44.1,44.1v91.5c0,0,0,44.1,44.1,44.1h167.8c0,0,44.1,0,44.1-44.1v-91.5 C-15,355.3-15,311.2-59.1,311.2z M-177.1,450.3v-98.5l83.8,49.3L-177.1,450.3z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
