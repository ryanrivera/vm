import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RichText, Link } from "prismic-reactjs";
import { isIOS, isAndroid } from "react-device-detect";

const Header = ({ menu = [] }) => {
  const [showMenu, setShowMenu] = useState("");

  function showMenuToggle(e) {
    e.preventDefault();
    showMenu === "" ? setShowMenu(" show-menu") : setShowMenu("");
  }

  return (
    <header
      className={`site-header p-5 lg:p-0 w-full z-40 bg-white` + showMenu}
    >
      <a
        className="logo inline-block relative w-1/2 lg:w-auto lg:absolute z-10 lg:left-5 lg:top-5"
        href="/"
      >
        <img
          className="w-20 lg:w-32"
          src="/images/SVG/g-valet-logo.svg"
          alt={RichText.asText(menu.data?.title)}
        />
      </a>
      <div className="dropdown-nav absolute lg:static top-0 bg-white lg:bg-transparent left-0 right-0 z-10 p-5 pb-10 lg:pb-5">
        <a
          className="lg:hidden inline-block absolute right-5 cursor-pointer"
          onClick={showMenuToggle}
        >
          <img
            className="h-10"
            src="/images/SVG/g-close.svg"
            alt="Close menu"
          />
        </a>
        <a className="lg:hidden inline-block mb-10" href="/">
          <img
            className="mobile-logo h-32"
            src="/images/SVG/g-valet-market-shield.svg"
            alt="Valet Market logo"
          />
        </a>
        <Links menuLinks={menu.data?.menu_links} />
        {isAndroid || isIOS ? (
          <a
            className="btn btn-download inline-block lg:hidden bg-black hover:bg-white hover:text-black text-xl md:text-lg lg:text-md text-white rounded-lg px-5 py-2 lg:absolute lg:right-10 lg:top-5"
            href="/app"
          >
            Download the App
          </a>
        ) : null}
      </div>
      <div
        onClick={showMenuToggle}
        className="overlay h-screen bg-black opacity-60 absolute top-0 left-0 right-0"
      ></div>
      <a
        onClick={showMenuToggle}
        className="dropdown-nav-toggle w-8 absolute right-5 top-5 lg:hidden"
      >
        <img src="/images/SVG/i-menu.svg" alt="Open menu" />
      </a>
    </header>
  );
};

const Links = ({ menuLinks }) => {
  const [param, setParam] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router && router.query) {
      // console.log(router);
      // console.log(router.asPath);
      setParam(router.asPath.split("#")[0]);
    }
  }, [router]);

  // console.log(param);
  // console.log(menuLinks);

  if (menuLinks) {
    return (
      <nav className="main-nav mt-7 mb-10 lg:mt-1 lg:mb-2">
        <ul className="lg:flex md:m-0 p-0 list-none text-xl lg:text-md lg:justify-center">
          {menuLinks.map((menuLink, index) => (
            <li
              key={`menulink-${index}`}
              className={
                `my-5 lg:my-0 md:mx-5` +
                (menuLink.class !== null ? ` ` + menuLink.class : ``) +
                (param === menuLink.link.url ? " selected" : "")
              }
            >
              <a
                className="text-black hover:text-valetYellow transition-all"
                href={Link.url(menuLink.link)}
              >
                {RichText.asText(menuLink.label)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  return null;
};

export default Header;
