import Document, { Html, Head, Main, NextScript } from "next/document";
import { createResolver } from "next-slicezone/resolver";
import { apiEndpoint } from "./../sm.json"; // import the endpoint name
const prismicRepoName = /([a-zA-Z0-9-]+)?(\.cdn)?\.prismic\.io/.exec(
  apiEndpoint
)[1]; //Regex to get repo ID

import { isIE, browserName } from "react-device-detect";

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    await createResolver();
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <script
            type="text/javascript"
            src="https://app.termly.io/embed.min.js"
            data-auto-block="on"
            data-website-uuid="d24354c0-6a77-4148-89b4-8924a7a2c128"
          ></script>
          <script
            async
            defer
            src={`//static.cdn.prismic.io/prismic.js?repo=${prismicRepoName}&new=true`}
          />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-199541717-1"
          ></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-327355066"
          ></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-MPNTND610E"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('js', new Date());

            gtag('config', 'UA-199541717-1');
            gtag('config', 'AW-327355066');
            gtag('config', 'G-MPNTND610E');

            gtag('consent', 'default', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });

            dataLayer.push({
              'event': 'default_consent'
            });
            `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WVV492V');
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
