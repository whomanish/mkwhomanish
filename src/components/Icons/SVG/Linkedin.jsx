import React from 'react';
import PropTypes from 'prop-types';

const Linkedin = ({color='#000000', className='', size='1.5rem'}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            width={size} height={size} className={className}
            fill={color}
        >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 
				1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 
				0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 
				0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
            />
        </svg>
    );
};

Linkedin.propTypes = {
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

export { Linkedin };
export default Linkedin;