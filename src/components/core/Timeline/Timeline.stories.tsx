import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Timeline from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Portfolio/Timeline',
    component: Timeline,
    args: {
        topics: [
            {
                fieldValue: '2022',
                nodes: [
                    {
                        html: 'Hello World',
                        frontmatter: {
                            categories: ['devops', 'web'],
                            date: '',
                            icons: [],
                            subtopics: null,
                            title: 'I am a title',
                        },
                    },
                ],
            },
        ],
    },
} as ComponentMeta<typeof Timeline>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Timeline> = (args) => <Timeline {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
