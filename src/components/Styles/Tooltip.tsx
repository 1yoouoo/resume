import styled from 'styled-components';

const TextWithTooltip = styled.span`
  background-color: #537188;
  padding: 0 3px;
  border-radius: 3px;

  color: #fff;

  position: relative;
  &:hover div {
    display: block;
  }
`;

const TooltipWrapper = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 100%;
  transform: translateX(-50%);
  padding: 5px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
`;

const TooltipImage = styled.img`
  max-width: 500px;
  max-height: 500px;
`;

export const Tooltip = ({ text, href }: { text: string; href?: string }) => {
  return (
    <TextWithTooltip>
      {text}
      <TooltipWrapper>
        <a href={href} target='_blank' rel='noopener noreferrer'>
          <TooltipImage src={`/${text}.png`} alt='Preview' />
        </a>
      </TooltipWrapper>
    </TextWithTooltip>
  );
};
