import styled from 'styled-components';


export const ContactWrapper = styled.div`

    color: ${(props) => props.skinColor === 'dark' ? '#fff' : '#404854'};

    background-color: ${(props) => props.skinColor === 'dark' ? '#292929' : props.skinColor};

    #contact-content {
        padding-bottom: 100px;
    }

    p {
        margin: 10px 0 25px;
    }

    .box {
        background-color: ${props => props.skinColor === 'dark' ? '#383838' : '#f7f7f7'};
        padding: 48px 30px 30px;
        margin-bottom: 30px;
        position: relative;
        display: flex;
    }

    .box p {
        margin: 0;
        font-weight: 500;
        font-size: 21px;
        width: 100%;
        text-align: center;
        color: ${props => props.skinColor === 'dark' ? '#fff' : '#383838'};
    }

    .box > span {
        width: 54px;
        height: 54px;
        text-align: center;
        line-height: 54px;
        border-radius: 50%;
        font-size: 23px;
        color: #fff;
        position: absolute;
        top: -27px;
        left: 0;
        right: 0;
        margin: 0 auto;
        background-color: ${props => props.switcherColor};
    }

    .separator {
        height: 1px;
        width: 250px;
        background-color: #ddd;
        margin: 15px auto 45px;
    }

    h4 {
        text-transform: capitalize;
        font-weight: 600;
        margin-bottom: 18px;
        font-family: "Playfair Display", serif;
        font-size: 28px;
        line-height: 28px;
    }

    .social li a {
        border-radius: 50%;
        text-align: center;
        display: block;
        font-size: 17px;
        margin-right: 16px;
        transition: 0.3s;
        height: 40px;
        width: 40px;
        line-height: 40px;
        background-color: ${props => props.skinColor === 'dark' ? '#383838' : '#f7f7f7'};
    }

    .social li:last-child a {
        margin-right: 0;
    }

    .social li a:hover {
        color: #fff;
    }

    /* Contact Form */

    input[type="text"],
    input[type="email"] {
        border: 1px solid ${props => props.skinColor === 'dark' ? '#292929' : '#ddd'};
        background-color: ${props => props.skinColor === 'dark' ? '#383838' : '#fff'};
        color: ${props => props.skinColor === 'dark' ? '#fff' : '#000'};
        width: 100%;
        padding: 13px 28px;
        outline: none !important;
        transition: 0.15s;
    }

    textarea {
        border: 1px solid ${props => props.skinColor === 'dark' ? '#292929' : '#ddd'};
        background-color: ${props => props.skinColor === 'dark' ? '#383838' : '#fff'};
        color: ${props => props.skinColor === 'dark' ? '#fff' : '#000'};
        width: 100%;
        padding: 13px 28px;
        height: 150px;
        overflow: hidden;
        outline: none !important;
        transition: 0.15s;
        display: block;
    }

    .contactform > div {
        margin-bottom: 30px;
    }

    .expandable {
        overflow: hidden;
        color: red;
        font-size: 14px;
      
        transition: all .5s ease-in-out;
        height: 0;
    }
       
    .expandable.show {
        height: 50px;
    }

    input[type="text"]:focus,
    input[type="email"]:focus , textarea:focus{
        border: 1px solid ${props => props.switcherColor};
    }

    .form-message {
        margin: 30px 0 0;
    }

    .output_message {
        display: none;
        color: #fff;
        height: 46px;
        line-height: 46px;
        border-radius: 30px;
        font-weight: 600;
    }

    .output_message.success {
        background: #3fd38c;
        display: block;
    }

    .output_message.error {
        background: #f73a43;
        display: block;
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
    }
`;