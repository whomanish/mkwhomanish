import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { createIcon } from '../../utils/utils';
import { HOME_CONTACT, SOCIAL_ICONS } from '../../utils/CONSTANTS';
import { HomeWrapper } from './style';

const Home = ({ switcherColor, skinColor }) => {
    return (
        <HomeWrapper className="home-section" color={switcherColor} >
            <Helmet>
                <title>Manish Jha Portfolio | Home Page</title>
                <link rel="canonical" href="https://mkwhomanish.netlify.app/" />
            </Helmet>
            <div className="home-content">
                <div className="right-dotted-shape"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-section d-flex align-items-center justify-content-center">
                                <div className="text-center">
                                    <h2>hi ! i’m<span> Manish.</span></h2>
                                    <p>I architect Digital Magic, a Product Manager based in Bangalore, India .</p>
                                    <div className="buttons">
                                        <Link id="link-about" to="/about" className="btn main-btn link-page"><span>more about me</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-social d-none d-sm-block">
                    <ul className="social list-unstyled d-flex m-0">
                        {
                            SOCIAL_ICONS.map((val) =>
                                <li key={val.icon}>
                                    <a title={val.icon} href={val.url} target="_blank" rel="noreferrer">
                                        {createIcon(val.icon, skinColor === 'dark' ? '#fff' : '#212529', val.icon === 'Angellist' ? '1.25rem' : '1rem')}
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="home-contact d-none d-sm-block">
                    <p>
                        {HOME_CONTACT.description}
                        <span className="d-block email">{HOME_CONTACT.email}</span>
                        <span>{HOME_CONTACT.phone}</span>
                    </p>
                </div>
            </div>
        </HomeWrapper>
    );
};

Home.propTypes = {
    skinColor: PropTypes.object,
    switcherColor: PropTypes.object
};

const mapStateToProps = state => {
    return {
        skinColor: state.color.skinColor,
        switcherColor: state.color.switcherColor
    };
};

export default connect(mapStateToProps)(Home);