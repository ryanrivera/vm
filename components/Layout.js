import React, { useRef } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Notification from "./Notification";
import ExitPreviewButton from "./ExitPreviewButton";
import { isIOS, isAndroid } from "react-device-detect";

const Layout = ({ children, menu, notification }) => {
  return (
    <>
      <Head>
        <title>Valet Market | An Autonomous Grocery + Convenience Store</title>
        <meta
          name="description"
          content="Valet Market is the future of retail and the contactless shopping experience. Our computer vision technology allows for fast and checkout free shopping."
        />
      </Head>
      <Notification menu={menu} notification={notification} />
      <Header menu={menu} />
      <main className={isAndroid || isIOS ? `mobile` : `desktop`}>
        {children}
      </main>
      <Footer menu={menu} />
      <ExitPreviewButton />
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(){ var s = document.createElement('script'); var h = document.querySelector('head') || document.body; s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'; s.async = true; s.onload = function(){ acsbJS.init({ statementLink : '', footerHtml : '', hideMobile : false, hideTrigger : false, disableBgProcess : false, language : 'en', position : 'left', leadColor : '#c79a3d', triggerColor : '#c79a3d', triggerRadius : '50%', triggerPositionX : 'right', triggerPositionY : 'bottom', triggerIcon : 'people', triggerSize : 'medium', triggerOffsetX : 20, triggerOffsetY : 20, mobile : { triggerSize : 'small', triggerPositionX : 'right', triggerPositionY : 'center', triggerOffsetX : 10, triggerOffsetY : 0, triggerRadius : '50%' } }); }; h.appendChild(s); })();
          `,
        }}
      /> */}
    </>
  );
};

export default Layout;
