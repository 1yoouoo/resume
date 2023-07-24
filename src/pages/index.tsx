import AboutMe from '@/components/AboutMe/AboutMe';
import ExtraActivities from '@/components/ExtraActivities/ExtraActivities';
import Info from '@/components/Info/Info';
import Projects from '@/components/Projects/Projects';
import { styled } from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <Info />
      <AboutMe />
      <Projects />
      <ExtraActivities />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 5% 8%;
`;
