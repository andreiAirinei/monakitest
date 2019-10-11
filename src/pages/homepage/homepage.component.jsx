import React from 'react';
import Showcase from '../../components/showcase/showcase.component';
import SectionSponsors from '../../components/section-sponsors/section-sponsors.component';

const HomePage = () => {
  return (
    <div className='homepage-wrapper'>
      <Showcase />
      <SectionSponsors></SectionSponsors>
    </div>
  );
};

export default HomePage;
