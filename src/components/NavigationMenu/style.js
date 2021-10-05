import styled, {css} from 'styled-components';

const NavButton = styled.div`
    ul {
        position: fixed;
        width: 100%;
        max-width: 200px;
        bottom: auto;
        top: 40px;
        right: 40px;
        background: #383838;
        padding: 15px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        z-index: 2;
        backface-visibility: hidden;
        transform-origin: 100% 0;
        transition: transform 0.3s, visibility 0s 0.3s;
    }

    ul li {
        display: block;
        cursor: pointer;
    }

    ul li a {
        padding: 12px 17px 11px 48px;
        margin-left: 0;
        text-transform: uppercase;
        position: relative;
        text-decoration: none;
        font-weight: 600;
        transition: 0.15s;
        font-size: 17px;
        display: block;
        color: #fff;
    }

    ul li a:before {
        position: absolute;
        content: "";
        left: -18px;
        top: 14px;
        background-color: ${(props) => props.color};
        width: 4px;
        height: 18px;
        border-radius: 0 10px 10px 0;
        transition: 0.1s;
        opacity: 0;
    }

    ul li a:hover,
    ul li a:active {
        color: ${(props) => props.color};
    }

    ul li a:hover svg,
    ul li a:active svg {
        fill: ${(props) => props.color};
    }

    ul li a:hover:before,
    ul li a.active:before {
        color: ${(props) => props.color};
        opacity: 1;
        left: -15px;
    }

    ul li a.active {
        color: ${(props) => props.color};
        pointer-events: none;
    }

    ul li a.active svg {
        fill: ${(props) => props.color};
    }
`;

const Nav = styled.nav`

@media only screen and (max-width: 767px){
    top: 25px;
    right: 25px;
}

`;

const List = styled.ul`
    position: fixed;
    width: 90%;
    max-width: 400px;
    right: 5%;
    bottom: 20px;
    box-shadow: 0 0 10px rgba(232, 74, 100, 0.4);
    visibility: ${(props) => props.open ? 'visible': 'hidden'};
    overflow: hidden;
    z-index: 1;
    backface-visibility: hidden;
    transform: ${(props) => props.open ? 'scale(1)': 'scale(0)'};
    transform-origin: 100% 0;
    transition: transform 0.3s, visibility 0s 0.3s;
    transform: scale(0);
    transition: transform 0.3s;

    .has-transitions {
        transition: transform 0.3s, visibility 0s 0.3s;
    }

    ${(props) => props.open && css`
        visibility: visible;
        transform: scale(1);
        transition: transform 0.3s, visibility 0s 0s;

        li:nth-child(1) {
            animation: cd-slide-in 0.2s;
        }
        
        li:nth-child(2) {
            animation: cd-slide-in 0.3s;
        }
        
        li:nth-child(3) {
            animation: cd-slide-in 0.4s;
        }
        
        li:nth-child(4) {
            animation: cd-slide-in 0.5s;
        }
        
        li:nth-child(5) {
            animation: cd-slide-in 0.6s;
        }
    `};
`;

const ListItem = styled.li`
    backface-visibility: hidden;
`;

const Menu = styled.button`
    position: fixed;
    top: 40px;
    right: 40px;
    width: 52px;
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;
    z-index: 3;
    border-radius: 0;
    height: 52px;
    background-color: #383838;
    cursor: pointer;
    outline: none;
    border: none;
    visibility: visible;
    transition: all 0s;
    transform: scale(1);
    animation: cd-bounce-in 0.3s linear;

    span {
        position: absolute;
        display: block;
        width: 24px;
        height: 2px;
        background: #fff;
        top: 50%;
        margin-top: -1px;
        left: 50%;
        margin-left: -12px;
        transition: background 0.3s;
    }

    span::before,
    span::after {
        content: "";
        position: absolute;
        left: 0;
        background: inherit;
        width: 100%;
        height: 100%;
        transform: translateZ(0);
        backface-visibility: hidden;
        transition: transform 0.3s, background 0s;
    }

    span::before {
        top: -7px;
        transform: rotate(0);
    }

    span::after {
        bottom: -7px;
        transform: rotate(0);
    }

    
    ${(props) => props.open && css`
        span {
            background: rgba(232, 74, 100, 0);
        }

        span::before,
        span::after {
            background: #fff;
        }

        span::before {
            top: 0;
            transform: rotate(135deg);
        }

        span::after {
            bottom: 0;
            transform: rotate(225deg);
        }
    `};    
`;

const Item = styled.span`
`;

const Icons = styled.span`
    position: absolute;
    left: 9px;
    top: 5px;
    font-size: 21px;
`;

export { Icons, Item, NavButton, Nav, Menu, List, ListItem };