import React from 'react'
import { Link } from 'react-router-dom';
import { imgPath } from '../../../helpers/functions-general';

const FullPageLink = ({img, header, subheader}) => {
  return (
    <section className='full-page-link relative'>
      <Link to="/">
      <img 
      src={`${imgPath}/${img}`} 
      alt="" 
      className="w-full min-h-[900px] md:min-h-[600px] object-cover "
      />
    <div className="absolute bottom-10 left-10 text-white">
      <small>{subheader}</small>
      <h2 className="uppercase">{header}</h2>
    </div>
      </Link>
    </section>
      
   
  );
};

export default  FullPageLink;
