import type { GatsbyNode } from 'gatsby'
import path from 'path'

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark' && node.parent) {
        const parent = getNode(node.parent)

        const collection = parent?.sourceInstanceName

        createNodeField({
            node,
            name: 'collection',
            value: collection,
        })
    }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { createPage } = actions

    const { data } = await graphql<Queries.CreatePagesQuery>(`
        query CreatePages {
            allMarkdownRemark(filter: { fields: { collection: { eq: "categories" } } }) {
                nodes {
                    frontmatter {
                        slug
                        title
                        category
                    }
                }
            }
        }
    `)

    if (!data?.allMarkdownRemark.nodes) {
        return
    }

    for (const node of data.allMarkdownRemark.nodes) {
        const { frontmatter } = node
        createPage({
            path: frontmatter?.slug || '/',
            component: path.resolve('src/templates/category.tsx'),
            context: {
                category: frontmatter?.category,
                title: frontmatter?.title,
            },
        })
    }
}
