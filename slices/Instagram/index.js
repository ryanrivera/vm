import React from "react";
import { RichText } from "prismic-reactjs";
import InstagramFeed from "react-ig-feed";
//import 'react-ig-feed/dist/index.css'
// https://cming0721.medium.com/instagram-feeds-with-instagram-api-part-2-basic-display-api-with-react-f0c6dfcc576c

const Instagram = ({ slice }) => (
  <section className={"section-instagram " + slice.primary.class}>
    <div className="container">
      <div className="text">
        <RichText render={slice.primary.text} />
      </div>
      <div className="feed">
        <InstagramFeed
          token="IGQVJVUXhta0pWcXFJNEoyb0pqSk5WNzZAkX0VtU2ctRVFscTU0dWpIN2VtU2FnQUdVOUU5aW03aWpzZA1h2NWh4dEgxc2trQlZAZAMEl6OG8wTG5ZAeTFoZAGVNZAF9pdGlHaTNlUTVHdTB0dVV2TUtqSVF6NAZDZD"
          counter="10"
        />
      </div>
    </div>
  </section>
);

export default Instagram;
