import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';
import Fallback from '../../components/Fallback';
import { PORTFOLIO_DETAILS } from '../../utils/CONSTANTS';
import { PortfolioWrapper } from './style';


const List = ({ details }) => {
    return (
        <ul className="list-unstyled">
            {
                Object.keys(details).map((detail, i) =>
                    <li key={i} className="row">
                        <span className="title">{detail} :</span>
                        <span className="desc">{details[detail]}</span>
                    </li>
                )
            }
        </ul>
    );
};

const Portfolio = ({ skinColor, switcherColor }) => {
    const [tooltipText, setTooltipText] = useState({
        text1: '',
        text2: ''
    });
    const [showPreview, setShowPreview] = useState(false);
    const [previewData, setPreviewData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let timeout = setTimeout(() => setLoading(false), 3000);
        return () => {
            setLoading(false);
            clearTimeout(timeout);
        };
    }, []);
    const breakpointColumnsObj = {
        default: 3,
        1200: 3,
        997: 2,
        767: 1
    };

    const mouseMove = (e, text1, text2) => {
        if (window.innerWidth > 768) {
            const toolTip = document.getElementById('tooltip');
            setTooltipText({
                text1,
                text2
            });
            let x = e.clientX,
                y = e.clientY;
            toolTip.style.top = (y + 20) + 'px';
            toolTip.style.left = (x) + 'px';
            toolTip.classList.add('visible');
        }
    };

    const mouseLeave = () => {
        const toolTip = document.getElementById('tooltip');
        setTooltipText({
            text1: '',
            text2: ''
        });
        toolTip.style.top = 0;
        toolTip.style.left = 0;
        toolTip.classList.remove('visible');
    };

    const previewPage = (e, i) => {
        if (window.innerWidth > 768) {
            setShowPreview(true);
            setPreviewData(PORTFOLIO_DETAILS[i]);
            mouseLeave(e);
        }
    };

    const closePreview = () => {
        setPreviewData({});
        setShowPreview(false);
    };

    const shortenText = (text = '', startingPoint = 0, maxLength = 1) => {
        return text.length > maxLength ?
            `${text.slice(startingPoint, maxLength)}...` :
            text;
    };
    return (
        <>
            {loading && <Fallback loading={loading} switcherColor= {switcherColor}/> }
            <PortfolioWrapper className="section work-section" id="work" style={{ display: 'block' }}
                switcherColor={switcherColor} skinColor={skinColor}
            >
                <Helmet>
                    <title>Manish Jha Portfolio | Work Details Page</title>
                    <link rel="canonical" href="https://mkwhomanish.netlify.app/work" />
                </Helmet>
                <div id="work-content">
                    <div className="heading text-left text-md-center">
                        <h2>
                        my <span>case study</span>
                        </h2>
                    </div>
                    <div className="portfolio-container">

                        <div id='tooltip' className="item-title-hover">
                            {shortenText(tooltipText.text1, 0, 15)}
                            <span className="item-category">{shortenText(tooltipText.text2, 0, 15)}</span>
                        </div>

                        {
                            showPreview ? (
                                <div className="preview preview--open preview--image-loaded">
                                    <button className="action action--close" onClick={closePreview}>
                                        <span className="position-relative d-block">
                                            <span className="navigation-close-line"></span>
                                            <span className="navigation-close-line"></span>
                                        </span>
                                    </button>
                                    <div className="description description--preview">
                                        <h3>{previewData.title}</h3>
                                        <div className="details">
                                            <List details={previewData.details} />
                                            <a href={previewData.link} target="_blank" rel="noreferrer">
                                                <span className="btn main-btn d-none d-md-inline-block">
                                            preview
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <img className="original" src={typeof window === undefined || !window.location.origin.includes('localhost') ? previewData.img : previewData.img} style={{ opacity: 1, maxWidth: 'calc(50vw - 0px)', maxHeight: 'calc(100vh - 0px)', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)' }} alt={previewData.title} />
                                    <img className="clone" src={previewData.img} style={{ opacity: 0, width: '315px', height: '429px', top: '-95px', left: '497.5px', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)' }} alt={previewData.title} />
                                </div>
                            ) : (

                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="masonry-grid"
                                    columnClassName="masonry-grid_column"
                                >

                                    {
                                        PORTFOLIO_DETAILS.map((val, i) =>
                                            <div key={i} className="grid__item" onMouseMove={(e) => mouseMove(e, val.title, val.category)} onMouseLeave={(e) => mouseLeave(e)} onClick={(e) => previewPage(e, i)}>
                                                <div className="d-block" data-title={val.title} data-category={val.category}>
                                                    <img className="img-fluid" src={val.img} alt={val.title} style={{ width: '100%' }} />
                                                    <div className="description description--grid">
                                                        <h3>{val.title}</h3>
                                                        <div className="details">
                                                            <List details={val.details} />
                                                            <a href={val.link} target="_blank" rel="noreferrer"> <span className="btn main-btn d-none d-md-inline-block">
                                                            preview
                                                            </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href={val.link} target="_blank" rel="noreferrer">
                                                    <span className="btn main-btn d-inline-block d-md-none">
                                                preview
                                                    </span>
                                                </a>
                                            </div>
                                        )
                                    }
                                </Masonry>
                            )
                        }
                    </div>
                </div>
            </PortfolioWrapper>
        </>
    );
};

List.propTypes = {
    details: PropTypes.object
};

Portfolio.propTypes = {
    skinColor: PropTypes.object,
    switcherColor: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        skinColor: state.color.skinColor,
        switcherColor: state.color.switcherColor
    };
};

export default connect(mapStateToProps)(Portfolio);