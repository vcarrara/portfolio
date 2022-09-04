import * as React from 'react'
import classNames from 'classnames'

type CategoryBadgeProps = {
    category: 'devops' | 'web' | 'data' | 'programming'
}

function getClasses(category: CategoryBadgeProps['category']) {
    switch (category) {
        case 'devops':
            return 'bg-emerald-300 text-emerald-800'
        case 'web':
            return 'bg-blue-300 text-blue-800'
        case 'data':
            return 'bg-rose-300 text-rose-800'
        case 'programming':
            return 'bg-yellow-300 text-yellow-800'
        default:
            return 'bg-gray-300 text-gray-800'
    }
}

const CategoryBadge: React.FC<React.PropsWithChildren<CategoryBadgeProps>> = ({ category, children }) => {
    return <span className={classNames('inline-flex items-center px-1.5 py-1 text-xs rounded-md font-medium', getClasses(category))}>{children}</span>
}

export default CategoryBadge
