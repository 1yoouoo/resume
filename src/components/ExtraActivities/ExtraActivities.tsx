import React from 'react';

import Section from '../Section';
import Wanted from './ExtraActivities/Wanted';
import TestCodeStudy from './ExtraActivities/TestCodeStudy';
import CleanCodeStudy from './ExtraActivities/CleanCodeStudy';

const ExtraActivities = () => {
  return (
    <>
      <Section title='Extra Activities' />
      <Wanted />
      <TestCodeStudy />
      {/* <CleanCodeStudy /> */}
    </>
  );
};
export default ExtraActivities;
