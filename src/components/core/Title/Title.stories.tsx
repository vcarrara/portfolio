import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Title from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Portfolio/Title',
    component: Title,
    args: {
        children: 'Look at me, I am a title!',
    },
} as ComponentMeta<typeof Title>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Title> = ({ children, ...args }) => <Title {...args}>{children}</Title>

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
