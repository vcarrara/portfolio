import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import MainLayout from '../components/layouts/MainLayout'
import TimelineView from '../components/views/TimelineView'

function AllProjectsPage({ data }: PageProps<Queries.AllProjectsPageQuery>) {
    const {
        topics: { group, totalCount },
    } = data

    return (
        <MainLayout>
            <TimelineView title="All projects" totalCount={totalCount} topics={group} />
        </MainLayout>
    )
}

export const pageQuery = graphql`
    query AllProjectsPage {
        topics: allMarkdownRemark(filter: { fields: { collection: { eq: "topics" } } }) {
            totalCount
            group(field: frontmatter___date) {
                fieldValue
                nodes {
                    html
                    frontmatter {
                        categories
                        date
                        icons
                        title
                        subtopics {
                            childMarkdownRemark {
                                html
                                frontmatter {
                                    title
                                    icons
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default AllProjectsPage
