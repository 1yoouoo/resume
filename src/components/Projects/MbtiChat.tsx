import React, { useEffect, useRef, useState } from 'react';
import Github from '../Info/Github';
import SvgWrapper from '../Info/SvgWrapper';
import { H, HyperLink } from '../Styles/Effects';
import {
  ChevronButton,
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
import Chevron from '@/components/Info/Chevron';

const MbtiChat = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      contentRef.current.style.setProperty('--content-height', `${height}px`);
    }
  }, []);

  const handleClick = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <>
      <Wrapper isCollapsed={isCollapsed} ref={contentRef}>
        <Left>
          <ProjectInfo title='MbtiChat' duration='2023. 04' />
          <LinkWrapper>
            <SvgWrapper
              SvgComponent={<Github />}
              href='https://github.com/Sassy-Project/front-mbti-chat'
            />
          </LinkWrapper>
        </Left>
        <Right>
          <Title>Description.</Title>
          <p>
            MBTI로 상대를 선택해서 채팅을 하는 서비스입니다. 메인 개발자로 프로젝트를 리드하였고
            프론트엔드 4명, 백엔드 3명과 협업했습니다.
          </p>
          <p>
            레포개설부터 협업툴 연결, prettier와 eslint세팅, AWS 배포, Github Actions등 초기
            개발환경세팅을 맡아 팀원들이 바로 개발에 집중할 수 있도록 기초작업을 맡았습니다.
          </p>
          <p>
            또한 백엔드와 프론트엔드의 소통 불일치를 최소화 하기위해서 백엔드의 모든 회의에
            적극적으로 참석해 개발팀간의 소통을 원활하게 하였습니다. 이후 프로젝트 종료시 회고 때
            팀원들의 <H>가장 좋은 피드백</H>을 받을 수 있었습니다.
          </p>
          <Title>Tech Stack.</Title>
          <p>React, Sass, styled-components, Typescript, AWS(S3, Route53, EC2)</p>
          <Title>What I did.</Title>
          <TextWrapper>
            <TextContent>
              사용자가 채팅 중 네트워크 상의 문제로 인해 서비스 이용에 어려움을 겪는 경우를
              대비하여, 지수 백오프 알고리즘을 적용하였습니다. 이를 통해 잠시 네트워크가
              불안정하더라도, 채팅이 중단되지 않고, 자동으로 재연결이 이루어질 수 있도록 하였습니다.
              사용자는 이러한 과정을 크게 인식하지 못하면서도 더욱 <H>안정적인 채팅 환경</H>을
              경험할 수 있게 되었습니다.
              <HyperLink
                text='코드'
                href='https://gist.github.com/1yoouoo/6a10058d41234432dae6c5241ba5e1ee#file-exponentialbackoff-ts'
              />
            </TextContent>
            <TextContent>
              동시에 채팅을 접속하는 케이스를 해결하기 위해 대기방의 개념을 접목시켰습니다. Stomp의
              subscribe을 이용해서 캐러셀을 통해 접속을 하게 되면 대기방을 구독시키고 매칭이
              시작되면 새로운 방으로 이동시켜 채팅을 구현했습니다.{' '}
              <HyperLink text='참고 링크' href='https://1yoouoo.tistory.com/15' />
            </TextContent>
            <TextContent>
              채팅 전 16개의 MBTI을 클릭 한번에 선택할 수 있도록 입체적으로 캐러셀을 구현했습니다.
              이를 통해 좋은 사용자 경험을 줄 수 있었습니다.{' '}
              <HyperLink text='참고 링크' href='https://1yoouoo.tistory.com/26' />
            </TextContent>
            <TextContent>
              전체적인 프로젝트의 완성도를 높이기 위해서 Request For Comment(RFC)를 도입해 팀원들이
              의견을 제안하여 더 좋은 코드로 리팩토링 할 수 있도록 하였습니다.
            </TextContent>
          </TextWrapper>
        </Right>
        {isCollapsed && (
          <ChevronButton onClick={handleClick} isCollapsed={isCollapsed}>
            <Chevron />
          </ChevronButton>
        )}
      </Wrapper>
      <Line />
    </>
  );
};

export default MbtiChat;
