import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Luna Lash & Beauty Co.`,
    description: `Luna Lash & Beauty Co. is a premier beauty salon in Reno, NV, specializing in natural lash sets, full-body waxing, and skincare. Our goal is to create a comfortable, relaxing space and provide personalized services for everyone who walks through our door.`,
    siteUrl: `https://lunalashandbeautyco.com/`
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luna Lash & Beauty Co.`,
        icon: `src/images/lunalashlogo.png`,
      },
    },
  ],
};

export default config;
