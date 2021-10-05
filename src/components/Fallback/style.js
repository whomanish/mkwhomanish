import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    text-align: center;
    left: 0;
    bottom: 0;
    background: rgb(53 52 52 / 70%);
    z-index: 1073;
    top: 0;
    align-items: center;
    justify-content: center;
`;

export const Spinner = styled.div`
    position: absolute;
    height: 100px;
    width: 100px;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    /* background: url(/link/to/your/image); */
    background-size: 100%;
`;