import React, {useState} from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Burger from './Burger';
import Revolve from './Revolve';
import {Wrapper} from './style';

export const NotFound = ({skinColor, switcherColor}) => {
    const [randomNumber, setRandomNumber] = useState(2);

    useEffect(() => {
        const random = Math.floor(Math.random() * 11);
        setRandomNumber(random);
    }, []);
    return(
        <Wrapper id="container" switcherColor={switcherColor}>

            <Helmet>
                <title>Manish Jha Portfolio | 404 error Page</title>
                <link rel="canonical" href="https://mkwhomanish.netlify.app/404" />
            </Helmet>

            {
                randomNumber % 2 === 0 ? (

                    <Burger skinColor={skinColor} switcherColor={switcherColor} />

                ) : (
                    <Revolve switcherColor={switcherColor} />
                )
            }
            
        </Wrapper>
    );
};

NotFound.propTypes = {
    skinColor: PropTypes.object,
    switcherColor: PropTypes.object
};

const mapStateToProps = (state) => {
    return{
        skinColor: state.color.skinColor,
        switcherColor: state.color.switcherColor
    };
};

export default connect(mapStateToProps)(NotFound);