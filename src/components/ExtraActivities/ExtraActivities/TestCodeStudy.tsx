import {
  Left,
  LinkWrapper,
  Right,
  TextContent,
  TextWrapper,
  Title,
  Wrapper,
} from '@/components/Projects/Styles/ProjectStyle';
import SvgWrapper from '@/components/Info/SvgWrapper';
import Github from '@/components/Info/Github';
import { H } from '@/components/Styles/Effects';
import ProjectInfo from '@/components/Projects/ProjectInfo';

const TestCodeStudy = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <ProjectInfo title='테스트 코드 스터디' duration='2023. 06 ~ 2023. 08' />
          <LinkWrapper>
            <SvgWrapper
              SvgComponent={<Github />}
              href='https://github.com/linkarchive/StudyArchive/blob/main/TestCode/Home.md'
            />
          </LinkWrapper>
        </Left>
        <Right>
          <Title>테스트 코드 강의</Title>
          <TextWrapper>
            <TextContent>
              기능(Functional) 테스트와 유닛(Unit) 테스트의 차이점을 이해하고 적절한 테스트를
              설계하였습니다. 또한, Mock Service Worker를 이용한 서버 데이터 테스트를 실습하면서
              테스트의 중요성과 효과를 깊게 이해할 수 있었습니다.
            </TextContent>
            <TextContent>
              Jest-DOM을 이용한 버튼 클릭, CSS 모듈에서 스타일 테스트와 같은 실제 문제 상황에서
              테스트 코드를 적용하여 <H>코드의 안정성</H>을 높이는 방법을 배웠습니다.
            </TextContent>
            <TextContent>
              ESLint와 Prettier를 활용하여 코드 퀄리티를 높이고, 테스트 코드를 보다 가독성 있고
              관리하기 쉽게 작성하였습니다.
            </TextContent>
          </TextWrapper>
          <Title>프로젝트 적용</Title>
          <TextWrapper>
            <TextContent>
              이론과 실습을 바탕으로 실제 프로젝트에 테스트 코드를 적용하였습니다. 이를 통해
              프로젝트의 안정성을 높이고, <H>유지 보수</H>를 보다 효율적으로 수행할 수 있었습니다.
            </TextContent>
            <TextContent>
              프로젝트의 신뢰성을 높이기 위해 지속적으로 테스트 코드를 작성하고, 그 과정에서
              발생하는 이슈 해결을 위해 동료 개발자와의 협업을 강화하였습니다.
            </TextContent>
          </TextWrapper>
        </Right>
      </Wrapper>

      {/* <Line /> */}
    </>
  );
};

export default TestCodeStudy;
