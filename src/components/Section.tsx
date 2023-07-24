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
  margin: 20px 0;
  border-bottom: 2px dotted gray;
  padding-bottom: 10px;
`;

const Content = styled.div`
  font-size: 35px;
  margin-left: 5px;
`;
