import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import PropTypes from 'prop-types';
import { BlogWrapper } from './style';

const Blog = ({ skinColor, switcherColor }) => {
    const [blogDetails, setBlogDetails] = useState([]);
    useEffect(() => {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mkwhomanish')
            .then(res => {
                setBlogDetails(res.data.items);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    const toText = (node) => {
        let tag = document.createElement('div');
        tag.innerHTML = node;
        node = tag.innerText;
        return node;
    };
    const shortenText = (text, startingPoint, maxLength) => {
        return text.length > maxLength ?
            text.slice(startingPoint, maxLength) :
            text;
    };
    const mapMonth = (val) => {
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return month[Number(val) + 1];
    };
    return (
        <BlogWrapper className="section blog-section" id="blog" switcherColor={switcherColor} skinColor={skinColor}>
            <Helmet>
                <title>Manish Jha Portfolio | Blog Page</title>
                <link rel="canonical" href="https://mkwhomanish.netlify.app/blog" />
            </Helmet>
            <div id="blog-content">
                <div className="heading text-left text-md-center">
                    <h2>
						my <span>blog</span>
                    </h2>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            blogDetails.map((val, i) => {
                                return (
                                    <div key={i} className="col-12 post-container">
                                        <div className="post-thumb">
                                            <a href={val.link} target="_blank" rel="noreferrer" className="d-block">
                                                <img src={val.thumbnail} className="img-fluid" alt="Blog Post" />
                                            </a>
                                        </div>
                                        <div className="post-content">
                                            <div className="post-date d-none d-sm-flex">
                                                <span>{val.pubDate.split(' ')[0].split('-')[2]}</span>
                                                <span>{mapMonth(val.pubDate.split(' ')[0].split('-')[1])}</span>
                                                <span>{val.pubDate.split(' ')[0].split('-')[0]}</span>
                                            </div>
                                            <div className="entry-header">
                                                <a href={val.link} target="_blank" rel="noreferrer">{toText(val.title)}</a>
                                                <p>
                                                    {/* {val.description} */}
                                                    {`${'...' + shortenText(toText(val.description), 150, 500) + '...'}`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    {/* <div className="row" >
						<div className="col-12 text-center">
							<span className="btn main-btn allposts"><span>load more</span></span>
						</div>
					</div> */}
                </div>
            </div>
        </BlogWrapper>
    );
};

Blog.propTypes = {
    skinColor: PropTypes.object,
    switcherColor: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        skinColor: state.color.skinColor,
        switcherColor: state.color.switcherColor
    };
};

export default connect(mapStateToProps)(Blog);