import React from 'react'
import Header from '../pages/frontend/partials/Header'
import Footer from '../pages/frontend/partials/Footer'
import BannerSlider from './BannerSlider'
import NewArrival from './NewArrival';
import FullPageLink from './FullPageLink';
import WinterCollection from './WinterCollection';



const Home = () => {
  return (
    <>
      <Header />
      <BannerSlider />
      <NewArrival />
      <FullPageLink img="slider-1.jpg" header="Lorem, ipsum dolor" subheader="Lorem ipsum dolor sit amet" />
      <WinterCollection />
      <Footer />
      
    </>
  );
};

export default Home;
