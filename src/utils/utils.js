import React from 'react';
import {
    Heart, Location, ThumbsUp, Cake, Phone,
    Flag, Medium, Settings, Contact, Portfolio,
    Facebook, Twitter, Linkedin,
    About, Blog, Home, ColorDrops,
    Instagram, Angellist, Blogspot
} from '../components/Icons';

export const createIcon = (data, color = 'white', size = '1rem', className = '') => {
    if (data === 'Portfolio') {
        return <Portfolio color={color} className={className} />;
    }

    if (data === 'ThumbsUp') {
        return <ThumbsUp color={color} className={className} />;
    }

    if (data === 'Heart') {
        return <Heart color={color} className={className} />;
    }

    if (data === 'Phone') {
        return <Phone color={color} className={className} />;
    }

    if (data === 'Cake') {
        return <Cake color={color} className={className} />;
    }

    if (data === 'Flag') {
        return <Flag color={color} className={className} />;
    }

    if (data === 'Settings') {
        return <Settings color={color} className={className} />;
    }

    if (data === 'Location') {
        return <Location color={color} className={className} />;
    }

    if (data === 'Contact') {
        return <Contact color={color} className={className} />;
    }

    if (data === 'Facebook') {
        return <Facebook color={color} size={size} className={className} />;
    }

    if (data === 'Linkedin') {
        return <Linkedin color={color} size={size} className={className} />;
    }

    if (data === 'Twitter') {
        return <Twitter color={color} size={size} className={className} />;
    }

    if (data === 'About') {
        return <About color="#fff" className={className} />;
    }

    if (data === 'Blog') {
        return <Blog color="#fff" className={className} />;
    }

    if (data === 'Home') {
        return <Home color="#fff" className={className} />;
    }

    if (data === 'ColorDrops') {
        return <ColorDrops color={color} className={className} />;
    }

    if (data === 'Instagram') {
        return <Instagram color={color} size={size} className={className} />;
    }
    if (data === 'Medium') {
        return <Medium color={color} size={size} className={className} />;
    }

    if (data === 'Angellist') {
        return <Angellist color={color} size={size} className={className} />;
    }

    if (data === 'Blogspot') {
        return <Blogspot color={color} size={size} className={className} />;
    }
};