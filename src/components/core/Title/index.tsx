import * as React from 'react'

const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <h1 className="relative text-4xl font-bold ml-4 before:absolute before:top-0 before:-left-4 before:w-1 before:h-full before:bg-primary-500">
            {children}
        </h1>
    )
}

export default Title
