import { styled } from 'styled-components';

export const Wrapper = styled.div<{ isCollapsed?: boolean }>`
  position: relative;
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-height: ${(props) => (props.isCollapsed ? '250px' : 'var(--content-height)')};
  transition: max-height 0.5s ease-out;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(transparent, white);
    opacity: ${(props) => (props.isCollapsed ? 1 : 0)};
    transition: opacity 0.5s ease-out;
    pointer-events: none;
  }

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

export const CollapsibleContent = styled.div<{ isCollapsed: boolean }>`
  max-height: ${(props) => (props.isCollapsed ? '100px' : 'none')};
  overflow: hidden;
  position: relative;
  transition: max-height 0.3s ease-out;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: ${(props) => (props.isCollapsed ? 'linear-gradient(transparent, white)' : 'none')};
    pointer-events: none;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  margin-top: 10px;
`;

export const ChevronButton = styled.button<{ isCollapsed: boolean }>`
  z-index: 100;
  position: absolute;
  background: none;
  bottom: 0px;
  left: 50%;
  border: none;
  cursor: pointer;
  transform: ${({ isCollapsed }) => (isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
