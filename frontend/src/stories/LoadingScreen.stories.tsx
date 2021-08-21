import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoadingScreen from '../components/loading-screen/loading-screen.component';

import './font.css'

export default {
    title: 'Loading Screen',
    component: LoadingScreen,
} as ComponentMeta<typeof LoadingScreen>;

const Template: ComponentStory<typeof LoadingScreen> = () => <LoadingScreen />

export const Example = Template.bind({});
