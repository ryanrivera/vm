import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";
import VisibilitySensor from "react-visibility-sensor";

const BannerSlice = ({ slice }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setHasAnimated(true);
    }
  };
  const router = useRouter();
  return (
    <Fragment>
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        {({ isVisible }) => {
          const isInView = isVisible || hasAnimated;
          const sectionClassName = "hero-tertiary";
          return (
            <section
              className={
                isInView ? "enter " + sectionClassName : sectionClassName
              }
            >
              <div className="container">
                <div className="text">
                  <a className="back" onClick={() => router.back()}>
                    <svg
                      className="h-14"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g transform="matrix(2,0,0,2,0,0)">
                        <path
                          d="M0.757 12L23.243 12"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12.743,1,1.1,11.249a1,1,0,0,0,0,1.5L12.743,23"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </a>
                  <RichText render={slice.primary.subTitle} />
                  <RichText render={slice.primary.title} />
                </div>
              </div>
            </section>
          );
        }}
      </VisibilitySensor>
    </Fragment>
  );
};

export default BannerSlice;
