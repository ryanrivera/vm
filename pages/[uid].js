import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";
import Layout from "./../components/Layout";

import { isIOS, isAndroid } from "react-device-detect";

const Page = (props) => {
  if (props.uid === "app") {
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.accelrobotics.valet";
    } else if (isIOS) {
      window.location.href =
        "https://apps.apple.com/us/app/valet-market/id1564002874";
    } else {
      // if(typeof window !== "undefined"){
      //   window.location.href = '/';
      // }
    }
  }
  return (
    <Layout menu={props.menu} notification={props.notification}>
      <SliceZone {...props} resolver={resolver} />
    </Layout>
  );
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  apiParams({ params }) {
    return {
      uid: params.uid,
    };
  },
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  formatPath: (prismicDocument) => {
    return {
      params: {
        uid: prismicDocument.uid,
      },
    };
  },
});

export default Page;
