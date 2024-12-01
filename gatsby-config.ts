import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `luna-lash-beauty-site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lora\:300,400,500,600,700`,
          `montserrat\: 300,400,500,600,700`,
          `cormorant\:400,500,600,700`
        ],
        display: 'swap'
      },
    },
  ],
};

export default config;
