import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Section from '../components/section/section.component'
import Button from '../components/button/button.component';

import TestingBackground from './background-for-testing.styles';

import './font.css'

export default {
    title: 'Forecast Page Components/Section',
    component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => <TestingBackground><Section {...args} /></TestingBackground>

export const SectionExample = Template.bind({});
SectionExample.args = {
    title: 'Section title',
    children: <div>
        <p>Children Example</p>
        <Button size='big'>Children Button</Button>
        </div>
}
