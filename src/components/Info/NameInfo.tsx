import React from 'react';
import { styled } from 'styled-components';

const NameInfo = () => {
  return (
    <Wrapper>
      <Name>이지윤</Name>
      <Desc>Frontend Engineer</Desc>
    </Wrapper>
  );
};

export default NameInfo;

const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: 50px;
  font-weight: 800;
`;
const Desc = styled.span`
  padding-top: 5px;
  color: #828181;
`;
