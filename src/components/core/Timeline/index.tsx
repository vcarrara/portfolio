import React, { useMemo } from 'react'
import CategoryBadge from '../CategoryBadge'
import TimelineCard from './Card'
import TimelineContentGroupWrapper from './ContentGroupWrapper'
import TimelineContentWrapper from './ContentWrapper'
import TimelineYear from './Year'

type TimelineProps = {
    topics: Queries.AllProjectsPageQuery['topics']['group']
}

const Timeline = ({ topics }: TimelineProps) => {
    const sortedTopics = useMemo(() => [...topics].sort((a, b) => parseInt(b.fieldValue || '2022') - parseInt(a.fieldValue || '2022')), [topics])

    return (
        <div className="py-20 flex justify-center">
            <div className="relative lg:pl-16 ml-[15px]">
                <span className="hidden lg:absolute lg:block lg:bg-gray-800 lg:rounded-md lg:w-1 lg:h-full lg:top-0 lg:left-0" aria-hidden="true" />
                {sortedTopics.map(({ fieldValue, nodes }) => (
                    <React.Fragment key={fieldValue}>
                        {nodes.map(({ html, frontmatter }) => (
                            <div key={frontmatter?.title} className="relative flex flex-col items-center justify-center mb-10">
                                <Timeline.Year>{fieldValue}</Timeline.Year>
                                {frontmatter?.subtopics === null ? (
                                    <Timeline.ContentWrapper>
                                        <Timeline.Card>
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
                                        </Timeline.Card>
                                    </Timeline.ContentWrapper>
                                ) : (
                                    <Timeline.ContentGroupWrapper>
                                        <div className="space-y-8">
                                            <Timeline.Card>
                                                <div className="space-y-6">
                                                    <Timeline.Title title={frontmatter?.title} categories={frontmatter?.categories || []} />
                                                    {html && <div className="text-justify font-normal" dangerouslySetInnerHTML={{ __html: html }} />}
                                                </div>
                                            </Timeline.Card>
                                            {frontmatter?.subtopics.map(
                                                ({
                                                    childMarkdownRemark: {
                                                        html,
                                                        frontmatter: { title, icons },
                                                    },
                                                }: any) => (
                                                    <Timeline.Card key={title} showArrow={false}>
                                                        <div className="space-y-6">
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
                                                    </Timeline.Card>
                                                )
                                            )}
                                        </div>
                                    </Timeline.ContentGroupWrapper>
                                )}
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

Timeline.ContentWrapper = TimelineContentWrapper

Timeline.ContentGroupWrapper = TimelineContentGroupWrapper

Timeline.Card = TimelineCard

Timeline.Year = TimelineYear

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
