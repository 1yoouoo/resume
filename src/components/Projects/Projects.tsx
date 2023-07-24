import Section from '../Section';
import BlogGallery from './BlogGallery';
import LinkArchive from './LinkArchive';
import MbtiChat from './MbtiChat';
import SweetHome from './SweetHome';

const Projects = () => {
  return (
    <>
      <Section title='Projects' />
      <LinkArchive />
      <MbtiChat />
      <BlogGallery />
      <SweetHome />
    </>
  );
};

export default Projects;
