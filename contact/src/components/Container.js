import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media } from '../lib/style-utils';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width: 700px;
    margin: 0 auto; /* 가운데 정렬 */
    padding: 1rem;
   /* 테스트용 색상, 추후 지워짐 */

    /* 모바일 크기: 모듈화 전
    @media (max-width: 768px) {
        width: 100%;
    }
    */

    /* 모바일 크기: 모듈화 후 */
    ${media.mobile`
        width: 100%;    
    `}
`;

// visible 이 false 면 null 반환
const Container = ({visible, children}) => visible ? (
    <Wrapper>
        {children}
    </Wrapper>
) : null;

// PropTypes 설정
Container.propTypes = {
    visible: PropTypes.bool
};

export default Container;