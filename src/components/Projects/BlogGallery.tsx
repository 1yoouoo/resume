import React from 'react';
import Github from '../Info/Github';
import SvgWrapper from '../Info/SvgWrapper';
import { H } from '../Styles/Effects';
import {
  Left,
  Line,
  LinkWrapper,
  ProjectDuration,
  ProjectTitle,
  Right,
  TextContent,
  TextWrapper,
  Title,
  Wrapper,
} from './Styles/ProjectStyle';

const BlogGallery = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <ProjectTitle>BlogGallery</ProjectTitle>
          <ProjectDuration>2023. 03</ProjectDuration>
          <LinkWrapper>
            <SvgWrapper SvgComponent={<Github />} href='https://github.com/1yoouoo/BlogGallery' />
          </LinkWrapper>
        </Left>
        <Right>
          <Title>Description.</Title>
          <p>많은 양의 글과 고화질로 이루어진 사진 중심의 블로그입니다. (1인 개발)</p>
          <p>페이지별로 다루는 글과 사진이 방대하여 최적화 해결에 집중하여 개발하였습니다.</p>
          <Title>Tech Stack.</Title>
          <p>
            React, styled-components, Typescript, MSW, cra-bundle-analyzer, react-app-reweird,
            preload-webpack-plugin
          </p>
          <Title>What I did.</Title>
          <TextWrapper>
            <TextContent>
              최초 렌더링시 글이 1초정도 뒤에 렌더링 되는 문제를 포착했습니다. 이를 해결하기위해
              woff를 이용해 폰트 사이즈를 줄였습니다. 또, preload-webpack-plugin을 이용해 폰트를
              preload하여 최초 렌더링 시간을 대폭 감소시켰습니다. 추가로 ‘font-display : block’을
              적용시켜 FOIT를 방지함으로 <H>UX를 개선</H>시켰습니다.
            </TextContent>
            <TextContent>
              preview 페이지에서 상세 페이지로 이동시 고화질의 이미지로 인해서 페이지 이동이
              느려짐을 마우스 오버시 이미지를 미리 가져오게 함으로 이동시{' '}
              <H>사용자가 체감하는 속도</H>를 확연히 줄였습니다.
            </TextContent>
          </TextWrapper>
        </Right>
      </Wrapper>
      <Line />
    </>
  );
};

export default BlogGallery;
