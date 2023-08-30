import styled from 'styled-components';
import { H, HyperLink } from '../Styles/Effects';
import { Tooltip } from '../Styles/Tooltip';

const Descriptsion = () => {
  return (
    <Description>
      <Content>
        <H>소통</H>하고 함께 개발하는 것을 좋아합니다. 프론트엔드라는 직군을 준비하는 기간에 실제로
        업무와 비슷한 환경에서 개발을 해보고 싶어서 백엔드를 준비하는 지인과 함께{' '}
        <Tooltip text='작업실' />을 계약하고 1년 가까이 지내면서 사이드 프로젝트를 진행해 왔습니다.
      </Content>
      <Content>
        <H>되돌아보는 과정</H>을 중요하게 생각합니다. 사이드 프로젝트가 끝나고 회고를 통해서 어느
        부분에서 미진했는지, 어느 부분이 좋았는지에 대해 이야기하는 시간을 갖습니다. 그리고
        회고내용을 바탕으로 Action Plan을 설정해 더 나은 다음을 위해 실행합니다.
      </Content>
      <Content>
        개발자에게 있어 가장 중요한 소프트웨어 스킬은 <H>팀워크</H>라고 생각합니다. 좋은 팀워크를
        위해서 프론트엔드 팀장을 자원하여 팀워크에 대한 역량을 늘리기 위해 노력했습니다.
      </Content>
      <Content>
        반복되는 일이 있으면 <H>자동화</H>하는 작업을 좋아하고 트랜드를 읽는 것을 좋아합니다.
        ChatGPT의 OpenAI을 이용하여{' '}
        <HyperLink text='자동화 블로그' href='https://1yoouoo.github.io/' />를 만든 경험이 있습니다.{' '}
        <HyperLink text='Blog' href='https://1yoouoo.tistory.com/22' />
      </Content>
      <Content>
        항상 능동적으로 열정적으로 배웁니다. 이러한 성실성을 바탕으로 원티드 프론트엔드 인턴쉽에서{' '}
        <Tooltip text='우수 10인' />에 발탁되었습니다.
      </Content>
    </Description>
  );
};

export default Descriptsion;

const Description = styled.ul`
  flex: 1;
`;

const Content = styled.li`
  font-size: 16px;
  line-height: 1.5;
  padding-bottom: 10px;
`;
