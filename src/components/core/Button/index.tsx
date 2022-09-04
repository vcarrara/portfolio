import * as React from 'react'
import classNames from 'classnames'

type ButtonProps<T extends React.ElementType> = {
    as?: T
    type?: 'primary' | 'transparent'
}

function getClasses(type: ButtonProps<any>['type']) {
    switch (type) {
        case 'primary':
            return 'bg-primary-600'
        case 'transparent':
            return 'bg-transparent border-2 border-primary-600'
        default:
            return 'bg-primary-600'
    }
}

function Button<T extends React.ElementType = 'button'>({
    type,
    as,
    children,
    ...props
}: React.PropsWithChildren<ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>>) {
    const As = as || 'button'
    return (
        <As
            {...props}
            className={classNames(
                getClasses(type),
                'inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white hover:bg-primary-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-primary-500'
            )}
        >
            {children}
        </As>
    )
}

export default Button
