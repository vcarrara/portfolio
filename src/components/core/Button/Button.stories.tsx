import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Portfolio/Button',
    component: Button,
    args: {
        children: 'Click me!',
    },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({ children, ...args }) => <Button {...args}>{children}</Button>

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    type: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
    type: 'transparent',
}
