import React, { useState } from "react";
import { RichText } from "prismic-reactjs";
import VisibilitySensor from "react-visibility-sensor";

const FeaturedImage = ({ slice }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setHasAnimated(true);
    }
  };
  return (
    <section
      className={`section-featured-image ` + slice.primary.class}
      data-scroll-section
    >
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        {({ isVisible }) => {
          const isInView = isVisible || hasAnimated;
          return (
            <div
              className={
                isInView ? " container slideUp enter " : "container slideUp"
              }
            >
              {slice.variation === "waysToShopTitle" ? (
                <div className="image" data-scroll>
                  <div className="image-container overflow-hidden relative">
                    <img
                      className="main-image"
                      src={slice.primary.image.url}
                      alt={slice.primary.image.alt}
                      data-scroll
                      data-scroll-speed="2"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              <div
                className="text relative z-10"
                data-scroll
                data-scroll-speed="1"
              >
                <header className="text-header">
                  {slice.variation === "withSubTitle" ? (
                    <RichText render={slice.primary.subtitle} />
                  ) : null}
                  {slice.variation === "waysToShop" ||
                  slice.variation === "howToShop" ? (
                    <RichText render={slice.primary.number} />
                  ) : null}
                  <RichText render={slice.primary.title} />
                </header>
                <div className="text-body">
                  <RichText render={slice.primary.description} />
                  {slice.variation === "withSubTitle" ? (
                    <p>
                      <a className="btn" href={slice.primary.link.url}>
                        {slice.primary.linkLabel}
                      </a>
                    </p>
                  ) : null}
                  {slice.variation === "withButton" ||
                  slice.variation === "waysToShop" ||
                  slice.variation === "howToShop" ? (
                    <p>
                      <a href={slice.primary.link.url}>
                        {slice.primary.linkLabel}
                      </a>
                    </p>
                  ) : null}
                  {slice.variation === "withButtonVideoIngredient" ? (
                    <p>
                      <a className="btn" href={slice.primary.link.url}>
                        {slice.primary.linkLabel}
                      </a>
                    </p>
                  ) : null}
                </div>
              </div>
              {slice.variation === "withButtonVideoIngredient" ? (
                <div className="image video" data-scroll data-scroll-speed="4">
                  <div className="video-container">
                    <div className="video-player">
                      <video
                        poster={slice.primary.videoCover.url}
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
                        <source
                          src={slice.primary.videoMP4.url}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <img
                      className="ingredient"
                      src={slice.primary.ingredient.url}
                      alt={slice.primary.ingredient.alt}
                      data-scroll
                      data-scroll-speed="2"
                    />
                  </div>
                </div>
              ) : slice.variation !== "waysToShopTitle" ? (
                <div className="image" data-scroll data-scroll-speed="4">
                  <div className="image-container overflow-hidden relative">
                    {slice.variation !== "videoWithRepeatingImages" ? (
                      <img
                        className="main-image"
                        src={slice.primary.image.url}
                        alt={slice.primary.image.alt}
                        data-scroll
                        data-scroll-speed="2"
                      />
                    ) : null}
                    {slice.variation === "withIngredient" ? (
                      <div className="ingredient">
                        <img
                          src={slice.primary.ingredientImage.url}
                          alt={slice.primary.ingredientImage.alt}
                          data-scroll
                          data-scroll-speed="1"
                        />
                      </div>
                    ) : null}
                    {slice.variation === "videoWithRepeatingImages" ? (
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
                        <source
                          src={slice.primary.videoMP4.url}
                          type="video/mp4"
                        />
                      </video>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {slice.variation === "withRepeatingImages" ||
              slice.variation === "videoWithRepeatingImages" ? (
                <div className="items" data-scroll data-scroll-speed="4">
                  {slice?.items?.map((item, i) => (
                    <div className="item">
                      {
                        /* text */
                        item.image.url === undefined &&
                        item.link.url === undefined &&
                        item.text !== null
                          ? item.text
                          : null
                      }
                      {
                        /* text link */
                        item.image.url === undefined &&
                        item.link.url !== undefined &&
                        item.text !== null ? (
                          <div key={i} className="item-text text-link">
                            {item.text}
                          </div>
                        ) : null
                      }
                      {
                        /* image */
                        item.image.url !== undefined &&
                        item.link.url === undefined &&
                        item.text === null ? (
                          <div key={i} className="item-image image">
                            <img
                              key={i}
                              src={item.image.url}
                              alt={item.image.alt}
                            />
                          </div>
                        ) : null
                      }
                      {
                        /* image link */
                        item.image.url !== undefined &&
                        item.link.url !== undefined &&
                        item.text === null ? (
                          <div key={i} className="item-image image-link">
                            <a href={item.link.url}>
                              <img
                                key={i}
                                src={item.image.url}
                                alt={item.image.alt}
                              />
                            </a>
                          </div>
                        ) : null
                      }
                      {
                        /* image link with text*/
                        item.image.url !== undefined &&
                        item.link.url !== undefined &&
                        item.text !== null ? (
                          <div key={i} className="item-image image-with-text">
                            <a href={item.link.url}>
                              <img
                                key={i}
                                src={item.image.url}
                                alt={item.image.alt}
                              />
                            </a>
                            <div className="item-text">
                              <a href={item.link.url}>{item.text}</a>
                            </div>
                          </div>
                        ) : null
                      }
                      {
                        /* image with text*/
                        item.image.url !== undefined &&
                        item.link.url === undefined &&
                        item.text !== null ? (
                          <div key={i} className="item-image image-with-text">
                            <img
                              key={i}
                              src={item.image.url}
                              alt={item.image.alt}
                            />
                            <div className="item-text">{item.text}</div>
                          </div>
                        ) : null
                      }
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          );
        }}
      </VisibilitySensor>
    </section>
  );
};

export default FeaturedImage;
