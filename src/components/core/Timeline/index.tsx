import React from 'react'
import CategoryBadge from '../CategoryBadge'
import * as styles from './timeline.module.css'

type TimelineProps = {
    topics: Queries.AllProjectsPageQuery['topics']['group']
}

const Timeline = ({ topics }: TimelineProps) => {
    return (
        <div className="py-20 flex justify-center">
            <div className={styles.timeline}>
                {[...topics]
                    .sort((a, b) => parseInt(b.fieldValue || '2022') - parseInt(a.fieldValue || '2022'))
                    .map(({ fieldValue, nodes }) => (
                        <React.Fragment key={fieldValue}>
                            {nodes.map(({ html, frontmatter }) => (
                                <div key={frontmatter?.title} className={styles.timelineWrapper}>
                                    <div className={styles.timelineYear}>{fieldValue}</div>
                                    {frontmatter?.subtopics === null ? (
                                        <div className={styles.timelineContent}>
                                            <div className="space-y-6">
                                                <Timeline.Title title={frontmatter.title} categories={frontmatter.categories} />
                                                {html && <div className="text-justify font-normal" dangerouslySetInnerHTML={{ __html: html }} />}
                                                <div className="space-x-1 text-3xl">
                                                    {frontmatter?.icons?.map(([title, className]: any) => (
                                                        <span key={title} title={title}>
                                                            <i className={className} />
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={styles.timelineContentGroup}>
                                            <div className="space-y-6">
                                                <Timeline.Title title={frontmatter?.title} categories={frontmatter?.categories || []} />
                                                {html && <div className="text-justify font-normal" dangerouslySetInnerHTML={{ __html: html }} />}
                                            </div>
                                            {frontmatter?.subtopics.map(
                                                ({
                                                    childMarkdownRemark: {
                                                        html,
                                                        frontmatter: { title, icons },
                                                    },
                                                }: any) => (
                                                    <div key={title} className="space-y-6">
                                                        <h2 className="text-xl font-bold">{title}</h2>
                                                        <div className="text-justify font-normal" dangerouslySetInnerHTML={{ __html: html }} />
                                                        <div className="space-x-1 text-3xl">
                                                            {icons.map(([title, className]: any) => (
                                                                <span key={title} title={title}>
                                                                    <i className={className} />
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
            </div>
        </div>
    )
}

Timeline.Title = function ({ title, categories }: any) {
    return (
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-between">
            <h2 className="text-xl font-bold">{title}</h2>
            <div className="space-x-1 inline-flex">
                {categories.map((category: any) => (
                    <CategoryBadge key={category} category={category}>
                        {category}
                    </CategoryBadge>
                ))}
            </div>
        </div>
    )
}

export default Timeline
