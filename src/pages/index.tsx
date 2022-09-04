import * as React from 'react'
import { graphql, HeadFC, PageProps } from 'gatsby'
import MainLayout from '../components/layouts/MainLayout'
import LandingView from '../components/views/LandingView'

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
    const topicsCount = data.topics.group.reduce<Record<string, number>>(
        (accumulator, { fieldValue, totalCount }) => ({ ...accumulator, [fieldValue || 'unknown']: totalCount }),
        {}
    )

    return (
        <MainLayout>
            <LandingView nodes={data.categories.nodes} count={topicsCount} totalTopics={data.topics.totalCount} />
        </MainLayout>
    )
}

export default IndexPage

export const query = graphql`
    query IndexPage {
        topics: allMarkdownRemark(filter: { fields: { collection: { eq: "topics" } } }) {
            totalCount
            group(field: frontmatter___categories) {
                fieldValue
                totalCount
            }
        }

        categories: allMarkdownRemark(filter: { fields: { collection: { eq: "categories" } } }, sort: { fields: frontmatter___title }) {
            nodes {
                id
                html
                frontmatter {
                    category
                    icons
                    title
                    slug
                }
            }
        }
    }
`

export const Head: HeadFC = () => <title>Home Page</title>
