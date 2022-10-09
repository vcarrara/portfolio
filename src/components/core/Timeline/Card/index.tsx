import React from 'react'

type TimelineCardProps = {
    showArrow?: boolean
}

function TimelineCard({ children, showArrow = true }: React.PropsWithChildren<TimelineCardProps>) {
    return (
        <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg">
            {showArrow && <span className="lg:z-20 lg:absolute lg:-left-3 lg:w-6 lg:h-6 lg:transform lg:rotate-45 lg:bg-gray-800" aria-hidden="true"></span>}
            {children}
        </div>
    )
}

export default TimelineCard
