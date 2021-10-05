import React from 'react';
import PropTypes from 'prop-types';

const ThumbsUp = ({color='#000000', className='', size='1.5rem'}) => {
    return(	
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            width={size} height={size} fill={color} className={className}
        >
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 
			1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 
			1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
            />
        </svg>
    );
};

ThumbsUp.propTypes = {
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

export { ThumbsUp };
export default ThumbsUp;