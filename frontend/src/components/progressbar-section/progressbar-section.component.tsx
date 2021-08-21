import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Section from '../section/section.component';
import {ProgressBarSectionContainer, CircularProgressBarStyle} from './progressbar-section.styles';

import { Daily } from '../../interfaces/forecast/daily';


interface ProgressbarSectionProps {
    dayDetails : Daily
}

const ProgressbarSection = ({ dayDetails }: ProgressbarSectionProps) => {
    return (
        <Section className='section day-details day-details-progressbars' title=''>
            <ProgressBarSectionContainer>
                <div className="progressbar-item item-pop">
                    <div className='progressbar-item-title'>Precipitation</div>
                    <CircularProgressbar styles={CircularProgressBarStyle} className='progressbar'
                        value={Math.round(dayDetails.pop*100)} text={`${Math.round(dayDetails.pop*100)}%`}/>
                </div>
                <div className="progressbar-item item-humidity">
                    <div className="progressbar-item-title">Humidity</div>
                    <CircularProgressbar styles={CircularProgressBarStyle} className='progressbar'
                        value={Math.round(dayDetails.humidity)} text={`${Math.round(dayDetails.humidity)}%`}/>
                </div>
                <div className="progressbar-item item-uvi">
                    <div className="progressbar-item-title">UV Index</div>
                    <CircularProgressbar styles={CircularProgressBarStyle} className='progressbar'
                        minValue={0} maxValue={10} value={dayDetails.uvi} text={`${Math.round(dayDetails.uvi)}`}/>
                </div>
                <div className="progressbar-item item-pressure">
                    <div className="progressbar-item-title">Pressure</div>
                    <CircularProgressbar styles={CircularProgressBarStyle} className='progressbar'
                        minValue={980} maxValue={1030} value={Math.round(dayDetails.pressure)} text={`${Math.round(dayDetails.pressure)}hPa`}/>
                </div>
            </ProgressBarSectionContainer>
        </Section>
    )
}

export default ProgressbarSection
