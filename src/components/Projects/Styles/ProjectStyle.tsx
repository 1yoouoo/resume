import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Left = styled.div`
  min-width: 310px;
`;

export const Right = styled.div`
  margin-left: 40px;
`;

export const ProjectTitle = styled.h1``;

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
