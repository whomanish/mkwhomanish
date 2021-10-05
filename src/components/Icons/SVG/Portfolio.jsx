import React from 'react';
import PropTypes from 'prop-types';

const Portfolio = ({color='#000000', className='', size='1.5rem'}) => {
    return(
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
            viewBox="0 0 502.672 502.672" xmlSpace="preserve"
            width={size} height={size}
            className={className} fill={color}
        >
            <g>
                <g>
                    <g>
                        <path d="M138.29,168.019h258.806v-16.178c0-13.352-10.936-24.267-24.267-24.267H266.011v-14.129
				c0-20.104-16.351-36.39-36.39-36.39h-62.124c-9.707,0-18.831,3.796-25.734,10.699c-6.903,6.903-10.678,15.962-10.678,25.691
				v14.15H24.267C10.915,127.574,0,138.488,0,151.841v216.722l81.581-165.275C91.482,183.161,115.9,168.019,138.29,168.019z
				 M155.353,113.445c0-3.214,1.316-6.256,3.581-8.542c2.265-2.33,5.328-3.602,8.542-3.602h62.124
				c6.709,0,12.123,5.436,12.123,12.144v14.15h-86.369V113.445z"/>
                        <path d="M486.874,192.243H138.29c-13.331,0-29.099,9.793-34.945,21.743L9.599,403.895
				c-5.91,11.929,0.194,21.722,13.525,21.722h348.584c13.331,0,29.121-9.772,34.988-21.722l93.725-189.909
				C506.309,202.036,500.248,192.243,486.874,192.243z"/>
                    </g>
                </g>
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>
    );
};

Portfolio.propTypes  = {
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

export { Portfolio };
export default Portfolio;