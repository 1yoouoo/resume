import React from 'react';
import {
  Left,
  LinkWrapper,
  Right,
  TextContent,
  Title,
  TextWrapper,
  Wrapper,
  ProjectDuration,
} from '../Projects/Styles/ProjectStyle';
import ProjectInfo from '../Projects/ProjectInfo';
import SvgWrapper from '../Info/SvgWrapper';
import Link from '../Info/Link';
import { H, HyperLink } from '../Styles/Effects';

const OpenKnowl = () => {
  return (
    <Wrapper>
      <Left>
        <ProjectInfo title='OpenKnowl' duration='2023. 10 ~ 현재' />
        <ProjectDuration>기술혁신사업부 FE Engineer</ProjectDuration>
        <LinkWrapper>
          <SvgWrapper SvgComponent={<Link />} href='https://miniintern.com/' />
        </LinkWrapper>
      </Left>
      <Right>
        <Title>Description.</Title>
        <p>
          오픈놀(OPENKNOWL)은 개인의 색깔과 가치를 발견할 수 있는 서비스를 제공하고 교육 컨텐츠를
          개발하는 교육 및 IT 회사입니다. 그 중 제가 속한 미니인턴사업부는 실제 기업 프로젝트를
          온라인으로 수행하며, 2주 만에 실무경험을 쌓고 취업하는 <H>인재매칭 서비스</H>입니다.
        </p>

        <Title>What I did.</Title>
        <TextWrapper>
          <TextContent>
            서비스 내 유저들의 재능을 상품화시켜 구매할 수 있는 아이템에 PDF 미리보기를 제공하여
            실제 제품의 가치를 미리 경험하게 하여{' '}
            <H>결제로 이어지는 긍정적인 반응을 유도했습니다.</H>
          </TextContent>

          <TextContent>
            결제 후 상품의 PDF 다운로드가 가능하여 유저간의 공유가 가능하여 수익감소되는 현상을
            포착했습니다. 그래서 PDF를 이미지로 변환시켜 웹 뷰어를 사용자에게 제공해 공유가 어렵게
            만들어 <H>수익감소를 최소화 시킴</H>과 동시에 <H>사용자들의 웹페이지 잔존율</H>을
            올렸습니다.
          </TextContent>

          <TextContent>
            사내 출/퇴근 관리하는 사이트에 자동로그인이 없어 하루에 2번씩이나 모든 팀원들이 로그인을
            하는 불편함을 느껴왔습니다. 정규직 전환 후 개인 시간에 자동로그인을 해주는 크롬
            익스텐션을 개발하여 50명이 넘는 팀원들의 불편함을 해소한 경험이 있습니다.
          </TextContent>

          <TextContent>
            새로운 프로젝트 진행중 동시성 이슈로 웹소켓으로 전환해야하는 상황이 와서 예정된 일정보다
            5주 미뤄지는 전환점에 있었습니다. 프로젝트 특성상 데이터가 빈번히 요청되지않고 특정
            사용자(인사담당자)만 접근할 수 있는 페이지에서의 동시성 이슈가 발생함을 파악해서 웹소켓
            대안으로 HTTP Long Polling으로 변경을 요청드렸었습니다. 그 요청이 받아들여져{' '}
            <H>일정에 맞춰 프로젝트를 진행할 수 있게 기여</H>했습니다.
          </TextContent>
        </TextWrapper>
      </Right>
    </Wrapper>
  );
};

export default OpenKnowl;
