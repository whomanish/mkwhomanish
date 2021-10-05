import React from 'react';
import NavigationMenu from './index';

export default {
    title: 'Basic/NavigationMenu',
    component: NavigationMenu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
const Template = () => <NavigationMenu />;
export const Primary = Template.bind({});