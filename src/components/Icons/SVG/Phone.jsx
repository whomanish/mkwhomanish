import React from 'react';
import PropTypes from 'prop-types';

const Phone = ({color='#000000', className='', size='1.5rem'}) => {

    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            width={size} height={size} fill={color} className={className}
        >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 
				1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 
				1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
            />
        </svg>
    );
};

Phone.propTypes = {
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

export { Phone };
export default Phone;