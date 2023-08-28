import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";
import { Parallax } from "react-scroll-parallax";
import VisibilitySensor from "react-visibility-sensor";

const ImageGallery = ({ slice }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setHasAnimated(true);
    }
  };
  return (
    <section className={"section-image-gallery " + slice.primary.class}>
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        {({ isVisible }) => {
          const isInView = isVisible || hasAnimated;
          return (
            <div
              className={
                isInView ? " container fadeIn enter " : "container fadeIn"
              }
            >
              {slice.variation !== "justImages" ? (
                <div className="text">
                  <div className="title">
                    <RichText render={slice.primary.title} />
                  </div>
                  <div className="description">
                    <RichText render={slice.primary.description} />
                  </div>
                  <div className="footer">
                    <RichText render={slice.primary.footer} />
                  </div>
                </div>
              ) : null}
              {slice.variation === "withMainImage" ? (
                <div className="image flex justify-center">
                  {/* <Parallax y={[20,-20]}> */}
                  <img
                    className={slice.primary.imageClass}
                    src={slice.primary.image.url}
                    alt={slice.primary.image.alt}
                  />
                  {/* </Parallax> */}
                </div>
              ) : null}
              {slice.variation === "withMainVideo" ? (
                <div className="image flex justify-center">
                  {/* <Parallax y={[20,-20]}> */}
                  <img
                    src="/images/iphone-trans.png"
                    alt="iPhone transparent"
                  />
                  <video
                    className="video-player"
                    poster={slice.primary.image.url}
                    autoPlay={true}
                    playsInline={true}
                    loop={true}
                    muted={true}
                    data-object-fit="cover"
                  >
                    <source
                      src={slice.primary.videoWEBM.url}
                      type="video/webm"
                    />
                    <source src={slice.primary.videoMP4.url} type="video/mp4" />
                  </video>
                  {/* </Parallax> */}
                </div>
              ) : null}
              <ul className="gallery-items">
                {slice?.items?.map((item, i) => (
                  <li
                    key={i}
                    className={
                      "gallery-item gallery-item-" +
                      slice.variation +
                      " " +
                      item.class
                    }
                    data-scroll
                    data-scroll-speed={item.scrollSpeed}
                  >
                    {slice.variation === "3ColumnGrid" ? (
                      <RichText render={item.itemTitle} />
                    ) : null}
                    {item.link.url !== undefined ? (
                      <div className="item-image">
                        <a
                          key={i}
                          href={Link.url(item.link)}
                          target={item.link.target}
                        >
                          <img src={item.image.url} alt={item.image.alt} />
                        </a>
                      </div>
                    ) : (
                      <div className="item-image">
                        <img src={item.image.url} alt={item.image.alt} />
                      </div>
                    )}
                    {item.imageText !== undefined &&
                    item.imageText.length > 0 ? (
                      <div
                        className="item-text"
                        data-scroll
                        data-scroll-speed="0.1"
                      >
                        <RichText render={item.imageText} />
                      </div>
                    ) : null}
                    {/* <RichText render={item.imageDescription}/>
                      <p>
                        <a className="gallery-link" href={Link.url(item.link)}>
                          <span>{item.linkLabel}</span>
                        </a>
                      </p> */}
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </VisibilitySensor>
    </section>
  );
};

export default ImageGallery;
