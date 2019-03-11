module.exports = {
  siteMetadata: {
    title: `Vainglory News`,
    description: `Catch up on the latest and greatest Vainglory news!`,
    author: `@IGNSkillz4Killz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/VGNews.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    // {
    //   resolve: `gatsby-source-mongodb`,
    //   options: {
    //     dbName: "prod",
    //     collection: `posts`,
    //     connectionURL: config.mongoDBLogin,
    //   },
    // },
    {
      resolve: "gatsby-source-mongodb",
      options: {
        dbName: "prod",
        collection: "posts",
        server: {
          address: process.env.mongoAddress,
          port: process.env.mongoPort,
        },
        auth: {
          user: process.env.mongoUser,
          password: process.env.mongoPassword,
        },
        extraParams: {
          ssl: true,
          replicaSet: "Vainglory-News-shard-0",
          authSource: "admin",
          retryWrites: true,
        },
      },
    },
  ],
}
