/* eslint-disable no-undef */
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { chunk } from 'lodash';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Fallback from '../../components/Fallback';
import { AboutWrapper } from './style';
import { createIcon } from '../../utils/utils';
import { ABOUT_ME, RESUME_TAB, RESUME_DETAILS, OVERALL_DETAILS, SKILLS, PERSONAL_INFO } from '../../utils/CONSTANTS';
import { useEffect } from 'react';

const About = ({skinColor, switcherColor}) => {
    const options = {
        loop: false,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    };

    const [isActiveId, setIsActiveId] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let timeout = setTimeout(() => setLoading(false), 2000);
        return () => {
            setLoading(false);
            clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        if(!loading){
            tabClick(0);
        }
    }, [loading]);


    const tabClick = (id) => {
        setIsActiveId(id);

        const elem0 = $('#carousel0');
        const elem1 = $('#carousel1');

        if(id === 0){
            elem1.owlCarousel('destroy');
            elem1.removeClass('visiblecarousel').addClass('hiddencarousel');
            elem0.removeClass('hiddencarousel').addClass('visiblecarousel');
            elem0.owlCarousel({...options});
            
        } else {
            elem0.owlCarousel('destroy');
            elem0.removeClass('visiblecarousel').addClass('hiddencarousel');
            elem1.removeClass('hiddencarousel').addClass('visiblecarousel');
            elem1.owlCarousel({...options});
        }
        $('.owl-dots button').attr('aria-hidden', 'true');
    };
    
    
    return (
        <>
            {loading && <Fallback loading={loading} switcherColor= {switcherColor} /> }
            <AboutWrapper className="section about-section" id="about" switcherColor={switcherColor} skinColor={skinColor} style={{display: 'block'}}>
                <Helmet>
                    <title>Manish Jha Portfolio | About Page</title>
                    <link rel="canonical" href="https://mkwhomanish.netlify.app/about" />
                    <link rel="preload" href="public/assests/man.jpg" as="image" />
                </Helmet>
                <div id="about-content">
                    <div className="heading text-left text-md-center">
                        <h2>
                    about <span>me</span>
                        </h2>
                    </div>
                    <div className="container infos">
                        <div className="row infos-holder align-items-center">
                            <div className="col-12 col-lg-5">
                                <img className="img-fluid d-block photo" src={typeof window === 'undefined' || !window.location.origin.includes('localhost') ? 'assests/man.jpg' : 'public/assests/man.jpg'} alt="ManishJhaImage" />
                            </div>
                            <div className="col-12 col-lg-7">
                                <p className="m-0">
                                    { ABOUT_ME.description }
                                </p>
                                <div className="row text-nowrap">
                                    {
                                        chunk(PERSONAL_INFO, 3).map((arr, i) => 
                                            <div key={i} className="d-flex col-12 col-sm-6 personal-list-container personal-list-container-2">
                                                <ul className="list-unstyled personal-info w-100">
                                                    {
                                                        arr.map((val, index) =>
                                                            <li key={val.title+index}>
                                                                <p>
                                                                    {createIcon(val.icon, skinColor === 'dark' ? '#fff' : '#666', '', 'material-icons')}
                                                                    <span>{val.title} : </span>{val.subTitle}</p>
                                                            </li>
                                                        )}
                                                </ul>
                                            </div>
                                        )
                                    }
                                </div>
                                <a className="btn main-btn" target="_blank" rel="noreferrer"
                                    href="https://drive.google.com/file/d/1Y_yksxV4O-FzKcaCEYXf_1Z6qBzbKEk0/view?usp=sharing"
                                > <span>download my cv</span></a>
                                {/* <a href="#" className="btn main-btn"><span>download my cv</span></a> */}
                            </div>

                        </div>
                    </div>
                    <div className="w-100 resume">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 pl-0">
                                    <h2 className="subtitle text-center">My resume</h2>
                                </div>
                                <div className="resume-header">

                                    {
                                        Object.keys(RESUME_TAB).map((val, index) =>
                                            <button key={`${val}${index}`} className={index === isActiveId ? 'active' : ''} onClick={() =>tabClick(index)}>{RESUME_TAB[val]}</button>
                                        )
                                    }
                                </div>
                                <div className="col-12 resume-holder">
                                    {
                                        Object.keys(RESUME_TAB).map((value, index) => 
                                            <ReactOwlCarousel key={index} className={'owl-carousel owl-theme'}
                                                {...options} id={`carousel${index}`}
                                            >
                                                <div className="owl-stage-outer">
                                                    <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '2520px'}}>               
                                                        {
                                                            RESUME_DETAILS[value].map((val, i) =>
                                                                <div key={`${val}${i}`} className="owl-item" style={{width: '330px', marginRight: '30px'}}>
                                                                    <div className="resume-item item">
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <h5 className="mb-0">{val.title}</h5>
                                                                            <h6 className="mb-0">{val.time}</h6>
                                                                        </div>
                                                                        <span className="company d-inline-block mb-2">
                                                                            {val.subTitle}</span>
                                                                        <p>{val.description}</p>
                                                                    </div>
                                                                </div>
                                                            )    
                                                        }
                                                    </div>
                                                </div>
                                            </ReactOwlCarousel>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="badges">
                        <div className="container">
                            <div className="row text-center">
                                {
                                    OVERALL_DETAILS.map((val, i) => 
                                        <div key={val+i} className="col-12 col-md-4">
                                            <span>
                                                {createIcon(val.icon)}
                                            </span>
                                            <h3>{val.number}</h3>
                                            <p>{val.title}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="container skills">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="subtitle">
                            My skills</h4>
                            </div>
                            {
                                SKILLS.map((val, i) =>
                                    <div key={val+i} className="col-12 col-md-6">
                                        <span className="skill-text">{val.skill}</span>
                                        <div className="chart-bar">
                                            <span className="item-progress" data-percent={parseInt(val.percent, 10)} style={{width: val.percent}}></span>
                                            <span className="percent" style={{right: (100 - parseInt(val.percent, 10)).toString()+'%'}}>{val.percent}<span className="arrow"></span></span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </AboutWrapper>
        </>
    );
};

About.propTypes = {
    skinColor: PropTypes.object,
    switcherColor: PropTypes.object
};

const mapStateToProps = (state) => {
    return{
        skinColor: state.color.skinColor,
        switcherColor: state.color.switcherColor
    };
};

export default connect(mapStateToProps)(About);