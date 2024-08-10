import Section from '../Section';
import Twinkle from './Twinkle';
import MbtiChat from './MbtiChat';
import SweetHome from './SweetHome';
import YoutubeAutoUpload from './YoutubeAutoUpload';

const Projects = () => {
  return (
    <>
      <Section title='Projects' />
      <YoutubeAutoUpload />
      <Twinkle />
      <MbtiChat />
      <SweetHome />
    </>
  );
};

export default Projects;
