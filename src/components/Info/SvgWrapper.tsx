import React from 'react';
import { styled } from 'styled-components';

const SvgWrapper = ({ SvgComponent, href }: { SvgComponent: React.ReactNode; href: string }) => {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      <Wrapper>
        <Content>{SvgComponent}</Content>
      </Wrapper>
    </a>
  );
};

export default SvgWrapper;

const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  filter: invert(1);
  margin: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Content = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
