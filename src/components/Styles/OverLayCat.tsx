import styled, { keyframes } from 'styled-components';
import Cat from '../../../public/blanc.jpeg';
import Image from 'next/image';

const Wrapper = styled.div<{ isLoading: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: ${(props) => (props.isLoading ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const pulseAnimation = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CatImage = styled(Image)`
  border-radius: 50%;
  animation: ${pulseAnimation} 1.5s ease-in-out infinite;
`;

const OverLayCat = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <Wrapper isLoading={isLoading}>
      <Content>
        <CatImage src={Cat} alt='cat' width={80} height={80} />
      </Content>
    </Wrapper>
  );
};

export default OverLayCat;
