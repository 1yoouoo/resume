import React from 'react';
import styled from 'styled-components';

const CurrentYear = new Date().getFullYear();

const Wrapper = styled.div`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  color: #858585;
`;

const Copyright = () => {
  return <Wrapper>© {CurrentYear} 1yoouoo. All rights reserved.</Wrapper>;
};

export default Copyright;
