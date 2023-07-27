import AboutMe from '@/components/AboutMe/AboutMe';
import Copyright from '@/components/Copyright';
import ExtraActivities from '@/components/ExtraActivities/ExtraActivities';
import Info from '@/components/Info/Info';
import Projects from '@/components/Projects/Projects';
import Stacks from '@/components/Stacks/Stacks';
import { styled } from 'styled-components';

export default function Home() {
  return (
    <Main>
      <Wrapper>
        <Info />
        <AboutMe />
        <Projects />
        <ExtraActivities />
        <Stacks />
      </Wrapper>
      <Copyright />
    </Main>
  );
}

const Wrapper = styled.div`
  margin: auto;
  max-width: 1200px;
`;

const Main = styled.div`
  position: relative;
`;
