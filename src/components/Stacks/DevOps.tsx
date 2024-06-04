import React from 'react';
import { ProjectTitle } from '../Projects/Styles/ProjectStyle';
import { H } from '../Styles/Effects';
import { P } from './FrontEnd';
import { styled } from 'styled-components';

const DevOps = () => {
  // TODO: 디지털오션 추가, ec2추가
  return (
    <Wrapper>
      <ProjectTitle>DevOps</ProjectTitle>
      <ul>
        <li>
          <h3>AWS</h3>
          <ul>
            <li>
              <P>
                <H>S3 :</H> AWS의 클라우드 저장소인 S3를 이용하여 웹사이트의 정적 파일을 관리하고
                배포하는 경험이 있습니다.
              </P>
            </li>
            <li>
              <P>
                <H>CloudFront :</H> 웹사이트의 전송 속도를 향상시키는 방법을 배웠고 실제 프로젝트에
                적용해본 경험이 있습니다.
              </P>
            </li>
            <li>
              <P>
                <H>Route53 :</H> 도메인 이름 시스템(DNS)을 설정하고 관리한 경험이 있습니다.
              </P>
            </li>
          </ul>
        </li>
        <li>
          <h3>Vercel</h3>
          <ul>
            <li>
              <P>
                <H>Vercel :</H> Vercel을 이용해 프론트엔드 어플리케이션을 배포하고 관리한 경험이
                있습니다.
              </P>
            </li>
            <li>
              <P>
                <H>환경 설정 :</H> 사용 목적에 맞게 개발환경, 테스트환경, 프로덕트환경 등 스테이징을
                나누어 개발환경을 개선한 경험이 있습니다.
              </P>
            </li>
          </ul>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 50px;
`;
export default DevOps;
