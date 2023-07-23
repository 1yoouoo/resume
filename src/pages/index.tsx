import AboutMe from '@/components/AboutMe/AboutMe';
import Info from '@/components/Info/Info';
import { styled } from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <Info />
      <AboutMe />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 5% 8%;
`;
