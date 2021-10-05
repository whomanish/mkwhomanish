import React from 'react';
import { createGlobalStyle } from 'styled-components';
import StyleSwitcher from './index';

export default {
    title: 'Basic/StyleSwitcher',
    component: StyleSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
const GlobalStyle = createGlobalStyle`
  body {
    font-family: "IBM Plex Mono", monospace;
  }
`;
const Template = () => (
    <> 
        <GlobalStyle />
        <StyleSwitcher />
    </>
);
export const Primary = Template.bind({});