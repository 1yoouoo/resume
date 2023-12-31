import Image from 'next/image';
import styled from 'styled-components';

const ProfileImage = () => {
  return (
    <Wrapper>
      <Profile>
        <ImageWrapper>
          <Image src='/profile_image.jpeg' alt='Profile' layout='fill' objectFit='cover' />
        </ImageWrapper>
      </Profile>
    </Wrapper>
  );
};

export default ProfileImage;

const Wrapper = styled.div`
  padding: 50px 30px;
`;

const Profile = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset 0 0 30px #000000;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.95;
`;
