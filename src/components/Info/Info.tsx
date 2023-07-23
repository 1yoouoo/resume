import React from 'react';
import { styled } from 'styled-components';
import NameInfo from './NameInfo';
import Contact from './Contact';

const Info = () => {
  return (
    <Wrapper>
      <NameInfo />
      <Contact />
    </Wrapper>
  );
};

export default Info;

const Wrapper = styled.div`
  padding: 3% 0 10% 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
