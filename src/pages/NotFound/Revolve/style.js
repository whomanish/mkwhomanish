import styled from 'styled-components';

export const Wrapper = styled.div`

    text-align:center;
    
    .st0{font-family:'FootlightMTLight';}
    .st1{font-size:83.0285px;}
    .st2{fill:gray;}

    svg{
        width: 500px;
        height: 400px;
        text-align: center;
        fill: ${props => props.switcherColor};
    }
    path#XMLID_5_ {
        filter: url(#blurFilter4);
    }
    path#XMLID_11_ ,path#XMLID_2_ {
    }
    .circle{
    animation: out 2s infinite ease-out;
    }
    .message{
        color:${props => props.switcherColor};
    }
    .message:after{
        content:"]";
    }
    .message:before{
        content:"[";
    }

    .message:after, .message:before {
    
    color: ${props => props.switcherColor};
    font-size: 20px;
    -webkit-animation-name: opacity;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: opacity;
            animation-name: opacity;
    -webkit-animation-duration: 2s;
            animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            margin:0 50px;
    }

    @-webkit-keyframes opacity {
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    }

    @keyframes opacity {
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    }

    @keyframes out {
    0% {r:1;  opacity: 0.9 ;}
    25%{r:5;  opacity: 0.3 ;}
    50%{r:10; opacity: 0.2 ;}
    75%{r:15;opacity:0.1;}
        100% {r:20;opacity:0;}
    }


    @media (max-width: 600px){
        svg{
            width: 300px;
        }
        .message:after, .message:before {
            margin: 0 25px;
        }
    }


`;