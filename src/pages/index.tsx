import Info from '@/components/Info/Info';
import Section from '@/components/Section';
import { styled } from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <Info />
      <Section title='About Me' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 5% 8%;
`;
