import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactSkycon } from 'react-skycons-extended';

import { Card } from '../components/card/card.component';
import { getSkycon, unixToStringShortWeekDay2Digit } from '../components/forecast/forecast.utils';

import { forecastExample } from './example.data';
import TestingBackground from './background-for-testing.styles';

import './font.css'

const exampleChildren: React.ReactNode = <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <span>{unixToStringShortWeekDay2Digit(
            forecastExample.forecastData.daily[0].dt,
            forecastExample.forecastData.timezone
            )}</span>
            <ReactSkycon icon={getSkycon(forecastExample.forecastData.daily[0].weather[0].icon)}
                color='white' size={64}/>
            <span>{forecastExample.forecastData.daily[0].temp.day}&#176;C</span>
            <span style={{color: 'PaleTurquoise'}}>{forecastExample.forecastData.daily[0].feels_like.day}&#176;C</span>
            <span>{forecastExample.forecastData.daily[0].weather[0].description}</span>

    </div>

export default {
    title: 'Forecast Page Components/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <TestingBackground><Card {...args} /></TestingBackground>

export const Default = Template.bind({});
Default.args = {
    selected: false,
    children: exampleChildren,
}

export const Selected = Template.bind({});
Selected.args = {
    selected: true,
    children: exampleChildren,
}
