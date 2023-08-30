import React from 'react';
import Github from '../Info/Github';
import SvgWrapper from '../Info/SvgWrapper';
import { H, HyperLink } from '../Styles/Effects';
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

const Twinkle = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <ProjectInfo title='Twinkle' duration='2023. 05 - 2023. 08' />
          <LinkWrapper>
            <SvgWrapper SvgComponent={<Github />} href='https://github.com/linkarchive/Front-End' />
          </LinkWrapper>
        </Left>
        <Right>
          <Title>Description.</Title>
          <p>
            Twinkle은 북마크가 가능한 소셜 네트워크 서비스입니다. 관심있는 URL을 저장할 수 있고 다른
            사람의 URL을 둘러볼 수 있으며 북마크를 해서 가져올 수 있는 서비스입니다. 프론트엔드 2명,
            백엔드 2명, 디자이너 1명과 협업하였습니다.
          </p>
          <p>
            전체적인 디자인, 개발설계부터 프론트엔드 기능개발을 맡았습니다. 백엔드와 지속적으로
            소통하고 유의미한 기능 개발 후 오프라인으로 만나{' '}
            <HyperLink
              text='애자일
            회고'
              href='https://github.com/linkarchive/Front-End/wiki'
            />
            를 통해서 다음 기능개발에 대한 소통을 진행했습니다.
          </p>
          <p>
            스프린트 방식을 활용하고, 매일 데일리 스크럼을 통해 팀원 간의 신속한 정보 공유와 작업
            계획을 설정하였습니다.
          </p>
          <p>
            또한,{' '}
            <HyperLink
              text='피그마'
              href='https://www.figma.com/file/h7Idnh5c59mgmx52ScfArY/%ED%8A%B8%EC%9C%99%ED%81%B4(Twincle)?type=design&node-id=0%3A1&mode=design&t=Z3C7C9mbvsWADzPB-1'
            />
            를 통해 UI/UX 디자인을 시각화하고 팀원들과의 효과적인 커뮤니케이션을 이루어,
            디자인적으로 <H>오해를 최소화</H>하고 프로젝트의 효율성을 높였습니다.
          </p>
          <Title>Tech Stack.</Title>
          <p>
            Next.js, Typescript, Redux-toolkit, React-query, styled-components, AWS-Route53, Vercel,
            Figma, Jest, React-testing-library, msw
          </p>
          <Title>What I did.</Title>
          <TextWrapper>
            <TextContent>
              첫 페이지 렌더링 이후 페이지 이동시 진입 확률이 높은 페이지로의 이동시 렌더링 지연이
              발생하는 문제를 발견했습니다. 이러한 사용자 환경의 비효율성을 개선하기 위해,
              getStaticProps를 활용하여 서비스의 핵심 부분 및 고밀도 접근 페이지들에 대해서는 미리
              정적 사이트 생성(SSG) 방식으로 렌더링할 수 있도록 작업하였습니다. 이로써{' '}
              <H>사용자가 주로 접근하는 페이지의 접근성을 크게 향상시켰습니다.</H>
            </TextContent>

            <TextContent>
              react-query를 이용하여 비동기 데이터 패치와 상태 관리를 최적화 하여 캐싱 로직을
              효율적으로 관리했습니다. 또한, 네트워크 불안정성등의 이유로 데이터 패치 실패시 재시도
              매커니즘을 적용하여 사용자에게 안정적인 UI 환경을 구축하였습니다.
            </TextContent>

            <TextContent>
              Axios Interceptor를 활용하여 토큰 만료 시, 비동기적으로 토큰을 재발급 받는 동안 모든
              요청을 큐에 보관하였습니다. 토큰 재발급 후, 해당 큐에 저장된 요청들을 순차적으로
              처리함으로써 사용자가 서비스 중 <H>불편함을 느끼지 않도록 최적화</H>하였습니다.{' '}
              <HyperLink
                text='코드'
                href='https://gist.github.com/1yoouoo/cb645cf66a7d15a6be2a43036efb4beb'
              />
            </TextContent>

            <TextContent>
              CI/CD 파이프라인에 테스트 코드를 적용하여, 코드가 병합되기 전에 자동으로 테스트가
              수행되도록 설정하였습니다. 이를 통해 지속적인 통합/지속적인 배포 환경에서의{' '}
              <H>코드 품질</H>을 보장하였습니다.
            </TextContent>

            <TextContent>
              페이지 이동간의 권한확인을 위해서 페이지마다 권한 확인을 진행해온 반복적인 코드를
              Next.js의 미들웨어를 이용해서 일괄적으로 관리함으로써 반복된 코드를 줄일 수
              있었습니다.
            </TextContent>

            <TextContent>
              로컬과 배포된 환경과의 차이를 효과적으로 디버깅하기 위해서 .env와 vercel의 환경변수를
              이용하여 로컬, 개발, 테스트, 운영환경을 분리하여 개발속도를 높였습니다.
            </TextContent>
          </TextWrapper>
        </Right>
      </Wrapper>
      <Line />
    </>
  );
};

export default Twinkle;
