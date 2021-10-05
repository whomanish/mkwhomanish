import React from 'react';
import PropTypes from 'prop-types';

const Home = ({color='#000000', className='', size='1.5rem'}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            width={size} height={size} fill={color} className={className}
        >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
    );
};

Home.propTypes = {
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


export { Home };
export default Home;