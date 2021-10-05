import styled from 'styled-components';

const AboutWrapper = styled.div`

    color: ${(props) => props.skinColor === 'dark' ? '#fff' : '#404854'};

    background-color: ${(props) => props.skinColor === 'dark' ? '#292929' : props.skinColor};

    h2.subtitle {
        text-transform: capitalize;
        font-weight: 700;
        font-size: 38px;
        line-height: 38px;
        font-family: "Playfair Display", serif;
        color: ${(props) => props.skinColor === 'dark' ? '#fff' : '#404854'};
    }

    h2.subtitle span {
        font-size: 33px;
        vertical-align: bottom;
        margin-right: 10px;
    }

    /* Personal Infos */

    ul {
        margin: 9px 0 26px;
    }

    .personal-info li p {
        font-size: 17px;
        margin: 12px 0;
        font-weight: 600;
    }

    .personal-info li p span {
        color: ${props => props.skinColor === 'dark' ? '#fff' : '#666'};
        font-weight: 400;
    }

    .personal-info li p .material-icons {
        display: inline-flex;
        vertical-align: text-bottom;
        margin-right: 10px;
    }

    .photo {
        border: 4px solid ${props => props.skinColor === 'dark' ? '#444' : '#ddd'};;
        width: 100%;
        max-width: 450px;
        min-width: 250px;
        min-height: 300px;
        margin: 0 auto;
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

    /* Resume */

    .resume {
        padding: 100px 0;
    }

    .owl-stage {
        display: flex;
    }

    .resume-item {
        position: relative;
        background: ${props => props.skinColor === 'dark' ? '#383838' : '#f7f7f7'};
        padding: 30px;
        border-radius: 0;
        cursor: grab;
        width: auto;
        height: 100%;
    }

    .company {
        opacity: 0.5;
    }
    
    .resume-item h5 {
        font-size: 21px;
        font-weight: 600;
        font-family: "Playfair Display", serif;
        margin-top: -7px;
        width: 170px;
        word-break: break-word;
    }

    .resume-item h6 {
        padding: 7px 7px 6px;
        font-size: 14px;
        text-transform: uppercase;
        border-radius: 5px;
        color: #fff;
        background-color: ${props => props.switcherColor};
    }

    .resume-item p {
        color: ${props => props.skinColor === 'dark' ? '#fff' : '#666'};
        margin-bottom: 0;
        font-size: 14px;
        line-height: 28px;
    }

    .resume-header {
        margin: 13px auto;
    }

    .resume-header button {
        font-size: 22px;
        display: inline-block;
        text-transform: uppercase;
        position: relative;
        cursor: pointer;
        transition: 0.15s;
        font-weight: 600;
        padding: 27px;
        background-color: transparent;
        border: 0;
        color: ${props => props.skinColor === 'dark' ? '#999' : '#ddd'};
    }
    .resume-header button.active,  .resume-header button:hover {
        color: ${props => props.switcherColor};
    }

    .resume-header button:first-child:after {
        position: absolute;
        content: "";
        right: -4px;
        top: 34px;
        height: 21px;
        width: 1px;
        background-color: #ddd;
        pointer-events: none;
    }

    .owl-theme .owl-dots .owl-dot span {
        background: #e9ecef;
        margin: 5px 10px;
    }

    .owl-dots {
        text-align: center;
        margin-top: 60px;
    }

    .owl-carousel {
        overflow-y: hidden;
    }

    .visiblecarousel {
        opacity: 1;
        height: auto;
        visibility: visible;
        display: block;
    }

    .hiddencarousel {
        opacity: 0;
        height: 0;
        visibility: hidden;
        display: none;
    }

    .owl-theme .owl-dots .owl-dot {
        outline: none;
    }

    .owl-theme .owl-dots .owl-dot span {
        transition: 0.15s;
    }

    .owl-theme .owl-dots .owl-dot.active span {
        width: 40px;
        background-color: ${props => props.switcherColor};
    }
    .owl-theme .owl-dots .owl-dot:hover span {
        background-color: ${props => props.switcherColor};
    }
    /* Skills */

    .skills {
        padding: 100px 15px 55px;
    }

    .skills h4 {
        margin-bottom: 50px;
    }

    .skill-text {
        display: block;
        margin-bottom: 18px;
        font-size: 17px;
        font-weight: 600;
        color: ${(props) => props.skinColor === 'dark' ? '#fff' : '#404854'};
        text-transform: uppercase;
    }

    .chart-bar {
        display: block;
        height: 7px;
        position: relative;
        width: 100%;
        background: #e9ecef;
        margin-bottom: 45px;
    }

    .chart-bar > .item-progress {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 1%;
        background-color: ${props => props.switcherColor};
    }

    .chart-bar > .percent {
        height: 32px;
        margin-top: -48px;
        position: absolute;
        right: calc(100% - 40px);
        width: 46px;
        color: #fff;
        border-radius: 4px;
        font-weight: 600;
        font-size: 14px;
        line-height: 33px;
        top: 50%;
        text-align: center;
        margin-right: -24px;
        background-color: ${props => props.switcherColor};
    }

    .arrow {
        display: inline-block;
        padding: 4px;
        transform: translateY(33.5px) rotate(45deg) skew(3deg, 3deg) translateX(-27px);
        bottom: 10px;
        position: absolute;
        background-color: ${props => props.switcherColor};
    }

    /* Badges */

    .badges {
        padding: 100px 0;
        position: relative;
        background-color: ${props => props.skinColor === 'dark' ? '#383838' : '#f7f7f7'};
    }

    .badges:after {
        position: absolute;
        left: -210px;
        bottom: 60px;
        height: 300px;
        width: 260px;
        transform: rotate(22deg);
        z-index: 1;
        content: "";
    }

    .badges span {
        display: inline-flex;
        background-color: ${props => props.switcherColor};
        height: 60px;
        width: 60px;
        line-height: 60px;
        border-radius: 50%;
        font-size: 30px;
        justify-content: center;
        align-items: center;
    }

    .badges h3 {
        letter-spacing: 2px;
        display: block;
        color: ${props => props.skinColor === 'dark' ? '#fff' : '#444'};
        font-size: 55px;
        font-weight: 800;
        line-height: 55px;
        margin: 25px 0 18px;
    }

    .badges p {
        font-weight: 600;
        color: ${props => props.skinColor === 'dark' ? '#fff' : '#444'};
        font-size: 21px;
        text-transform: capitalize;
        margin: 0;
    }

    .badges::after{
        background: radial-gradient(circle at center, ${props => props.switcherColor} 10%, transparent 20%), transparent;
        background-size: 19px 18px;
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

        span{
            color: ${props => props.switcherColor};
        }
    }

    @media (max-width: 991px){
          .photo {
            margin-bottom: 40px;
        }

        .badges:after {
            left: -230px;
        }
    }
    @media (max-width: 767px){
          .resume-header button {
            font-size: 20px;
        }

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
    }

    @media (max-width: 576px){
        .personal-list-container.personal-list-container-1 ul {
            margin-bottom: 18px;
        }
        .personal-list-container.personal-list-container-1 ul li:last-child p {
            margin-bottom: 0;
        }
        .personal-list-container.personal-list-container-2 ul li:first-child p,
        .personal-list-container.personal-list-container-2 ul {
            margin-top: 0;
        }
    }

`;

export { AboutWrapper };