import React, { Fragment, useState } from "react";
import { RichText } from "prismic-reactjs";
import VisibilitySensor from "react-visibility-sensor";

const BannerSlice = ({ slice }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setHasAnimated(true);
    }
  };
  return (
    <Fragment>
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        {({ isVisible }) => {
          const isInView = isVisible || hasAnimated;
          const sectionClassName = `hero-sub fadeIn ` + slice.primary.class;
          return (
            <section
              className={
                isInView ? "enter " + sectionClassName : sectionClassName
              }
              style={{
                backgroundImage: `url(${slice.primary.background.url})`,
              }}
            >
              <div className="container md:flex">
                <div className="text md:w-1/2 lg:w-7/12 py-10 md:pt-14 md:pb-36 lg:pb-72">
                  <RichText render={slice.primary.title} />
                  <RichText render={slice.primary.description} />
                </div>
                <div className="md:w-1/2 lg:w-5/12 xl:self-end md:grid">
                  <img
                    className="md:w-9/12 md:justify-self-end"
                    src={slice.primary.image.url}
                    alt={slice.primary.image.alt}
                  />
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
