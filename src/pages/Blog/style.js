import styled from 'styled-components';

export const BlogWrapper = styled.div`
    color: ${(props) => props.skinColor === 'dark' ? '#fff' : '#404854'};

    background-color: ${(props) => props.skinColor === 'dark' ? '#292929' : props.skinColor};
    .post-container {
        max-width: 850px;
        margin: 0 auto 93px;
    }

    .post-thumb {
        position: relative;
        overflow: hidden;
    }

    .post-thumb a {
        position: relative;
        overflow: hidden;
    }

    .post-thumb a img {
        max-width: 900px;
        width: 100%;
        transform: scale(1);
        transition: 0.3s;
    }

    .post-container .post-thumb:hover {
        cursor: pointer;
    }

    .post-container:hover .post-thumb img {
        transform: scale(1.1);
    }

    .post-date {
        height: 85px;
        right: 15px;
        text-align: center;
        padding: 6px 10px;
        border-radius: 4px;
        flex-direction: column;
        margin-right: 30px;
        color: #fff;
        font-weight: 600;
        background-color: ${props => props.switcherColor};
    }

    .post-content {
        background: ${props => props.skinColor === 'dark' ? '#383838' : '#f7f7f7'};
        padding: 27px 25px 22px;
        display: flex;
    }

    .entry-header a {
        font-family: "Playfair Display", serif;
        font-size: 27px;
        line-height: 27px;
        margin: 30px 0 9px;
        text-decoration: none;
        font-weight: 700;
        color: ${props => props.skinColor === 'dark' ? '#fff' : '#404854'};
    }

    .entry-header a:hover {
        color: ${props => props.skinColor === 'dark' ? '#fff' : '#404854'};
    }

    .entry-header p {
        margin: 14px 0 0;
        color: ${props => props.skinColor === 'dark' ? '#fff' : '#404854'};
    }

    .allposts {
        margin-bottom: 93px;
    }

    .single-post-container {
        margin-top: 80px !important;
    }

    .single-post-container h2 {
        text-transform: capitalize;
        font-size: 27px;
        line-height: 27px;
        margin: 10px 0 22px;
        text-decoration: none;
        font-weight: 700;
        font-family: "Playfair Display", serif;
    }

    .single-post-container img {
        margin: 30px 0 25px;
        border-radius: 5px;
    }

    .single-post-container p {
        color: #666;
    }

    .meta {
        font-size: 13px;
        border-radius: 5px;
        background: #f7f7f7;
    }

    .meta > span {
        border-radius: 5px;
        padding: 12px 14px 5px;
        margin: 0 7px 7px 0;
        display: inline-block;
        position: relative;
    }

    .meta > span:not(:last-child):after {
        position: absolute;
        right: -7px;
        height: 15px;
        width: 1px;
        content: "";
        top: 14px;
        background-color: #ddd;
    }

    .meta > span span {
        font-size: 16px;
        vertical-align: text-bottom;
        display: inline-flex;
        margin-right: 7px;
    }

    .link-blog {
        margin-bottom: 15px;
        display: block;
        font-weight: 500;
    }

    .link-blog span {
        font-size: 18px;
        vertical-align: text-bottom;
    }

    .link-blog:hover,
    .link-blog:focus {
        text-decoration: none !important;
        color: #212529;
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