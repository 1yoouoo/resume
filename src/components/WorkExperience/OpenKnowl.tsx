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
          <HyperLink text='오픈놀(OPENKNOWL)' href='https://miniintern.com/' />은 개인의 색깔과
          가치를 발견할 수 있는 서비스를 제공하고 교육 컨텐츠를 개발하는 교육 및 IT 회사입니다. 그
          중 제가 속한 미니인턴사업부는 실제 기업 프로젝트를 온라인으로 수행하며, 2주 만에
          실무경험을 쌓고 취업하는 <H>인재매칭 서비스</H>입니다.
        </p>

        <Title>What I did.</Title>
        <TextWrapper>
          <TextContent>
            3개의 독립적인 도메인 관리로 인한 코드 중복과 의존성 관리등의 어려움을 인식했습니다.
            이를 해결하기 위해 Turborepo를 사용한 <H>모노레포 아키텍처</H>를 도입했습니다. 이로 인해
            유지보수 비용이 크게 절감되고, 공통 의존성의 효율적인 관리를 통해 배포시간이{' '}
            <H>40%이상 감소</H>하였습니다.
          </TextContent>

          <TextContent>
            각 도메인별 UI 불일치와 공용 컴포넌트의 일관성 없는 확장으로 인한 문제점을 인식했습니다.
            이를 해결하기 위해 Storybook을 이용한 <H>컴포넌트 기반 디자인 시스템</H>을 구축했습니다.
            또한, Chromatic을 도입하여 시각적 회귀 테스트를 자동화했습니다. 그 결과, UI 일관성이
            크게 향상되었고, 개발 생산성이 향상되었습니다. 또한 디자이너의 프로토타입 제작 시간이
            단축되었습니다.
          </TextContent>

          <TextContent>
            중첩 레이아웃, 스트리밍, RSC(React Server Components)를 활용한 렌더링 개선으로 사용자
            경험을 향상시키고자 NextJs의 page router에서 <H>app router로의 마이그레이션</H>을
            결심했습니다. 점진적 마이그레이션을 진행했지만, 투입된 리소스에 비해 개발 경험 하락,
            오류 추적의 어려움 등 득보단 실이 더 많은 프로젝트가 되었습니다. 이를 통해 새로운 기술
            도입 시 더 철저한 사전 조사와 실제 이점 분석의 중요성을 깨달았습니다.
          </TextContent>

          <TextContent>
            사용자 참여도와 흥미를 높일 수 있는 인터랙티브 요소의 필요성을 인식했습니다. 이를 위해
            matter.js를 활용한 물리 엔진 기반 <H>애니메이션</H>을 구현했습니다. 그 결과, 사용자 체류
            시간이 <H>15% 증가</H>했고, 서비스에 대한 긍정적인 피드백이 <H>30% 증가</H>하는 등
            사용자 경험이 크게 향상되었습니다.
          </TextContent>

          <TextContent>
            서비스 내 상품들을 PDF로 다운로드 받을 수 있는 기능을 악용하여 공유하는 유저들로 인해
            수익 감소 현상을 포착했습니다. PDF를 이미지로 변환하여 웹 뷰어를 제공함으로 유저간의
            공유를 어렵게해 <H>수익 감소를 최소화</H>하면서 <H>사용자들의 웹페이지 잔존율</H>을
            높였습니다.
          </TextContent>
        </TextWrapper>
      </Right>
    </Wrapper>
  );
};

export default OpenKnowl;

// ** * //
// 1. 모노레포
// 2. 디자인시스템
// 3. 앱 라우터 전환
// - 오류 추적 어려움
// - Router.event 부재
// - css in js rsc사용 어려움
// - rsc를 사용하기 위한 기존 페이지 별 api 조회를 개별 api로 변경하는 데 어려움
// 4. 인터렉티브 페이지
