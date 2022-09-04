import { Link } from 'gatsby'
import * as React from 'react'
import Container from '../../core/Container'
import Timeline from '../../core/Timeline'

type TimelineViewProps = {
    topics: Queries.AllProjectsPageQuery['topics']['group']
    totalCount: number
    title: string
}

function TimelineView({ topics, totalCount, title }: TimelineViewProps) {
    return (
        <Container>
            <div className="space-y-8">
                <p className="text-2xl font-bold space-x-2">
                    <Link to="/" className="text-gray-300 hover:text-white space-x-2">
                        <span className="align-middle">Home</span>
                        <span className="text-xl">
                            <i className="fas fa-home align-middle" />
                        </span>
                    </Link>
                    <span className="text-gray-600 align-middle">{'>'}</span>
                    <span className="text-primary-500 align-middle">{title}</span>
                    <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-black text-white">{totalCount}</span>
                </p>
                <Timeline topics={topics} />
            </div>
        </Container>
    )
}

export default TimelineView
