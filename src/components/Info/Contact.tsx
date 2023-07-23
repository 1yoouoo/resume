import { styled } from 'styled-components';
import Github from './Github';
import Gmail from './Gmail';
import SvgWrapper from './SvgWrapper';
import Tistory from './Tistory';

const Contact = () => {
  return (
    <Wrapper>
      <SvgWrapper SvgComponent={<Tistory />} href='https://1yoouoo.tistory.com/' />
      <SvgWrapper SvgComponent={<Github />} href='https://github.com/1yoouoo/' />
      <SvgWrapper SvgComponent={<Gmail />} href='mailto:1yoouoo@gmail.com' />
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  display: flex;
  padding: 5px;
`;
