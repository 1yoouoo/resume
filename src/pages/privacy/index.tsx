import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 1.6;
`;

const Title = styled.h1`
  color: #333;
`;

const SectionTitle = styled.h2`
  color: #333;
`;

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Container>
      <Title>개인정보처리방침</Title>

      <SectionTitle>1. 수집하는 개인정보의 항목</SectionTitle>
      <p>본 확장 프로그램은 다음과 같은 개인정보를 수집합니다:</p>
      <ul>
        <li>사용자가 입력한 로그인 정보(아이디, 비밀번호)</li>
        <li>자동 로그인을 설정한 웹사이트 URL</li>
      </ul>

      <SectionTitle>2. 개인정보의 수집 및 이용목적</SectionTitle>
      <p>수집된 개인정보는 다음의 목적을 위해 이용됩니다:</p>
      <ul>
        <li>자동 로그인 기능 제공</li>
        <li>알림 서비스 제공 (출퇴근 시간 알림)</li>
      </ul>

      <SectionTitle>3. 개인정보의 보관 및 보안</SectionTitle>
      <p>수집된 모든 개인정보는 다음과 같이 안전하게 보관됩니다:</p>
      <ul>
        <li>모든 데이터는 사용자의 로컬 브라우저 스토리지에만 저장됩니다</li>
        <li>저장된 정보는 암호화되어 보관됩니다</li>
      </ul>

      <SectionTitle>4. 개인정보의 제3자 제공</SectionTitle>
      <p>본 확장 프로그램은 사용자의 개인정보를 제3자에게 제공하지 않습니다.</p>

      <SectionTitle>5. 사용자 권리</SectionTitle>
      <p>사용자는 다음과 같은 권리를 가집니다:</p>
      <ul>
        <li>저장된 개인정보의 열람 및 수정</li>
        <li>개인정보 삭제 요청</li>
        <li>확장 프로그램 제거를 통한 모든 저장 데이터 삭제</li>
      </ul>

      <SectionTitle>6. 쿠키 정책</SectionTitle>
      <p>본 확장 프로그램은 필요한 기능 구현을 위해 브라우저의 로컬 스토리지를 사용합니다.</p>

      <SectionTitle>7. 개인정보처리방침 변경</SectionTitle>
      <p>
        본 개인정보처리방침은 법률 또는 서비스 변경사항을 반영하기 위해 수정될 수 있습니다.
        변경사항이 있을 경우 확장 프로그램을 통해 사용자에게 고지할 것입니다.
      </p>

      <SectionTitle>8. 문의처</SectionTitle>
      <p>개인정보 보호 관련 문의사항이 있으신 경우 아래 연락처로 문의해 주시기 바랍니다:</p>
      <p>이메일: 1yoouoo@gmail.com</p>

      <footer>
        <p>마지막 수정일: 2024년 12월 5일</p>
      </footer>
    </Container>
  );
};

export default PrivacyPolicyPage;
