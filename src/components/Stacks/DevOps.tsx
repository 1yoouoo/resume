import React from 'react';
import { ProjectTitle } from '../Projects/Styles/ProjectStyle';
import { H } from '../Styles/Effects';
import { styled } from 'styled-components';

const DevOps = () => {
  // TODO: 디지털오션 추가, ec2추가
  return (
    <Wrapper>
      <ProjectTitle>DevOps</ProjectTitle>
      <div>
        <H>AWS S3</H> <H>AWS CloudFront</H> <H>AWS Route53</H> <H>Vercel</H> <H>DigitalOcean</H>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 200px;
`;
export default DevOps;
