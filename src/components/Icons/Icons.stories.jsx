import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { 
    About, Angellist, Blog, Blogspot, ColorDrops, Contact, Home, Medium, Settings, Portfolio, Facebook, Twitter, Instagram, Github, Linkedin, Heart, Location, ThumbsUp, Cake, Phone, Flag
} from './index';

import * as Icon from './index';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Blocks = styled.div`
    flex: 0 0 20%;
    text-align: center;
    margin-bottom: 30px;
`;

export default {
    title: 'Basic/Icons',
    component: Icon,
    decorators: [withKnobs],
    argTypes: {
        color: { control: 'color' },
    },
};
const Template = () => (
    <Wrapper> 
        <Blocks><About size="2.5rem" /><p>About</p></Blocks>
        <Blocks><Angellist size="2.5rem" /><p>Angellist</p></Blocks>
        <Blocks><Blog size="2.5rem" /><p>Blog</p></Blocks>
        <Blocks><Blogspot size="2.5rem" /><p>Blogspot</p></Blocks>
        <Blocks><ColorDrops size="2.5rem" /><p>Color Drops</p></Blocks>
        <Blocks><Contact size="2.5rem" /><p>Contact</p></Blocks>
        <Blocks><Home size="2.5rem" /><p>Home</p></Blocks>
        <Blocks><Medium size="2.5rem" /><p>Medium</p></Blocks>
        <Blocks><Settings size="2.5rem" /><p>Settings</p></Blocks>
        <Blocks><Portfolio size="2.5rem" /><p>Portfolio</p></Blocks>
        <Blocks><Facebook size="2.5rem" /><p>Facebook</p></Blocks>
        <Blocks><Twitter size="2.5rem" /><p>Twitter</p></Blocks>
        <Blocks><Instagram size="2.5rem" /><p>Instagram</p></Blocks>
        <Blocks><Linkedin size="2.5rem" /><p>Linkedin</p></Blocks>
        <Blocks><Github size="2.5rem" /><p>Github</p></Blocks>
        <Blocks><Heart size="2.5rem" /><p>Heart</p></Blocks>
        <Blocks><Location size="2.5rem" /><p>Location</p></Blocks>
        <Blocks><ThumbsUp size="2.5rem" /><p>ThumbsUp</p></Blocks>
        <Blocks><Cake size="2.5rem" /><p>Cake</p></Blocks>
        <Blocks><Phone size="2.5rem" /><p>Phone</p></Blocks>
        <Blocks><Flag size="2.5rem" /><p>Flag</p></Blocks>
    </Wrapper>

);
export const Primary = Template.bind({});