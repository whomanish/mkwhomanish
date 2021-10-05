import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icons, Item, NavButton, Nav, Menu, List, ListItem } from './style';
import { NAV_MENU } from '../../utils/CONSTANTS';
import { createIcon } from '../../utils/utils';

const NavigationMenu = ({switcherColor}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(useLocation().pathname.slice(1) === '' ? 'home' : useLocation().pathname.slice(1));

    const navMenuClick = (menu) => {
        setActive(menu);
        setIsOpen(false);
    };
    return (
        <NavButton id="navigation" color={switcherColor} className="is-fixed">
            <Menu onClick={() => setIsOpen(!isOpen)} open={isOpen}
                aria-label={'Navigation Menu'}><span aria-hidden={true}/>
            </Menu>
            <Nav id="main-navigation">
                <List open={isOpen}>
                    {
                        Object.keys(NAV_MENU).map((menu, index) =>
                            <ListItem key={menu+index}>
                                <Link to={`/${menu}`} onClick={() => navMenuClick(menu)} className={`link-page ${menu === active ? 'active' : ''}`}>
                                    <Icons>{createIcon(NAV_MENU[menu] === 'Case Study' ? 'Portfolio' : NAV_MENU[menu])}</Icons>
                                    <Item> {NAV_MENU[menu]} </Item>
                                </Link>
                            </ListItem>
                        )
                    }
                </List>
            </Nav>
        </NavButton>
    );
};

NavigationMenu.propTypes = {
    switcherColor: PropTypes.object
};

const mapStateToProps = state => {
    return {
        switcherColor: state.color.switcherColor,
    };
};

export default connect(mapStateToProps)(NavigationMenu);