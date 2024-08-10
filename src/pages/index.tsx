import AboutMe from '@/components/AboutMe/AboutMe';
import Copyright from '@/components/Copyright';
import Info from '@/components/Info/Info';
import Projects from '@/components/Projects/Projects';
import Stacks from '@/components/Stacks/Stacks';
import OverLayCat from '@/components/Styles/OverLayCat';
import WorkExperience from '@/components/WorkExperience/WorkExperience';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoading = async () => {
      // 이미지 로딩 확인
      const images = document.getElementsByTagName('img');
      const imagePromises = Array.from(images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      // 폰트 로딩 확인
      const fontPromise = document.fonts.ready;

      // 모든 리소스가 로드될 때까지 기다림
      await Promise.all([...imagePromises, fontPromise]);

      setIsLoading(false);
    };

    checkLoading();
  }, []);

  return (
    <>
      <OverLayCat isLoading={isLoading} />
      <Main isLoading={isLoading}>
        <Wrapper>
          <Info />
          <AboutMe />
          <WorkExperience />
          <Projects />
          <Stacks />
        </Wrapper>
        <Copyright />
      </Main>
    </>
  );
}

const Wrapper = styled.div`
  margin: auto;
  max-width: 1200px;
`;

const Main = styled.div<{ isLoading: boolean }>`
  position: relative;
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
  transition: opacity 0.5s ease;
`;
