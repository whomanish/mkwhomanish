import React from 'react';
import PropTypes from 'prop-types';

const About = ({color='#000000', className='', size='1.5rem'}) => {

    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            width={size} height={size} fill={color}
            className={className}
        >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 
                2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
    );
};

About.propTypes = {
    /**
     * To update icon color.
     */
    color: PropTypes.string,
    /**
     * To update additional class.
     */
    className: PropTypes.string,
    /**
	 * Icon size
	 */
    size: PropTypes.string
};

export { About };
export default About;