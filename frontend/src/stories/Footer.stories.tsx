import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from '../components/footer/footer.component';

import TestingBackground from './background-for-testing.styles';

import './font.css'

export default {
    title: 'Forecast Page Components/Footer',
    component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <TestingBackground><Footer /></TestingBackground>

export const Example = Template.bind({});
