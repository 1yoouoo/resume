import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  min-width: 260px;

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
  }
`;

export const Tablet = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;

export const Desktop = styled.div`
  display: block;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Right = styled.div`
  margin-left: 30px;
`;

export const ProjectTitle = styled.h2``;

export const ProjectDuration = styled.div`
  border-left: 4px solid black;
  padding-left: 20px;
  color: #727272;
  margin-bottom: 20px;
`;

export const LinkWrapper = styled.div`
  display: flex;
`;

export const Title = styled.h2`
  padding: 10px 0 5px 0;
`;

export const TextWrapper = styled.ul`
  flex: 1;
`;

export const TextContent = styled.li`
  font-size: 16px;
  line-height: 1.5;
  padding-bottom: 10px;
`;

export const Line = styled.div`
  padding: 10px;
  border-bottom: 1px solid gray;
`;
