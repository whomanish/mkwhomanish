import styled from 'styled-components';

export const PortfolioWrapper = styled.div`
    color: ${(props) => props.skinColor === 'dark' ? '#fff' : '#404854'};

    background-color: ${(props) => props.skinColor === 'dark' ? '#292929' : props.skinColor};
    a {
        color: ${(props) => props.skinColor === 'dark' ? '#fff' : '#404854'};
        background-color: ${(props) => props.skinColor === 'dark' ? '#292929' : props.skinColor};
        text-decoration: none;
    }
    a:hover{
        text-decoration: none;
    }
    #work-content {
        padding-bottom: 85px;
        min-height: 100vh;
        overflow-y: auto;
    }

    .portfolio-container {
        margin-top: -15px;
    }

    /* Grid */

    .grid {
        position: relative;
        margin: 0 auto;
    }

    .grid::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-size: 60px auto;
        -webkit-transition: opacity 0.3s;
        transition: opacity 0.3s;
    }

    .grid--loaded::after {
        opacity: 0;
    }

    .grid__item {
        padding: 15px;
    }

      .grid__item a {
        position: relative;
        transition: 0.3s;
        background-color: transparent; 
    }

      .grid__item a:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 1;
        transition: 0.3s;
    }

      .grid__item a:hover:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0;
    }

      .grid__item a img {
        width: 100%;
    }

      .grid__item--current {
        opacity: 0 !important;
    }

      .item-title-hover {
        white-space: nowrap;
        font-size: 21px;
        padding: 5px 15px;
        font-weight: 700;
        color: #fff;
        border-radius: 5px 5px 5px 0;
        position: fixed;
        z-index: 1000;
        opacity: 0;
        text-transform: uppercase;
        visibility: hidden;
        background-color: ${props => props.switcherColor};
    }

      .item-title-hover .item-category {
        position: absolute;
        top: 100%;
        border-radius: 0 5px 5px 5px;
        left: 0;
        margin-top: -10px;
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
        padding: 5px 15px;
        background-color: ${props => props.switcherColor};
    }

      .item-title-hover.visible {
        opacity: 1;
        visibility: visible;
    }

    /* Preview */

      .preview {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        display: -ms-flex;
        display: -webkit-flex;
        display: flex;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-align-content: center;
        align-content: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        width: 50%;
        height: 100%;
        pointer-events: none;
    }

      .preview::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        -webkit-transition: opacity 0.6s;
        transition: opacity 0.6s;
        background-color: ${(props) => props.skinColor === 'dark' ? '#292929' : props.skinColor};
    }

      .preview--open {
        pointer-events: auto;
    }

      .preview--open::before {
        opacity: 1;
    }

      .clone {
        position: fixed;
        z-index: 110;
        -webkit-transition: -webkit-transform 0.7s;
        transition: transform 0.7s;
        -webkit-backface-visibility: hidden;
    }

      .original {
        position: relative;
        z-index: 120;
        display: block;
        object-fit: contain;
        -webkit-transition: opacity 0.2s;
        transition: opacity 0.2s;
        -webkit-backface-visibility: hidden;
    }

      .preview--open .animate {
        -webkit-transition: -webkit-transform 0.6s, opacity 0.2s;
        transition: transform 0.6s, opacity 0.2s;
    }

      .animate {
        -webkit-transition: -webkit-transform 0.7s, opacity 0.2s;
        transition: transform 0.7s, opacity 0.2s;
    }

      .description--grid {
        display: none;
    }

      .description--preview {
        position: absolute;
        z-index: 140;
        width: 100%;
        left: 100%;
        top: 0;
        height: 100%;
        padding: 0 30px;
        display: -ms-flex;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
        opacity: 0;
        -webkit-transition: opacity 1s, -webkit-transform 1s;
        transition: opacity 1s, transform 1s;
        -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        -webkit-transform: translate3d(0, 30px, 0);
        transform: translate3d(0, 30px, 0);
    }

      .description--preview a {
        background-color: transparent;
    }

      .preview--open .description--preview {
        opacity: 1;
        -webkit-transition-delay: 0.2s;
        transition-delay: 0.2s;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

      .description h3 {
        text-transform: capitalize;
        position: relative;
        font-weight: 700;
        font-size: 38px;
        line-height: 38px;
        font-family: "Playfair Display", serif;
        margin: 0;
    }

      .details {
        width: 100%;
    }

      .details ul {
        margin: 35px 0;
    }

      .details ul li {
        position: relative;
        display: block;
        opacity: 0;
        -webkit-transition: -webkit-transform 1s, opacity 1s;
        transition: transform 1s, opacity 1s;
        -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0);
        text-transform: capitalize;
        margin: 20px 0;
    }

      .details ul li {
        position: relative;
    }

      .details ul li span:nth-child(2) {
        font-weight: 600;
    }

    .list-unstyled .row:after {
      content: "";
      display: table;
      clear: both;
    }

    .list-unstyled .title {
      display: inline-flex;
      width: 25%;
      float: left;
    }

    .list-unstyled .desc {
      display: inline-flex;
      float: left;
      width: 75%;
    }

      .details .main-btn {
        opacity: 0;
        -webkit-transition: -webkit-transform 1s, opacity 1s;
        transition: transform 1s, opacity 1s;
        -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0);
    }

      .preview--open .details ul li,
      .preview--open .details .main-btn {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

      .preview--open .details ul li:nth-child(1) {
        -webkit-transition-delay: 0.2s;
        transition-delay: 0.2s;
    }

      .preview--open .details ul li:nth-child(2) {
        -webkit-transition-delay: 0.3s;
        transition-delay: 0.3s;
    }

      .preview--open .details ul li:nth-child(3) {
        -webkit-transition-delay: 0.4s;
        transition-delay: 0.4s;
    }

      .preview--open .details ul li:nth-child(4) {
        -webkit-transition-delay: 0.5s;
        transition-delay: 0.5s;
    }

      .preview--open .details ul li:nth-child(5) {
        -webkit-transition-delay: 0.6s;
        transition-delay: 0.6s;
    }

      .preview--open .details .main-btn {
        -webkit-transition-delay: 0.7s;
        transition-delay: 0.7s;
    }

      .action {
        font-size: 24px;
        margin: 0;
        padding: 0;
        cursor: pointer;
        vertical-align: top;
        border: none;
        background: none;
    }

      .action:hover,
      .action:focus {
        outline: none;
    }

      .action--close {
        position: fixed;
        z-index: 150;
        top: 40px;
        right: 40px;
        opacity: 0;
        -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
        transition: opacity 0.3s, transform 0.3s;
        -webkit-transform: scale3d(0.6, 0.6, 1);
        transform: scale3d(0.6, 0.6, 1);
    }

      .action--close > span {
        height: 55px;
        width: 55px;
    }

      .preview--image-loaded .action--close {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    .navigation-close-line {
        height: 45px;
        width: 4px;
        border-radius: 10px;
        position: absolute;
        transform: rotate(-45deg);
        top: 5px;
        left: 26px;
        transition: 0.15s;
        background-color: ${(props) => props.skinColor === 'dark' ? '#fff' : '#292929'};
    }

      .action--close > span:hover .navigation-close-line {
        background-color: ${props => props.switcherColor};
    }

    .navigation-close-line:nth-child(2) {
        transform: rotate(45deg);
    }

    .navigation-close {
        position: absolute;
        right: 43px;
        top: 30px;
        cursor: pointer;
        opacity: 0;
    }

    .masonry-grid {
    /* display: -webkit-box;  */
    /* display: -ms-flexbox;  */
    display: flex;
    flex-wrap: wrap;
    width: auto;
    transition: transform 100ms;
    }
    .masonry-grid_column {
    padding-left: 15px; /* gutter size */
    /* background-clip: padding-box; */
    transition: transform 100ms;
    }

    .heading h2 {
        margin: 100px 0;
        font-size: 80px;
        line-height: 80px;
        text-transform: capitalize;
        font-weight: 700;
        position: relative;
        z-index: 0;
        display: inline-block;
        font-family: "Playfair Display", serif;

        span {
            color: ${props => props.switcherColor};
        }
    }

    .btn {
        font-weight: 600;
        padding: 13px 40px;
        border-radius: 0;
        text-transform: uppercase;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        z-index: 0;
        box-shadow: none !important;
        outline: none !important;
        transition: 0.3s;
        color: #fff !important;
        background-color: ${props => props.switcherColor};
    }

    @media (max-width: 991px){
        .navigation-close-line {
            height: 25px;
            width: 2px;
        }
    }


    @media (max-width: 767px){
        .heading h2 {
            font-size: 35px;
            line-height: 35px;
            display: block;
            margin: 31px 0 70px 25px;
        }

        .heading h2:after {
            position: absolute;
            left: -25px;
            content: "";
            top: 2px;
            height: 100%;
            width: 5px;
            border-radius: 0 10px 10px 0;
            background: ${props => props.switcherColor};
        }

        .description--grid {
            position: relative;
            display: block;
        }

        .description h3 {
            margin-top: 30px;
            font-size: 26px;
            line-height: 26px;
            pointer-events: none;
            margin-left: 0;
        }

        .details {
            pointer-events: none;
        }

        .details ul, .details ul li:first-child {
            margin-top: 0;
        }

        .details ul li, .details .main-btn {
            opacity: 1;
        }
    }
`;