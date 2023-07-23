import { AiOutlineLink } from 'react-icons/ai';
import styled from 'styled-components';

export const H = styled.span`
  background-color: black;
  color: white;
  padding: 0 4px;
  border-radius: 4px;
`;

const Icon = styled(AiOutlineLink)`
  margin-left: 2px;
  transition: all 0.2s ease;
`;

const Link = styled.a`
  display: inline-flex; // 수정된 부분
  text-decoration: none;
  color: #008cba;
  cursor: pointer;
  padding: 0 2px;
  border-radius: 4px;
  align-items: center;

  &:hover {
    ${Icon} {
      transform: translateY(-3px);
    }
  }
`;

export const HyperLink = ({ text, href }: { text: string; href: string }) => (
  <Link href={href} target='_blank' rel='noopener noreferrer'>
    {text} <Icon />
  </Link>
);
