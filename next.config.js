const withPrismicSitemap = require("@reecem/prismic-sitemap");

// The Prismic API endpoint
const API_ENDPOINT = `https://valetmarket20.cdn.prismic.io/api/v2`;

// The hostname of the website, for example it would be https://example.com
const SITE_URL = `https://www.valetmarket.com`;

const linkResolver = (doc) => {
  // const prefix = doc.lang !== "en-za" ? `/${doc.lang}` : "";
  const prefix = "";

  switch (doc.type) {
    case "homepage":
    case "pricing":
    case "page":
      return `${prefix}/${doc.uid ? doc.uid : ""}`;

    case "post":
      return `${prefix}/blog/${doc.uid}`;

    case "legal":
      return `${prefix}/legal/${doc.uid}`;

    case "product":
      return `${prefix}/product/${doc.uid}`;

    default:
      throw new Error(`Unknown doc.type: "${doc.type}"`);
  }
};

module.exports = withPrismicSitemap({
  // the sitemap object is picked up by the package.
  sitemap: {
    linkResolver: linkResolver,
    apiEndpoint: API_ENDPOINT,
    hostname: SITE_URL,
    optionsMapPerDocumentType: {
      homepage: { changefreq: "monthly", priority: 1 },
      page: { changefreq: "monthly", priority: 1 },
    },
    documentTypes: ["homepage", "page"],
  },
});
