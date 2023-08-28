import React from "react";
import { RichText, Link } from "prismic-reactjs";

const Footer = ({ menu = [] }) => {
  return (
    <footer className="site-footer text-white text-base">
      <div className="footer-primary container pt-10 pb-10 xl:pb-24 lg:flex">
        <div
          class="fb-like"
          data-share="true"
          data-width="450"
          data-show-faces="true"
        ></div>
        {/* <div className="xl:hidden powered-by flex md:flex-none md:flex-wrap gap-10 xl:gap-0 xl:w-1/4 md:mb-20 xl:mb-0">
          <div className="valet-logo w-3/12 xl:w-auto md:h-20 mb-10 md:mb-0">
            <img
              className="h-20"
              src="/images/SVG/g-valet-market-shield-white.svg"
              alt=""
            />
          </div>
          <div className="footer-nav-primary mb-10 grow">
            <Links menuLinks={menu.data?.menu_links} />
          </div>
        </div> */}

        <div className="footer-nav lg:w-2/3 lg:flex">
          <div className="valet-logo lg:w-3/12 xl:w-2/12 mb-10 lg:mb-5 grow">
            <a href="http://www.valetmarket.com/">
              <img
                className="h-32"
                src="/images/SVG/g-valet-market-shield-white.svg"
                alt="Valet Market logo"
              />
            </a>
          </div>
          <div className="footer-nav-primary mb-10 lg:w-4/12 xl:w-3/12 grow">
            <Links menuLinks={menu.data?.menu_links} />
          </div>
          <div className="footer-nav-secondary lg:w-4/12 xl:w-3/12 mb-10 grow">
            <ul className="footer-nav list-none m-0 p-0 text-lg">
              <li>
                <a
                  className="text-white hover:text-valetYellow"
                  href="/privacy"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-valetYellow"
                  href="/terms"
                  target="_blank"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:w-1/3 lg:flex lg:gap-5 xl:gap-14">
          <div className="social lg:w-4/12">
            <ul className="footer-social-nav list-none m-0 mb-10 p-0 text-lg flex xl:justify-end gap-2 xl:gap-5">
              <li className="">
                <a
                  className="social-icon flex text-white hover:text-valetYellow"
                  href="http://www.instagram.com/valetmarket"
                  target="_blank"
                >
                  <svg
                    className="h-10 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                  >
                    <g id="a" />
                    <g id="b">
                      <g id="c">
                        <g transform="matrix(2,0,0,2,0,0)">
                          <path d="M35,48H13c-7.17,0-13-5.83-13-13V13C0,5.83,5.83,0,13,0h22c7.17,0,13,5.83,13,13v22c0,7.17-5.83,13-13,13ZM13,2C6.93,2,2,6.93,2,13v22c0,6.07,4.93,11,11,11h22c6.07,0,11-4.93,11-11V13c0-6.07-4.93-11-11-11H13Z" />
                          <path d="M24,38c-6.62,0-12-5.38-12-12s5.38-12,12-12,12,5.38,12,12-5.38,12-12,12Zm0-22c-5.51,0-10,4.49-10,10s4.49,10,10,10,10-4.49,10-10-4.49-10-10-10Z" />
                          <path d="M24,34c-4.41,0-8-3.59-8-8s3.59-8,8-8,8,3.59,8,8-3.59,8-8,8Zm0-14c-3.31,0-6,2.69-6,6s2.69,6,6,6,6-2.69,6-6-2.69-6-6-6Z" />
                          <path d="M14.2,22H1c-.55,0-1-.45-1-1s.45-1,1-1H14.2c.55,0,1,.45,1,1s-.45,1-1,1Z" />
                          <path d="M47,22h-13.2c-.55,0-1-.45-1-1s.45-1,1-1h13.2c.55,0,1,.45,1,1s-.45,1-1,1Z" />
                          <path d="M39,14h-2c-1.65,0-3-1.35-3-3v-2c0-1.65,1.35-3,3-3h2c1.65,0,3,1.35,3,3v2c0,1.65-1.35,3-3,3Zm-2-6c-.55,0-1,.45-1,1v2c0,.55,.45,1,1,1h2c.55,0,1-.45,1-1v-2c0-.55-.45-1-1-1h-2Z" />
                          <path d="M9,12c-.55,0-1-.45-1-1V1.68c0-.55,.45-1,1-1s1,.45,1,1V11c0,.55-.45,1-1,1Z" />
                          <path d="M13,12c-.55,0-1-.45-1-1V1c0-.55,.45-1,1-1s1,.45,1,1V11c0,.55-.45,1-1,1Z" />
                          <path d="M17,12c-.55,0-1-.45-1-1V1c0-.55,.45-1,1-1s1,.45,1,1V11c0,.55-.45,1-1,1Z" />
                          <path d="M21,12c-.55,0-1-.45-1-1V1c0-.55,.45-1,1-1s1,.45,1,1V11c0,.55-.45,1-1,1Z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="social-icon flex text-white hover:text-valetYellow"
                  href="https://www.facebook.com/valetmarket"
                  target="_blank"
                >
                  <svg
                    className="h-10 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                  >
                    <g id="a" />
                    <g id="b">
                      <g id="c">
                        <g transform="matrix(2,0,0,2,0,0)">
                          <path d="M45,48h-12c-.55,0-1-.45-1-1V29c0-.55,.45-1,1-1h5.12l.76-6h-5.88c-.55,0-1-.45-1-1v-2.63c0-2.41,1.96-4.37,4.37-4.37h3.63v-6h-3.63c-5.71,0-10.37,4.66-10.37,10.37v2.63c0,.55-.45,1-1,1h-5v6h5c.55,0,1,.45,1,1v18c0,.55-.45,1-1,1H3c-1.65,0-3-1.35-3-3V3C0,1.35,1.35,0,3,0H45c1.65,0,3,1.35,3,3V45c0,1.65-1.35,3-3,3Zm-11-2h11c.55,0,1-.45,1-1V3c0-.55-.45-1-1-1H3c-.55,0-1,.45-1,1V45c0,.55,.45,1,1,1H24V30h-4c-1.1,0-2-.9-2-2v-6c0-1.1,.9-2,2-2h4v-1.63c0-6.81,5.56-12.36,12.37-12.37h3.63c1.1,0,2,.9,2,2v6c0,1.1-.9,2-2,2h-3.63c-1.31,0-2.37,1.06-2.37,2.37v1.63h4.87c.08,0,.17,0,.25,.02,1.1,.14,1.88,1.14,1.74,2.23l-.75,6c-.13,1-.98,1.75-1.98,1.75h-4.13v16Z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="download lg:w-8/12">
            <a
              className="btn btn-outline btn-white btn-med -translate-y-10"
              href="/app"
              target="_blank"
            >
              Download App
            </a>
          </div>
        </div>
      </div>
      <div className="footer-secondary text-sm">
        <div className="container py-5 md:flex gap-8">
          <div className="ar-logo mb-5 md:mb-0 md:w-6/12 self-center">
            <a
              className="logo"
              href="http://www.accelrobotics.com/"
              target="_blank"
            >
              <img
                className="h-6"
                src="/images/SVG/g-accel-robotics-logo.svg"
                alt="Accel Robotics logo"
              />
            </a>
          </div>
          <div className="md:w-6/12 md:text-right self-center">
            &copy; 2022 Valet Market. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const Links = ({ menuLinks }) => {
  if (menuLinks) {
    return (
      <ul className="footer-nav list-none m-0 p-0 text-lg">
        {menuLinks.map((menuLink, index) => (
          <li key={`menulink-${index}`}>
            <a
              className="text-white hover:text-valetYellow"
              href={Link.url(menuLink.link)}
            >
              {RichText.asText(menuLink.label)}
            </a>
          </li>
        ))}
      </ul>
    );
  }
  return null;
};

export default Footer;
