import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactSkycon, SkyconType } from 'react-skycons-extended';
import { GiWaterDrop } from 'react-icons/gi';


import Section from '../components/section/section.component'
import Button from '../components/button/button.component';
import { Card } from '../components/card/card.component';

import TestingBackground from './background-for-testing.styles';

import './font.css'

const sectionGalleryExample: React.ReactNode = 
    <Card>
        <span className='card-dt'>Wed 18</span>
        <div className='card-icon'>
            <ReactSkycon icon={SkyconType.PARTLY_CLOUDY_DAY} color='white' size={64}/>
        </div>
        <span className='card-description'>few clouds</span>
        <span className='card-temp'>21.23&#176;C</span>
        <span className='card-feels-like'>20.7&#176;C</span>
    </Card>

const sectionGalleryExample2: React.ReactNode = 
<Card>
    <span className='card-dt'>Wed 18</span>
    <div className='card-icon'>
        <ReactSkycon icon={SkyconType.RAIN} color='white' size={64}/>
    </div>
    <span className='card-description'>heavy intensity rain</span>
    <span className='card-temp'>18.49&#176;C</span>
    <span className='card-feels-like'>18.64&#176;C</span>
</Card>

const sectionGalleryExample3: React.ReactNode = 
<Card>
    <span className='card-dt'>16:00</span>
    <div className='card-icon'>
        <ReactSkycon icon={SkyconType.CLOUDY} color='white' size={64}/>
    </div>
    <span className='card-description'>overcast clouds</span>
    <span className='card-temp'>20.1&#176;C</span>
    <span className='card-pop'><GiWaterDrop />7%</span>
</Card>

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

export const SectionGalleryFewElements = Template.bind({});
SectionGalleryFewElements.args = {
    title: 'Section title',
    children: <div className='gallery'>
        {sectionGalleryExample}
        {sectionGalleryExample3}
        {sectionGalleryExample2}
        {sectionGalleryExample}
        </div>
}

export const SectionGalleryMultipleElements = Template.bind({});
SectionGalleryMultipleElements.args = {
    title: 'Section title',
    children: <div className='gallery'>
        {sectionGalleryExample}
        {sectionGalleryExample3}
        {sectionGalleryExample2}
        {sectionGalleryExample3}
        {sectionGalleryExample2}
        {sectionGalleryExample}
        {sectionGalleryExample3}
        {sectionGalleryExample}
        {sectionGalleryExample2}
        {sectionGalleryExample3}
        {sectionGalleryExample2}
        {sectionGalleryExample}
        </div>
}
