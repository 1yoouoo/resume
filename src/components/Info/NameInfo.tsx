import React from 'react';
import { styled } from 'styled-components';

const NameInfo = () => {
  return (
    <Wrapper>
      <Name>이지윤</Name>
      <Desc>프론트 엔지니어</Desc>
    </Wrapper>
  );
};

export default NameInfo;

const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: 35px;
  font-weight: 100;
`;
const Desc = styled.span`
  padding-top: 5px;
  color: #a7a7a7;
  font-weight: 100;
`;
