import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SunSection from '../components/sun-section/sun-section.component';

import { forecastExample, locationExample } from './example.data';
import TestingBackground from './background-for-testing.styles';

import './font.css'

export default {
    title: 'Day Details Components NO STYLES/Sun Section',
    component: SunSection,
} as ComponentMeta<typeof SunSection>;

const Template: ComponentStory<typeof SunSection> = (args) => <TestingBackground><SunSection {...args} /></TestingBackground>

export const Example = Template.bind({});
Example.args = {
    sunData: {
        sunrise: forecastExample.forecastData.daily[0].sunrise,
        sunset: forecastExample.forecastData.daily[0].sunset,
    },
    timezone: forecastExample.forecastData.timezone,
}
