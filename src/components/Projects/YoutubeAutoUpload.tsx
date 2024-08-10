import React from 'react';
import SvgWrapper from '../Info/SvgWrapper';
import {
  Left,
  Line,
  LinkWrapper,
  Right,
  TextContent,
  TextWrapper,
  Title,
  Wrapper,
} from './Styles/ProjectStyle';
import ProjectInfo from './ProjectInfo';
import Youtube from '../Info/Youtube';

const YoutubeAutoUpload = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <ProjectInfo title='YoutubeAutoUpload' duration='2024. 04' />
          <LinkWrapper>
            <SvgWrapper
              SvgComponent={<Youtube />}
              href='https://www.youtube.com/channel/UCM3Rfyu0Ykg0t8us4Np9u6Q'
            />
            <SvgWrapper
              SvgComponent={<Youtube />}
              href='https://www.youtube.com/channel/UCt8jJhJO_giWr3zGebutOBA'
            />
          </LinkWrapper>
        </Left>
        <Right>
          <Title>Description.</Title>
          <p>추가예정</p>

          <Title>Tech Stack.</Title>
          <p>추가예정</p>

          <Title>What I did.</Title>
          <TextWrapper>
            <TextContent>추가예정</TextContent>
            <TextContent>추가예정</TextContent>
            <TextContent>추가예정</TextContent>
            <TextContent>추가예정</TextContent>
          </TextWrapper>
        </Right>
      </Wrapper>
      <Line />
    </>
  );
};

export default YoutubeAutoUpload;
