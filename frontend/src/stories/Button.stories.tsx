import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/button/button.component'

import './font.css'

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    children: 'Button'
}

export const Normal = Template.bind({});
Normal.args = {
    size: 'normal',
    children: 'Button'
}

export const Big = Template.bind({});
Big.args = {
    size: 'big',
    children: 'Button'
}

export const FetchButton = Template.bind({});
FetchButton.args = {
    fetchBtn: true,
    children: 'Fetch Button'
}
