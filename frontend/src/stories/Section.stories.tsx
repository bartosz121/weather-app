import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Section from '../components/section/section.component'
import Button from '../components/button/button.component';

import TestingBackground from './background-for-testing.styles';

import { sectionAlert, sectionGalleryExample1, sectionGalleryExample2, sectionGalleryExample3 } from './Section.examples';

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

export const SectionAlert = Template.bind({});
SectionAlert.args = {
    title: 'Alerts',
    children: sectionAlert
}

export const SectionGalleryFewElements = Template.bind({});
SectionGalleryFewElements.args = {
    title: 'Section title',
    children: <div className='gallery'>
        {sectionGalleryExample1}
        {sectionGalleryExample3}
        {sectionGalleryExample2}
        {sectionGalleryExample1}
        </div>
}

export const SectionGalleryMultipleElements = Template.bind({});
SectionGalleryMultipleElements.args = {
    title: 'Section title',
    children: <div className='gallery'>
        {sectionGalleryExample1}
        {sectionGalleryExample3}
        {sectionGalleryExample2}
        {sectionGalleryExample3}
        {sectionGalleryExample2}
        {sectionGalleryExample1}
        {sectionGalleryExample3}
        {sectionGalleryExample1}
        {sectionGalleryExample2}
        {sectionGalleryExample3}
        {sectionGalleryExample2}
        {sectionGalleryExample1}
        </div>
}
