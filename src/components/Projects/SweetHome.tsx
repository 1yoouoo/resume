import React from 'react';
import Github from '../Info/Github';
import SvgWrapper from '../Info/SvgWrapper';
import { H } from '../Styles/Effects';
import {
  Left,
  LinkWrapper,
  ProjectDuration,
  ProjectTitle,
  Right,
  TextContent,
  TextWrapper,
  Title,
  Wrapper,
} from './Styles/ProjectStyle';

const SweetHome = () => {
  return (
    <Wrapper>
      <Left>
        <ProjectTitle>SweetHome</ProjectTitle>
        <ProjectDuration>2023. 01 - 2023. 03</ProjectDuration>
        <LinkWrapper>
          <SvgWrapper SvgComponent={<Github />} href='https://github.com/1yoouoo/SweetHome' />
        </LinkWrapper>
      </Left>
      <Right>
        <Title>Description.</Title>
        <p>
          Instagram과 같은 일상을 공유하는 소셜 네트워크 서비스 입니다. 프론트엔드는 혼자, 백앤드
          1명과 협업했습니다.
        </p>
        <p>
          해당 프로젝트를 통해 리액트가 서버로부터 데이터를 받는 과정, 데이터를 받아서 상태를
          관리하는 방법과 상태관리 등 리액트의 전반적인 흐름을 배울 수 있었습니다.
        </p>
        <p>
          또한, 댓글과 대댓글의 기능 구현을 통해서 복잡한 상태를 효율적으로 관리하는 방법에 대한
          고민을 통해서 구조에 대한 중요성을 경험할 수 있었습니다.
        </p>
        <Title>Tech Stack.</Title>
        <p>React, Typescript, Sass, Styled-components, Recoil, AWS(S3, EC2)</p>
        <Title>What I did.</Title>
        <TextWrapper>
          <TextContent>
            SNS 특성상 스크롤이 간편하다는 점을 바탕으로 무한스크롤을 구현하였습니다. 프로젝트
            요구사항에 맞춰 무한스크롤에 추가적인 기능을 주기위해 <H>클라이언트의 화면을 계산</H>
            하여 기능을 구현했습니다.
          </TextContent>
          <TextContent>
            댓글/대댓글 작성 후 반영이 되기까지 시간이 걸려 우선적으로 클라이언트 측에서 state를
            변경하여 적용시켰고 서버에러가 발생하면 롤백 후 toast message를 통해 사용자에게 알려
            사용자 경험을 올렸습니다.
          </TextContent>
          <TextContent>
            API 호출용 함수를 구현중 반복되는 코드와 권한이 필요한 함수를 분리하기 위해 Axios
            Instance를 사용했습니다. 이를 통해 가독성, 유지보수, 반복되는 코드를 정리해 코드의 양을
            줄일 수 있었습니다.
          </TextContent>
          <TextContent>
            코드의 변경사항이 생길 때마다 수동으로 배포를 진행했어야 했는데 Github Actions와 CI&CD를
            이용해서 <H>배포를 자동화</H>했습니다. 자동화 덕분에 전체 개발 과정의 효율성을
            향상시키는데 도움을 주었습니다.
          </TextContent>
          <TextContent>
            SCSS를 이용해서 코드 스타일링을 진행했습니다. 코드가 늘어날 때마다 네이밍 대한 기준이
            없어서 가독성이 많이 저하됐습니다. 그래서 <H>BEM 컨벤션을 도입</H>하여 네이밍을
            일관적으로 관리해 확장성과 가독성을 높였습니다.
          </TextContent>
        </TextWrapper>
      </Right>
    </Wrapper>
  );
};

export default SweetHome;
