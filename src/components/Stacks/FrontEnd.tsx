import React from 'react';
import { ProjectTitle } from '../Projects/Styles/ProjectStyle';
import { H } from '../Styles/Effects';

const FrontEnd = () => {
  // TODO: 기술 스택 추가 (SWR, tailwind)
  return (
    <>
      <ProjectTitle>FrontEnd</ProjectTitle>
      <div>
        <H>React</H> <H>Next.js</H> <H>TypeScript</H> <H>Styled-component</H> <H>Tailwind</H>{' '}
        <H>Redux</H> <H>SWR</H> <H>Jest</H> <H>React-testing-library</H> <H>Storybook</H>
      </div>
    </>
  );
};

export default FrontEnd;
