import React from 'react'

function TimelineContentWrapper({ children }: React.PropsWithChildren) {
    return (
        <div className="w-full lg:w-[600px]">
            {children}
            <span
                className="-z-10 lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-1 bg-transparent border-b-0 border-l-0 border-r-4 border-t-0 border-dotted border-primary-500"
                aria-hidden="true"
            ></span>
        </div>
    )
}

export default TimelineContentWrapper
