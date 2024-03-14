import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { dogShape } from '../../propTypes/dogShape.js';
import Header from '../Header/Header.jsx';
import xBtn from "../../images/x-lg.svg";
import hrtBtn from "../../images/bookmark-heart.svg";
import hrtBtnFill from "../../images/bookmark-heart-fill.svg";
import PropTypes from 'prop-types';
import 'swiper/css/navigation';
import 'swiper/css';
import './DogDetails.css';

function DogDetails({ addFavorite, allDogs, viewAllDogs }) {
  const { id } = useParams();
  let dog = allDogs.find(dog => dog.id === Number(id));

  function handleClick() {
    addFavorite(Number(id));
  }

  if (!allDogs.length || !dog) {
    return <p>Fetching dog...</p>;
  }

  return (
    <>
      <Header viewAllDogs={viewAllDogs} />
      <div className="dog-page-wrapper">
        <div className="favorites-button-container">
          <img onClick={() => handleClick()} className={dog.favorited ? 'hrt-btn hidden' : 'hrt-btn'} src={hrtBtn} alt="close button" />
          <img onClick={() => handleClick()} className={dog.favorited ? 'hrt-btn-fill flip' : 'hrt-btn-fill hidden'} src={hrtBtnFill} alt="close button" />
          <Link to={'/main'}>
            <img className='x-btn' src={xBtn} alt="close button" />
          </Link>
        </div>
      </div>
      <main className="dog-details-container" style={{ height: '100vh' }}>
        <aside className="dog-details">
          <div className="details-box">
            <div className="main-details-container">
              <h1 className='name'>Hi, I'm {dog.name}.</h1>
              <p className='sub-details'> {dog.breeds} • {dog.age} • {dog.gender} <br></br></p>
              <ul className="tags-list">MyQualities:
                {dog && dog.description && (
                <p className="description">{dog.description}</p> 
              )}
                <p className='tags'>{dog.tags.replace(/,/g, ' • ')}</p>
              </ul>
              {dog && dog.environment && dog.environment.children && (
                <p className="children-info">Good with Children</p> 
              )}

              {dog && dog.attributes && dog.attributes.spayed_neutered && (
                <p className="fixed-info">Fixed</p>
                
              )}
            </div>
          </div>
          <div className="inquire-container">
            <h3 className='inquiry'>Interested in {dog.name}?</h3>
            {dog.contact.email && <p className='sub-details'>email: {dog.contact.email}</p>}
            {dog.contact.phone && <p className='sub-details'>phone: {dog.contact.phone}</p>}
          </div>
        </aside>
        <aside className="image-carousel">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {dog.photos.map((image, index) => (
              <SwiperSlide key={index}>
                <img key={index} className='dog-img' src={image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </aside>
      </main>
    </>
  );
}

export default DogDetails;

DogDetails.propTypes = {
  allDogs: PropTypes.arrayOf(dogShape).isRequired,
};
