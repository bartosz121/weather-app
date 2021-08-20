import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DayTempSection from '../components/day-temp-section/day-temp-section.component';

import { forecastExample, locationExample } from './example.data';
import TestingBackground from './background-for-testing.styles';

import './font.css'

export default {
    title: 'Day Details Components NO STYLES/Day Temp Section',
    component: DayTempSection,
} as ComponentMeta<typeof DayTempSection>;

const Template: ComponentStory<typeof DayTempSection> = (args) => <TestingBackground><DayTempSection {...args} /></TestingBackground>

export const Example = Template.bind({});
Example.args = {
    temp: forecastExample.forecastData.daily[0].temp,
    weatherDesc: forecastExample.forecastData.daily[0].weather[0].description,
}
