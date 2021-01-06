import Head from 'next/head'
import React from 'react'

export default function SEO({title, description=""}) {
        
    const siteMetadata = {
        title: `Rodrigo Rocha`,
        description: `Welcome to my website. Get to know me a bit better. Take a look at my portfolio, get inspired and let's work together!`,
        author: `Rodrigo Rocha`,
        image: `https://firebasestorage.googleapis.com/v0/b/rodrigo-rocha-website.appspot.com/o/Social%2Frr.jpg?alt=media&token=0ad56975-ea3e-4b54-9f85-b0bdc614c502`,
        keywords: `Software Developer, Software Engineer, Responsive, Mobile, Websites, Apps, Web Development, Graphic Design, UI/UX, Digital Marketing, SEO`,
        siteUrl: `https://rodrigorocha.pt`,
        ogTitle: `Rodrigo Rocha | Software Developer`,
        ogType: "website",
        ogAlt: "Rodrigo Rocha",
        twitterCard: "summary_large_image",
        copyright: "Rodrigo Rocha © 2020 . All rights reserved."
    };

    const descriptionMetadata = description === "" ? siteMetadata.description : description;

    return (

        <Head>
          <title>{title} ~ Rodrigo Rocha</title>
          <meta name="description" content={descriptionMetadata} key="description" />
          <meta property="keywords" content={siteMetadata.keywords} key="keywords" />
          <meta property="og:title" content={siteMetadata.ogTitle} key="ogTitle" />
          <meta property="og:description" content={siteMetadata.description} key="ogDescription" />
          <meta property="og:image" content={siteMetadata.image} key="ogImage" />
          <meta property="og:type" content={siteMetadata.ogType} key="ogType" />
          <meta property="og:alt" content={siteMetadata.author} key="ogAlt" />
          <meta property="og:url" content={siteMetadata.url} key="ogUrl" />
          <meta property="twitter:title" content={title} key="twTitle" />
          <meta property="twitter:description" content={siteMetadata.description} key="twDescription" />
          <meta property="twitter:card" content={siteMetadata.twitterCard} key="twCard" />
          <meta property="twitter:creator" content={siteMetadata.author} key="twCreator" />
          <meta property="copyright" content="Rodrigo Rocha © 2020 . All rights reserved." key="copyright" />

        </Head>
         
      )
}