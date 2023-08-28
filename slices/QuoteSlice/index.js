import React, { Fragment, useState } from "react";
import { RichText } from "prismic-reactjs";
import VisibilitySensor from "react-visibility-sensor";

const QuoteSlice = ({ slice }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setHasAnimated(true);
    }
  };
  return (
    <Fragment>
      <section className={`section-quote ` + slice.primary.class}>
        <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
          {({ isVisible }) => {
            const isInView = isVisible || hasAnimated;
            return (
              <div
                className={
                  isInView ? " container slideUp enter " : "container slideUp"
                }
              >
                <blockquote>
                  <RichText render={slice.primary.quotetext} />
                </blockquote>
                {slice.variation === "quoteReference" ? (
                  <cite>
                    <RichText render={slice.primary.reference} />
                  </cite>
                ) : null}
              </div>
            );
          }}
        </VisibilitySensor>
      </section>
    </Fragment>
  );
};

export default QuoteSlice;
