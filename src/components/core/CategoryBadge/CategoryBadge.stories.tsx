import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CategoryBadge from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Portfolio/CategoryBadge',
    component: CategoryBadge,
} as ComponentMeta<typeof CategoryBadge>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CategoryBadge> = ({ children, ...args }) => <CategoryBadge {...args}>{children}</CategoryBadge>

export const Data = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Data.args = {
    category: 'data',
    children: 'Data',
}

export const DevOps = Template.bind({})
DevOps.args = {
    category: 'devops',
    children: 'DevOps',
}

export const Programming = Template.bind({})
Programming.args = {
    category: 'programming',
    children: 'Programming',
}

export const Web = Template.bind({})
Web.args = {
    category: 'web',
    children: 'Web',
}
