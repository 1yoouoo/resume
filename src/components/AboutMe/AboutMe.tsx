import styled from 'styled-components';
import Section from '../Section';
import Description from './Description';
import ProfileImage from './ProfileImage';

const AboutMe = () => {
  return (
    <Wrapper>
      <Section title='About Me' />
      <Content>
        <ProfileImageWrapper>
          <ProfileImage />
        </ProfileImageWrapper>
        <Description />
      </Content>
    </Wrapper>
  );
};

export default AboutMe;

const Wrapper = styled.div`
  padding-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
`;

const ProfileImageWrapper = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;
