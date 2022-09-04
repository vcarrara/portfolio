import * as React from 'react'
import classNames from 'classnames'

const icons = {
    gatsby: 'devicon-gatsby-plain',
    react: 'devicon-react-plain',
    graphql: 'devicon-graphql-plain',
    tailwindcss: 'devicon-tailwindcss-plain',
}

type IconProps = {
    use: keyof typeof icons
} & JSX.IntrinsicElements['i']

const Icon: React.FC<IconProps> = ({ use, className, ...props }) => {
    return <i className={classNames(icons[use], className)} {...props}></i>
}

export default Icon
