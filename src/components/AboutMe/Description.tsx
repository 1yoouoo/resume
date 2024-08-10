import styled from 'styled-components';
import { H, HyperLink } from '../Styles/Effects';
import { Tooltip } from '../Styles/Tooltip';

const Description = () => {
  return (
    <DescriptionWrapper>
      <Content>
        저의 강점은 <H>협업</H>과 <H>커뮤니케이션</H> 그리고 반복되는 업무의 <H>자동화</H>입니다.
      </Content>

      <Content>
        현재 직장에서 개발 인원 확충 후 필연적으로 발생한 커뮤니케이션 오해를 좁히기 위해{' '}
        <H>개발 문화 개선</H>에 주도적으로 기여했습니다. <H>데일리 스크럼</H>과 <H>월간 회고</H>를
        도입하여 팀 내 소통을 강화하고, <H>코드 리뷰 리마인더</H>를 구현하여 코드 품질 향상에
        기여했습니다. 이를 통해 팀의 생산성과 협업 효율성을 크게 향상시켰습니다.
      </Content>

      <Content>
        반복되는 업무의 <H>자동화</H>에도 적극적으로 기여했습니다. 사내에서 사용 중인 업무 관리
        플랫폼의 사용성을 개선하기 위해 <H>크롬 익스텐션</H>을 개발했습니다. 하루 최소 두 번
        접속해야 하는 플랫폼이지만 매번 로그인 과정이 필요한 불편함이 있었습니다. 이를 해결하기 위해
        직접 <H>자동 로그인 기능</H>을 구현했습니다. 이를 통해{' '}
        <Tooltip text='스무 명' src='/크롬 익스텐션.png' />에 가까운 팀원들의 반복되는 업무를
        자동화하여 시간을 절약하는데 기여했습니다.
        <HyperLink text='Blog' href='https://1yoouoo.tistory.com/42' />
      </Content>

      <Content>
        업계의 다양한 경험을 배우기 위해 기회가 될 때마다 <H>개발 컨퍼런스</H>에 참석하고 있습니다.
        최근에는 <Tooltip text='인프콘' src='/인프콘2024.jpeg' />,{' '}
        <Tooltip text='AWS Seoul' src='/aws2024.webp' />
        등의 컨퍼런스에 참가했습니다. 이를 통해 다른 회사들이 직면한 실제 문제들과 그들의 혁신적인
        해결 방식을 접할 수 있었습니다. 이러한 경험들은 제 시야를 넓히고 다양한 관점에서 개발 과정을
        바라볼 수 있게 해주어, 업계의 폭넓은 지식과 인사이트를 얻는 데 큰 도움이 되고 있습니다.
      </Content>

      <Content>
        <H>트렌드</H>를 따라가려고 노력합니다. ChatGPT API를 활용하여{' '}
        <HyperLink text='자동화 블로그' href='https://1yoouoo.github.io/' />를 만든 경험이 있습니다.{' '}
        <HyperLink text='Blog' href='https://1yoouoo.tistory.com/22' />
      </Content>
    </DescriptionWrapper>
  );
};

export default Description;

const DescriptionWrapper = styled.ul`
  flex: 1;
`;

const Content = styled.li`
  font-size: 16px;
  line-height: 1.5;
  padding-bottom: 10px;
`;
