import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
    pathPrefix: '/portfolio',
    siteMetadata: {
        title: `portfolio`,
        siteUrl: `https://vcarrara.github.io/portfolio`,
        description: 'Portfolio of Victor Carrara',
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'categories',
                path: `${__dirname}/content/categories`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'topics',
                path: `${__dirname}/content/topics`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'subtopics',
                path: `${__dirname}/content/subtopics`,
            },
        },
    ],
}

export default config
