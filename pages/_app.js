import "../styles/app-base.css";
import "../styles/app-components.css";
import "../styles/app-utilities.css";
import React from "react";
import NextApp from "next/app";
import { Client } from "../prismic-configuration";
import { isIE, browserName } from "react-device-detect";

export default class MyApp extends NextApp {
  static async getInitialProps(appCtx) {
    const client = Client();
    const menu = (await client.getSingle("menu")) || {};
    const notification = (await client.getSingle("notification")) || {};
    return {
      props: {
        menu: menu,
        notification: notification,
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props;
    const showNotification = Object.keys(props.notification).length !== 0;
    return (
      <div
        id={pageProps.uid}
        className={showNotification ? "show-notification" : null}
      >
        {browserName === "IE" && (
          <div
            className="text-center p-2 border-b fixed bg-white w-full top-0 left-0 right-0"
            style={{ zIndex: 9999 }}
          >
            <p>
              Your browser is no longer supported. We recommend downloading{" "}
              <a href="https://www.google.com/chrome/">Googel Chrome</a> for the
              best possible experience. Thank you.
            </p>
          </div>
        )}
        <Component
          {...pageProps}
          menu={props.menu}
          notification={props.notification}
        />
      </div>
    );
  }
}
