import { styled } from 'styled-components';
import Section from '../Section';
import DevOps from './DevOps';
import FrontEnd from './FrontEnd';

const Stacks = () => {
  return (
    <>
      <Section title='Stacks' />
      <Content>
        <FrontEnd />
        <DevOps />
      </Content>
    </>
  );
};

const Content = styled.div`
  padding: 0 10px;
`;
export default Stacks;
