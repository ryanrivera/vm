import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import VisibilitySensor from "react-visibility-sensor";

const Locations = ({ slice }) => {
  const [location, setLocation] = useState(0);
  const selectLocation = (index) => {
    setLocation(index);
  };
  const [hasAnimated, setHasAnimated] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setHasAnimated(true);
    }
  };
  return (
    <section className={`text-slice relative ${slice.primary.class}`}>
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        {({ isVisible }) => {
          const isInView = isVisible || hasAnimated;
          return (
            <div
              className={
                isInView
                  ? " container md:flex md:gap-20 slideUp enter "
                  : "container md:flex md:gap-20 slideUp"
              }
            >
              <div className="locations md:flex md:gap-10">
                {slice?.items?.map((item, i) => (
                  <div
                    key={i}
                    className={`location md:overflow-hidden transition-all ${
                      location !== i ? `collapsed` : `expanded`
                    }`}
                  >
                    <div className="location-photo">
                      <img src={item.image.url} alt={item.image.alt} />
                    </div>
                    <div className="title relative">
                      <div className="name" onClick={() => selectLocation(i)}>
                        <RichText render={item.title} />
                      </div>
                      <address>
                        <RichText render={item.address} />
                      </address>
                      <div className="flex gap-2.5 mb-5">
                        {item.hub && (
                          <span className="pill inline-block rounded-full bg-valetYellow text-white py-1 px-3.5 text-sm">
                            Hub
                          </span>
                        )}
                        {item.satellite && (
                          <span className="pill inline-block rounded-full bg-valetYellow text-white py-1 px-3.5 text-sm">
                            Satellite
                          </span>
                        )}
                        {item.lsd && (
                          <span className="pill inline-block rounded-full bg-valetYellow text-white py-1 px-3.5 text-sm">
                            Delivery
                          </span>
                        )}
                        {item.comingSoon && (
                          <span className="pill inline-block rounded-full bg-valetPurple text-white py-1 px-3.5 text-sm">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="hidden">
                      <RichText render={item.description} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </VisibilitySensor>
    </section>
  );
};
export default Locations;
