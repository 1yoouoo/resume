import { ReactNode } from 'react';
import { Desktop, ProjectDuration, ProjectTitle, Tablet } from './Styles/ProjectStyle';

const ProjectInfo = ({ title, duration }: { title: string | ReactNode; duration: string }) => {
  return (
    <>
      <Desktop>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDuration>{duration}</ProjectDuration>
      </Desktop>
      <Tablet>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDuration>{duration}</ProjectDuration>
      </Tablet>
    </>
  );
};

export default ProjectInfo;
