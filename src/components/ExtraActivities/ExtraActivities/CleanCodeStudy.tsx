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
} from '@/components/Projects/Styles/ProjectStyle';
import SvgWrapper from '@/components/Info/SvgWrapper';
import Github from '@/components/Info/Github';
import { H, HyperLink } from '@/components/Styles/Effects';
import { Tooltip } from '@/components/Styles/Tooltip';

const CleanCodeStudy = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <ProjectTitle>
            원티드 프리온보딩 <br />
            인턴쉽 수료
          </ProjectTitle>
          <ProjectDuration>2023. 04 ~ 2023. 05</ProjectDuration>
          <LinkWrapper>
            <SvgWrapper
              SvgComponent={<Github />}
              href='https://github.com/Sassy-Project/front-mbti-chat'
            />
          </LinkWrapper>
        </Left>
        <Right>
          <Title>기업과제 훈련</Title>
          <TextWrapper>
            <TextContent>
              실제로 기업에서 과제를 내주고 팀단위로 같이 해결하면서 실무를 경험할 수 있는 기회가
              되었습니다.
            </TextContent>
            <TextContent>
              ToDoList 구현 → 새로운 팀원들과의 코딩스타일과 협업스타일을 알아가면서 팀에 대한
              호흡을 맞출 수 있는 계기가 되었습니다.
            </TextContent>
            <TextContent>
              검색창 구현 → 디바운스와 로컬 캐싱 구현으로 API호출 최소화 → 서버 부하를 줄일 수 있는
              방법을 배웠습니다.
            </TextContent>
            <TextContent>검색창 구현 → 무한스크롤을 이용해서 사용자 경험을 올렸습니다.</TextContent>
          </TextWrapper>
          <Title>세션 강의</Title>
          <TextWrapper>
            <TextContent>총 4주동안 8개의 세션 강의 수강</TextContent>
            <TextContent>
              CI/CD, ESlint & Prettier, 협업 개발환경 구축 학습 및 실습했습니다.
            </TextContent>
            <TextContent>
              React 환경에서 최적화, hooks, DI, Redux, Test 학습 및 실습했습니다.
            </TextContent>
            <TextContent>7팀 팀장을 맡아서 주도적으로 회의와 협업을 리드했습니다.</TextContent>
          </TextWrapper>
          <Title>다른 개발자가 읽기 쉽도록 고민</Title>
          <TextWrapper>
            <TextContent>
              기업 과제 수행중 코드베이스를 정하기 앞서 가장 협업하기 좋은 코드를 각자 만들어
              투표하여{' '}
              <Tooltip
                text='선정하는 회의'
                href='https://drive.google.com/file/d/1hdeY3qmDe01ymIFdlDCNivEXKeuJJQ2v/view'
              />
              에 발탁되었습니다.에서 <H>만장일치</H>로 선택된 경험이 있습니다.
            </TextContent>
          </TextWrapper>
        </Right>
      </Wrapper>
      <Line />
    </>
  );
};

export default CleanCodeStudy;
