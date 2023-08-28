import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import VisibilitySensor from "react-visibility-sensor";

const TextSlice = ({ slice }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setHasAnimated(true);
    }
  };
  return (
    <section className={`text-slice ${slice.primary.class}`}>
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        {({ isVisible }) => {
          const isInView = isVisible || hasAnimated;
          return (
            <div
              className={
                isInView ? " container slideUp enter " : "container slideUp"
              }
            >
              <div className="text">
                <RichText render={slice.primary.text} />
                {slice.variation === "withButton" ? (
                  <a
                    className="btn"
                    href={slice.primary.link.url}
                    target="_blank"
                  >
                    {slice.primary.linkLabel}
                  </a>
                ) : null}
              </div>
              {slice.variation === "withImage" ? (
                <div className="image">
                  <img
                    src={slice.primary.image.url}
                    alt={slice.primary.image.alt}
                  />
                </div>
              ) : null}
            </div>
          );
        }}
      </VisibilitySensor>
    </section>
  );
};

export default TextSlice;
