import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor'

const FullWidthImage = ({ slice }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setHasAnimated(true);
    }
  };
  return (
    <Fragment>
      <section className={`section-full-width-image ` + slice.primary.class} style={slice.variation === 'fullWidthImageBackground' ? {backgroundImage: `url(${slice.primary.image.url})`,backgroundSize: `auto 14rem`} : null}>
        <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
            {({ isVisible }) => {
              const isInView = isVisible || hasAnimated;
              return (
                <div className={isInView ? 'container slideUp enter' : 'container slideUp'}>
                  { slice.variation !== 'fullWidthImageBackground' ?
                  <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
                  : null }
                </div>
            )
          }}
        </VisibilitySensor>
      </section>
    </Fragment>
  )
}

export default FullWidthImage;