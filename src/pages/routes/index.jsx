import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import StyleSwitcher from '../../components/StyleSwitcher';
import NavigationMenu from '../../components/NavigationMenu';
import About from '../About';
import Home from '../Home';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Blog from '../Blog';
import ScrollToTop from './ScrollToTop';
import NotFound from '../NotFound';

const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    font-family: "IBM Plex Mono", monospace;
    background-color: ${(props) => props.skinColor === 'dark' ? '#292929' : props.skinColor};
  }
  body p {
    font-size: 17px;
    line-height: 34px;
  }
`;
const Navigation = ({skinColor}) => {
    return (
        <BrowserRouter>
            <GlobalStyle skinColor = {skinColor} />
            <ScrollToTop />
            <StyleSwitcher />
            <NavigationMenu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/work" component={Portfolio} />
                <Route exact path="/about" component={About} />
                <Route path="/404" component={NotFound} />
                <Redirect from='*' to='/404' />
            </Switch>
        </BrowserRouter>
    );

};
Navigation.propTypes = {
    skinColor: PropTypes.object
};

const mapStateToProps = (state) => {
    return{
        skinColor: state.color.skinColor
    };
};

export default connect(mapStateToProps)(Navigation);