import { styled } from 'styled-components';
import Section from '../Section';
import Descriptsion from './Descriptsion';
import ProfileImage from './ProfileImage';

const AboutMe = () => {
  return (
    <div>
      <Section title='About Me' />
      <Content>
        <ProfileImage />
        <Descriptsion />
      </Content>
    </div>
  );
};

export default AboutMe;

const Content = styled.div`
  display: flex;
`;
