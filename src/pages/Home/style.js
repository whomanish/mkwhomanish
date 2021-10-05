import styled from 'styled-components';

const HomeWrapper = styled.div`
    
    height: 100%;
    width: 100%;
    display: block;
    overflow: hidden;
    align-items: center;
    justify-content: center;

    .home-content {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .home-content {
        background-image: url(${props => props.path});
        // background-image: url("https://images.unsplash.com/photo-1603803576810-4606cfec1517?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80");
        // background-image: url("public/assests/Website_Wallpaper.jpeg");
        background-size: cover;
        background-position: center;
    }

    .home-content:before,
    .home-content:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.7);
    }
    .right-dotted-shape {
        position: absolute;
        left: -190px;
        top: -90px;
        height: 300px;
        width: 260px;
        transform: rotate(22deg);
        z-index: 1;
    }
    .right-dotted-shape, .badges:after {
        background: ${(props) => `radial-gradient(circle at center, ${props.color} 10%, transparent 20%), transparent`};
        background-size: 19px 18px;
    }


    .home-social {
        position: absolute;
        right: 30px;
        bottom: 24px;
    }

    .home-social .social li a {
        background: transparent !important;
        margin-right: 0;
        font-size: 16px;
        width: 33px;
    }

    .home-contact {
        position: absolute;
        left: 40px;
        bottom: 30px;
    }

    .home-contact p {
        margin: 0;
        font-size: 13px;
        line-height: 23px;
    }

    .home-contact .email {
        color: ${props => props.color};
        font-weight: 500;
    }

    .hero-section {
        height: 100%;
    }

    .hero-section h2 {
        font-size: 130px;
        line-height: 130px;
        text-transform: capitalize;
        margin: 0;
        font-weight: 400;
        font-family: "Playfair Display", serif;
    }

    .hero-section h2 span {
        color: ${(props) => props.color};
        font-weight: 500;
    }

    .hero-section p {
        margin: 30px 0 42px;
        font-family: "IBM Plex Mono", monospace;
    }
    
    .social li a {
        padding: 10px;
        cursor: pointer;
    }
    
    .social li a:hover svg {
        cursor: pointer;
        fill: ${props => props.color};
    }

    /* Home Animated Background */

    .circles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .circles li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        animation: animate 25s linear infinite;
        bottom: -150px;
    }

    .circles li:nth-child(1) {
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
    }

    .circles li:nth-child(2) {
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }

    .circles li:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }

    .circles li:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }

    .circles li:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }

    .circles li:nth-child(6) {
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
    }

    .circles li:nth-child(7) {
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
    }

    .circles li:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }

    .circles li:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
    }

    .circles li:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
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
        background-color: ${(props) => props.color};
        color: #fff !important;
    }

    @keyframes animate {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
        }

        100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
        }
    }

    @media (max-width: 991px) {
        .hero-section h2 {
            font-size: 60px;
            line-height: 60px;
        }
    }

    @media (max-width: 767px) {
        .hero-section h2 {
            font-size: 45px;
            line-height: 45px;
        }
    }

    @media (max-width: 576px) {
        .hero-section h2 {
            font-size: 35px;
            line-height: 35px;
        }

        .hero-section p {
            margin: 20px 0 25px;
        }

        .right-dotted-shape {
            left: -30px;
            bottom: -240px;
            transform: rotate(112deg);
            top: initial;
            right: initial;
        }
    }
`;

export { HomeWrapper };