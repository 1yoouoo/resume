import React from 'react';
import { styled } from 'styled-components';

const Section = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <Content>{title}</Content>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 20px;
`;

const Content = styled.div`
  font-size: 25px;
  padding-bottom: 10px;
  border-bottom: 2px dotted gray;
`;
