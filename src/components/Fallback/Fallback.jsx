import React, { useState, useEffect } from 'react';
import { HashLoader as Loader } from 'react-spinners';
import { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Spinner, Wrapper } from './style';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const Fallback = ({loading, switcherColor }) => {
    const [show, setShow] = useState(loading);
    useEffect(() => {
        setShow(loading);
    }, [loading]);

    return (
        <Wrapper>
            <Spinner className="spinner">
                <div className="sweet-loading">
                    <Loader color={switcherColor} loading={show} css={override} size={50} />
                </div>
            </Spinner>
        </Wrapper>
    );
};

Fallback.propTypes = {
    loading: PropTypes.bool,
    switcherColor: PropTypes.object
};

export default Fallback;