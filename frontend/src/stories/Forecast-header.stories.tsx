import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ForecastHeader from '../components/forecast-header/forecast-header.component';

import { forecastExample, locationExample } from './example.data';
import TestingBackground from './background-for-testing.styles';

import './font.css'

export default {
    title: 'Forecast Page Components/Forecast Header',
    component: ForecastHeader,
} as ComponentMeta<typeof ForecastHeader>;

const Template: ComponentStory<typeof ForecastHeader> = (args) => <TestingBackground><ForecastHeader {...args} /></TestingBackground>

export const Header = Template.bind({});
Header.args = {
    current: forecastExample.forecastData.current,
    locationName: locationExample,
    timezone: forecastExample.forecastData.timezone
}
