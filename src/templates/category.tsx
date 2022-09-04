import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import MainLayout from '../components/layouts/MainLayout'
import TimelineView from '../components/views/TimelineView'

type CategoryTemplateContext = {
    category: string
    title: string
}

function CategoryTemplate({ data, pageContext }: PageProps<Queries.CategoryTemplateQuery, CategoryTemplateContext>) {
    const {
        topics: { totalCount, group },
    } = data

    return (
        <MainLayout>
            <TimelineView title={pageContext.title} totalCount={totalCount} topics={group} />
        </MainLayout>
    )
}

export const query = graphql`
    query CategoryTemplate($category: String!) {
        topics: allMarkdownRemark(filter: { fields: { collection: { eq: "topics" } }, frontmatter: { categories: { eq: $category } } }) {
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

export default CategoryTemplate
