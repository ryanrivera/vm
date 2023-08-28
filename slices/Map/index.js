import React, { Fragment, useState } from "react";
import { RichText } from "prismic-reactjs";
import VisibilitySensor from "react-visibility-sensor";

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

const Map = ({ slice }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setHasAnimated(true);
    }
  };
  return (
    <Fragment>
      <section className={`section-map ` + slice.primary.class}>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&v=weekly"
          async
        ></script>
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
                  <RichText render={slice.primary.title} />
                  <RichText render={slice.primary.description} />
                </div>
                <div className="video">
                  <video
                    className="video-player"
                    poster={slice.primary.videoThumbnail.url}
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
                </div>
                <div className="map">
                  <div className="map-container">
                    {/* <img src={slice.primary.mapImage.url} alt={slice.primary.mapImage.alt} /> */}
                    <iframe
                      src="https://snazzymaps.com/embed/366015"
                      width="100%"
                      height="100%"
                      style={{ border: "none" }}
                    ></iframe>
                  </div>
                </div>
                <div className="hours">
                  <RichText render={slice.primary.storeHours} />
                </div>
                <div id="map"></div>
              </div>
            );
          }}
        </VisibilitySensor>
      </section>
    </Fragment>
  );
};

export default Map;
