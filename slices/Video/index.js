import React, { useEffect, useState, useRef } from "react";

const Video = ({ slice }) => {
  const myVideo = useRef(null);
  const [played, setPlayed] = useState(false);
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(slice.primary.muted);

  const handleToggleStartPlay = () => {
    setPlay(false);
    setPlayed(true);
    myVideo.current.play();
  };

  const handleTogglePlay = () => {
    setPlay(!play);
    setPlayed(true);

    if (play) {
      myVideo.current.play();
    } else {
      myVideo.current.pause();
    }
  };

  const handleToggleMute = () => {
    setMute(!mute);
  };

  return (
    <section className={`section-video ` + slice.primary.class}>
      <div className="container">
        <div className="video-container relative">
          <div className="video">
            <video
              id="video"
              ref={myVideo}
              className="video-player"
              poster={slice.primary.videoThumbnail.url}
              autoPlay={slice.primary.autoPlay}
              playsInline={true}
              loop={true}
              muted={mute}
              data-object-fit="cover"
            >
              {/* <source src={slice.primary.videoWEBM.url} type="video/webm" /> */}
              <source src={slice.primary.videoMP4.url} type="video/mp4" />
            </video>
            {!played && !slice.primary.autoPlay ? (
              <div className="bg-valetBlack opacity-20 absolute top-0 bottom-0 left-0 right-0 w-full h-full"></div>
            ) : null}
            {!played && !slice.primary.autoPlay ? (
              <button
                className="video-play-icon absolute top-1/2 left-1/2"
                onClick={handleToggleStartPlay}
              >
                <svg
                  className="h-20"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 83.3 88"
                >
                  <g id="a"></g>
                  <g id="b">
                    <g id="c">
                      <g transform="matrix(2,0,0,2,0,0)">
                        <path
                          class="st0"
                          d="M4.5,44C2,44,0,42,0,39.5v-35C0,3.8,0.2,3,0.5,2.4c1.2-2.2,3.9-3,6.1-1.8L39.3,18c0.8,0.4,1.4,1.1,1.8,1.8
				c1.2,2.2,0.3,4.9-1.8,6.1L6.6,43.5C6,43.8,5.2,44,4.5,44z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            ) : null}
            {played && slice.primary.controls ? (
              <div className="video-controls">
                <button className="video-play" onClick={handleTogglePlay}>
                  {play ? (
                    <svg
                      className="h-5"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 83.3 88"
                    >
                      <g id="a"></g>
                      <g id="b">
                        <g id="c">
                          <g transform="matrix(2,0,0,2,0,0)">
                            <path
                              d="M4.5,44C2,44,0,42,0,39.5v-35C0,3.8,0.2,3,0.5,2.4c1.2-2.2,3.9-3,6.1-1.8L39.3,18c0.8,0.4,1.4,1.1,1.8,1.8
      c1.2,2.2,0.3,4.9-1.8,6.1L6.6,43.5C6,43.8,5.2,44,4.5,44z M4.5,3C4,3,3.5,3.3,3.2,3.8C3.1,4,3,4.3,3,4.5v35C3,40.3,3.7,41,4.5,41
      c0.2,0,0.5-0.1,0.7-0.2l32.7-17.5c0.7-0.4,1-1.3,0.6-2c-0.1-0.3-0.3-0.5-0.6-0.6L5.2,3.2C5,3.1,4.7,3,4.5,3z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  ) : (
                    <svg
                      className="h-5"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 60 72"
                    >
                      <g id="a"></g>
                      <g id="b">
                        <g id="c">
                          <g transform="matrix(2,0,0,2,0,0)">
                            <path
                              d="M7.5,36h-3C2,36,0,34,0,31.5v-27C0,2,2,0,4.5,0h3C10,0,12,2,12,4.5v27C12,34,10,36,7.5,36z M4.5,3C3.7,3,3,3.7,3,4.5v27
				C3,32.3,3.7,33,4.5,33h3C8.3,33,9,32.3,9,31.5v-27C9,3.7,8.3,3,7.5,3H4.5z"
                            />
                            <path
                              d="M25.5,36h-3C20,36,18,34,18,31.5v-27C18,2,20,0,22.5,0h3C28,0,30,2,30,4.5v27C30,34,28,36,25.5,36z M22.5,3
				C21.7,3,21,3.7,21,4.5v27c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5v-27C27,3.7,26.3,3,25.5,3H22.5z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  )}
                </button>
                <button className="video-mute" onClick={handleToggleMute}>
                  {mute ? (
                    <svg
                      className="h-5"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 96 66"
                    >
                      <g id="a"></g>
                      <g id="b">
                        <g id="c">
                          <g transform="matrix(2,0,0,2,0,0)">
                            <path
                              d="M25.5,33c-1,0-1.9-0.3-2.6-0.9L10.1,24H4.5C2,24,0,22,0,19.5v-6C0,11,2,9,4.5,9h5.6l12.8-8.1c1.4-1,3.1-1.1,4.7-0.4l0,0
      C29,1.3,30,2.8,30,4.5v24c0,1-0.3,1.9-0.9,2.7c-0.7,1-1.8,1.6-3,1.8C25.9,33,25.7,33,25.5,33z M4.5,12C3.7,12,3,12.7,3,13.5v6
      C3,20.3,3.7,21,4.5,21h6c0.3,0,0.6,0.1,0.8,0.2l13.2,8.4c0,0,0.1,0,0.1,0.1c0.3,0.2,0.7,0.3,1.1,0.3c0.4-0.1,0.8-0.3,1-0.6
      c0.2-0.3,0.3-0.6,0.3-0.9v-24c0-0.6-0.3-1.1-0.8-1.3c-0.5-0.3-1.1-0.2-1.6,0.1c0,0-0.1,0-0.1,0.1l-13.2,8.4
      c-0.2,0.1-0.5,0.2-0.8,0.2H4.5z"
                            />
                            <path d="M10.5,24C9.7,24,9,23.3,9,22.5v-12C9,9.7,9.7,9,10.5,9S12,9.7,12,10.5v12C12,23.3,11.3,24,10.5,24z" />
                            <path
                              d="M36,23.3c-0.4,0-0.8-0.1-1.1-0.4c-0.6-0.6-0.6-1.5,0-2.1l10.5-10.5c0.6-0.6,1.5-0.6,2.1,0c0.6,0.6,0.6,1.5,0,2.1
      L37.1,22.8C36.8,23.1,36.4,23.3,36,23.3z"
                            />
                            <path
                              d="M46.5,23.3c-0.4,0-0.8-0.1-1.1-0.4L34.9,12.3c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l10.5,10.5
      c0.6,0.6,0.6,1.5,0,2.1C47.3,23.1,46.9,23.3,46.5,23.3z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  ) : (
                    <svg
                      className="h-5"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 89.9 66"
                    >
                      <g id="a"></g>
                      <g id="b">
                        <g id="c">
                          <g transform="matrix(2,0,0,2,0,0)">
                            <path
                              d="M25.5,33c-1,0-1.9-0.3-2.6-0.9L10.1,24H4.5C2,24,0,22,0,19.5v-6C0,11,2,9,4.5,9h5.6l12.8-8.1c1.4-1,3.1-1.1,4.7-0.4l0,0
				C29,1.3,30,2.8,30,4.5v24c0,1-0.3,1.9-0.9,2.7c-0.7,1-1.8,1.6-3,1.8C25.9,33,25.7,33,25.5,33L25.5,33z M4.5,12
				C3.7,12,3,12.7,3,13.5v6C3,20.3,3.7,21,4.5,21h6c0.3,0,0.6,0.1,0.8,0.2l13.2,8.4c0,0,0.1,0,0.1,0.1c0.3,0.2,0.7,0.3,1.1,0.3
				c0.4-0.1,0.8-0.3,1-0.6c0.2-0.3,0.3-0.6,0.3-0.9v-24c0-0.6-0.3-1.1-0.8-1.3c-0.5-0.3-1.1-0.2-1.6,0.1c0,0-0.1,0-0.1,0.1
				l-13.2,8.4c-0.2,0.1-0.5,0.2-0.8,0.2L4.5,12L4.5,12z"
                            />
                            <path
                              d="M41.4,25.5c-0.3,0-0.6-0.1-0.8-0.2c-0.7-0.5-0.9-1.4-0.5-2.1c2.4-3.8,2.4-8.8,0-12.6c-0.5-0.7-0.2-1.6,0.5-2.1
				s1.6-0.2,2.1,0.5c3.1,4.8,3.1,11,0,15.8C42.4,25.3,41.9,25.5,41.4,25.5L41.4,25.5z"
                            />
                            <path
                              d="M35.6,22.9c-0.3,0-0.7-0.1-1-0.3c-0.6-0.5-0.7-1.5-0.2-2.1c1.6-2,1.6-4.9,0-6.9c-0.5-0.6-0.4-1.6,0.2-2.1
				s1.6-0.4,2.1,0.2c2.5,3.1,2.5,7.6,0,10.7C36.5,22.7,36,22.9,35.6,22.9L35.6,22.9z"
                            />
                            <path d="M10.5,24C9.7,24,9,23.3,9,22.5v-12C9,9.7,9.7,9,10.5,9S12,9.7,12,10.5v12C12,23.3,11.3,24,10.5,24z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  )}
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
