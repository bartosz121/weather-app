import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MoonSection from '../components/moon-section/moon-section.component';

import { forecastExample, locationExample } from './example.data';
import TestingBackground from './background-for-testing.styles';

import './font.css'

export default {
    title: 'Day Details Components NO STYLES/Moon Section',
    component: MoonSection,
} as ComponentMeta<typeof MoonSection>;

const Template: ComponentStory<typeof MoonSection> = (args) => <TestingBackground><MoonSection {...args} /></TestingBackground>

export const Example = Template.bind({});
Example.args = {
    moonData: {
        moonrise: forecastExample.forecastData.daily[0].moonrise,
        moonset: forecastExample.forecastData.daily[0].moonset,
        moonPhase: forecastExample.forecastData.daily[0].moon_phase,
    },
    timezone: forecastExample.forecastData.timezone,
}
