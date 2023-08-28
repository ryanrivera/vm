import React, { Fragment, useState } from "react";
import { RichText } from "prismic-reactjs";
import VisibilitySensor from "react-visibility-sensor";

const Hero = ({ slice }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setHasAnimated(true);
    }
  };

  const [downloadVisible, setDownloadVisible] = useState(false);

  return (
    <Fragment>
      <section className={`hero ` + slice.primary.class}>
        <div className="container">
          <div className="hero-text relative">
            {slice.primary.title ? (
              <RichText render={slice.primary.title} />
            ) : (
              ""
            )}
            {slice.variation === "withAppDownload" ? (
              <RichText render={slice.primary.description} />
            ) : (
              ""
            )}
            {slice.variation === "withAppDownload" ? (
              <>
                <Links slice={slice} downloadVisible={downloadVisible} />
                <DownloadAppVisible
                  downloadVisible={downloadVisible}
                  setDownloadVisible={setDownloadVisible}
                />
              </>
            ) : (
              ""
            )}
            {slice.variation === "withAppDownloadNew" ? (
              <>
                <div className="hidden lg:block qr-code absolute right-10 xl:right-0 top-5 xl:top-16 w-32">
                  <img
                    className="w-32"
                    src={slice.primary.qrCodeImage.url}
                    alt="Valet Market app qr code"
                  />
                  <p>{slice.primary.qrCodeLabel}</p>
                </div>
                <div className="lg:hidden">
                  <a className="btn" href={slice.primary.link.url}>
                    {slice.primary.linkLabel}
                  </a>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        {slice.variation === "videoHero" ? (
          <div className="video sticky top-24">
            <video
              className="video-player"
              poster={slice.primary.videoThumbnail.url}
              autoPlay={true}
              playsInline={true}
              loop={true}
              muted={true}
              data-object-fit="cover"
            >
              <source src={slice.primary.videoWEBM.url} type="video/webm" />
              <source src={slice.primary.videoMP4.url} type="video/mp4" />
            </video>
          </div>
        ) : null}
      </section>
    </Fragment>
  );
};

const Links = ({ slice, downloadVisible }) => {
  return (
    <div className="h-12">
      <ul
        className={`links list-none pl-0 flex gap-5 ${
          downloadVisible ? `` : `fix-buttons newFadeIn`
        }`}
      >
        {slice?.items?.map((item, i) => (
          <li key={i} className="link my-0">
            <a href={item.link.url} target="_blank">
              <img
                src={item.image.url}
                alt={item.image.alt}
                className="app-button h-12"
              />
              <img
                src={item.icon.url}
                alt={item.icon.alt}
                className="app-icon h-6"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DownloadAppVisible = ({ downloadVisible, setDownloadVisible }) => {
  function onChange(visible) {
    visible ? setDownloadVisible(true) : setDownloadVisible(false);
  }

  return (
    <VisibilitySensor onChange={onChange} partialVisibility>
      <div className="opacity-0 h-1">.</div>
    </VisibilitySensor>
  );
};

export default Hero;
