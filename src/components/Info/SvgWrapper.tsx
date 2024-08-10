import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';

const SvgWrapper = ({ SvgComponent, href }: { SvgComponent: React.ReactNode; href: string }) => {
  return (
    <Container>
      <Wrapper href={href} target='_blank' rel='noopener noreferrer'>
        <Content>{SvgComponent}</Content>
      </Wrapper>
    </Container>
  );
};

export default SvgWrapper;

const Container = styled.div`
  cursor: default;
  display: inline-block;
`;

const Wrapper = styled(Link)`
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
