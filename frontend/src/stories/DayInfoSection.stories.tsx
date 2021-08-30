import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DayInfoSection from '../components/day-info-section/day-info-section.component';

import { forecastExample, locationExample } from './example.data';
import TestingBackground from './background-for-testing.styles';

import './font.css'

export default {
    title: 'Day Details Components NO STYLES/Day Temp Section',
    component: DayInfoSection,
} as ComponentMeta<typeof DayInfoSection>;

const Template: ComponentStory<typeof DayInfoSection> = (args) => <TestingBackground><DayInfoSection {...args} /></TestingBackground>

export const Example = Template.bind({});
Example.args = {
    day: forecastExample.forecastData.daily[0],
    weatherDesc: forecastExample.forecastData.daily[0].weather[0].description,
}
