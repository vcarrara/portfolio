import React from 'react'

function TimelineYear({ children }: React.PropsWithChildren) {
    return (
        <div className="inline-flex relative bg-primary-500 p-2 rounded-md mb-4 lg:absolute lg:block lg:bg-gray-800 lg:top-[18px] lg:left-[-150px]">
            <span className="lg:absolute lg:w-5 lg:h-5 lg:rounded-full lg:bg-primary-500 lg:left-[78px] lg:top-[10px]" aria-hidden="true" />
            <span className="font-semibold">{children}</span>
        </div>
    )
}

export default TimelineYear
