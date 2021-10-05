import React from 'react';
import PropTypes from 'prop-types';

const Flag = ({color='#000000', className='', size='1.5rem'}) => {
    return(	
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            width={size} height={size} fill={color} className={className}
        >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
        </svg>
    );
};

Flag.propTypes = {
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

export { Flag };
export default Flag;