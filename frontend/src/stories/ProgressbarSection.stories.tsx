import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgressbarSection from '../components/progressbar-section/progressbar-section.component';

import { forecastExample, locationExample } from './example.data';
import TestingBackground from './background-for-testing.styles';

import './font.css'

export default {
    title: 'Day Details Components NO STYLES/Progressbar Section',
    component: ProgressbarSection,
} as ComponentMeta<typeof ProgressbarSection>;

const Template: ComponentStory<typeof ProgressbarSection> = (args) => <TestingBackground><ProgressbarSection {...args} /></TestingBackground>

export const Example = Template.bind({});
Example.args = {
    dayDetails: forecastExample.forecastData.daily[0],
}
