import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import MenuSvg from "../assets/svg/MenuSvg";
import { links } from "../config";
import { navigation } from "../constants";
import Button from "./Button";
import { HambugerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:bg-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link to="/">
        <a className="block w-[12rem] xl:mr-8" >
          <img
            src={brainwave}
            width={70}
            height={70}
            alt="BrainScan"
            className="pointer-events-none select-none"
          />
        </a>
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
      {navigation.map((item) => (
        item.external ? (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
              item.onlyMobile && "lg:hidden"
            } px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${
              item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
            } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
          >
            {item.title}
          </a>
        ) : (
          <Link
            key={item.id}
            to={item.url}
            onClick={handleClick}
            className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
              item.onlyMobile && "lg:hidden"
            } px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${
              item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
            } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
          >
            {item.title}
          </Link>
        )
      ))}
    </div>

          <HambugerMenu />
        </nav>

        <Button className="hidden lg:flex" href={links.sourceCode} external>
          Source Code
        </Button>

        <Button
          onClick={toggleNavigation}
          className="ml-auto lg:hidden"
          px="px-3"
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
