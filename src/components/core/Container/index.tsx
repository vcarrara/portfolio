import * as React from 'react'

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <div className="px-4 py-16 sm:px-16 md:px-24 lg:px-32 xl:px-64">{children}</div>
}

export default Container
