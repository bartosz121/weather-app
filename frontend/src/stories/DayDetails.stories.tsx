import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DayDetailsSection from '../components/day-details-section/day-details-section.component';

import { forecastExample, locationExample } from './example.data';
import TestingBackground from './background-for-testing.styles';

import './font.css'

export default {
    title: 'Forecast Page Components/Day Details',
    component: DayDetailsSection,
} as ComponentMeta<typeof DayDetailsSection>;

const Template: ComponentStory<typeof DayDetailsSection> = (args) => <TestingBackground><DayDetailsSection {...args} /></TestingBackground>

export const Example = Template.bind({});
Example.args = {
    dayDetails: forecastExample.forecastData.daily[0],
    timezone: forecastExample.forecastData.timezone,
}
