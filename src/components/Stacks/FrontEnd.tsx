import React from 'react';
import { ProjectTitle } from '../Projects/Styles/ProjectStyle';
import { H, HyperLink } from '../Styles/Effects';
import { styled } from 'styled-components';

const FrontEnd = () => {
  return (
    <>
      <ProjectTitle>FrontEnd</ProjectTitle>
      <ul>
        <li>
          <P>
            <H>HTML5 :</H> 웹 접근성을 우선시하며, 시맨틱 태그를 통해 구조적이고 명료한 마크업을
            실천합니다.
          </P>
        </li>
        <li>
          <P>
            <H>CSS :</H> SCSS의 중첩 규칙과 변수 활용을 통해 가독성 있는 스타일링을 구현하며,
            styled-components를 통해 컴포넌트 중심의 CSS 구조를 만들어냅니다.
          </P>
        </li>
        <li>
          <P>
            <H>JavaScript (ES6) :</H> 최신 자바스크립트 문법을 자유롭게 활용하여 효율적인 코드를
            작성하며, Promise와 async/await를 활용해 간결하고 이해하기 쉬운 비동기 로직을
            만들어냅니다.
          </P>
        </li>
        <li>
          <P>
            <H>React :</H> React를 기반으로 SPA 개발을 진행하며, React Hooks와 Context API를
            활용하여 유연하고 효율적인 상태 관리를 실현합니다.
          </P>
        </li>
        <li>
          <P>
            <H>Next.js :</H> 사용자 경험과 SEO를 고려하여 Next.js를 통한 서버 사이드 렌더링을 활용한
            웹 개발을 효과적으로 수행합니다.
          </P>
        </li>
        <li>
          <P>
            <H>TypeScript :</H> TypeScript를 적용하여 코드의 안정성을 확보하고, 명시적인 타입
            표현으로 코드의 가독성을 향상시키고 런타임 오류를 방지합니다.
          </P>
        </li>
        <li>
          <P>
            <H>Redux-toolkit:</H> Redux-toolkit을 활용하여 전역 상태를 원활하게 관리하며, 비동기
            로직 처리에 필요한 Thunk를 효과적으로 적용하여 복잡한 상태 로직을 다루는데 능숙합니다.
          </P>
        </li>
        <li>
          <P>
            <H>Jest, React-testing-library:</H> Jest와 React-testing-library를 활용하여 컴포넌트의
            유닛 테스트를 구성하며, 안정적인 애플리케이션을 위한 테스팅 전략을 구현하고 지속적으로
            유지 보수합니다.
          </P>
        </li>
      </ul>
    </>
  );
};

export default FrontEnd;

export const P = styled.p`
  line-height: 25px;
`;
