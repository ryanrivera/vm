import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RichText, Link } from "prismic-reactjs";

const Notification = ({ notification = [] }) => {
  const [param, setParam] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router && router.query) {
      setParam(router.asPath.split("#")[1]);
    }
  }, [router]);

  const displayNotification = param === "notification";
  const cssClass = `notification ${
    notification.data !== undefined ? notification.data.class : ""
  } ${displayNotification && "expanded"}`;

  const toggleNotification = () => {
    setParam("notification");
  };

  if (notification.data !== undefined) {
    return (
      <div id="notification" className={cssClass}>
        <img className="notification-bg" src="/images/bg-confetti.jpg" />
        <div className="container relative">
          <div className="md:hidden info-text md:text-center pr-20">
            {notification.data && notification.data.textMobile}{" "}
            <a onClick={toggleNotification} href="#notification">
              Learn more
            </a>
            .
          </div>
          <div className="hidden md:block info-text md:text-center">
            {notification.data && notification.data.text}{" "}
            <a onClick={toggleNotification} href="#notification">
              Learn more
            </a>
            .
          </div>
          <img
            className="icon-last-step absolute -right-3 md:-right-24 lg:right-5 top-0 md:-top-20 w-24 md:w-32"
            src={notification.data.icon.url}
            alt={notification.data.icon.alt}
          />
          <div className="content max-w-2xl mx-auto">
            <a
              className="notification-close cursor-pointer"
              onClick={() => router.push("/")}
            >
              <svg
                className="inline-block h-2.5 align-middle"
                version="1.1"
                id="arrowBack"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 78 36"
              >
                <g id="a"></g>
                <g id="b">
                  <g id="c">
                    <g transform="matrix(2,0,0,2,0,0)">
                      <path d="M37.5,10.5h-36C0.7,10.5,0,9.8,0,9s0.7-1.5,1.5-1.5h36C38.3,7.5,39,8.2,39,9S38.3,10.5,37.5,10.5z" />
                      <path
                        d="M9,18c-0.4,0-0.8-0.1-1.1-0.4l-7.5-7.5c-0.6-0.6-0.6-1.5,0-2.1l7.5-7.5c0.6-0.6,1.5-0.6,2.1,0c0.6,0.6,0.6,1.5,0,2.1
				L3.6,9l6.4,6.4c0.6,0.6,0.6,1.5,0,2.1C9.8,17.9,9.4,18,9,18z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              Back to Valet Market
            </a>
            <RichText render={notification.data.title} />
            <div className="image-container text-center">
              <img
                className="inline-block"
                src={notification.data.image.url}
                alt={notification.data.image.alt}
              />
            </div>
            <RichText render={notification.data.content} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Notification;
