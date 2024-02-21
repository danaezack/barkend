import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { dogShape } from '../../propTypes/dogShape.js';
import xBtn from "../../images/x-lg.svg";
import hrtBtn from "../../images/bookmark-heart.svg";
import hrtBtnFill from "../../images/bookmark-heart-fill.svg";
import PropTypes from 'prop-types';
import 'swiper/css/navigation';
import 'swiper/css';
import './DogDetails.css';

function DogDetails({ allDogs }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const { id } = useParams();
  let dog = allDogs.find(dog => dog.id === Number(id));

  function handleClick() {
    isFavorited ? setIsFavorited(false) : setIsFavorited(true);
  }

  if (!allDogs.length || !dog) {
    return <p>Fetching dog...</p>;
  }

  return (
    <div className="details-container">
      <aside className="image-carousel">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {dog.photos.map((image, index) => (
            <SwiperSlide key={index}>
              <img key={index} className='dog-img' src={image} alt=""/>
            </SwiperSlide>
          ))}
        </Swiper>
      </aside>
      <main className="dog-details">
        <Link to={'/main'}>
          <img className='x-btn' src={xBtn} alt="close button" />
        </Link>
        <img onClick={() => handleClick()} className={isFavorited ? 'hrt-btn hidden' : 'hrt-btn'} src={hrtBtn} alt="close button"/>
        <img onClick={() => handleClick()} className={isFavorited ? 'hrt-btn-fill flip' : 'hrt-btn-fill hidden'} src={hrtBtnFill} alt="close button"/>
        <div className="main-details-container">
          <h1 className='name'>Hi, I'm {dog.name}.</h1>
          <p className='sub-details'>{dog.age} • {dog.gender} • {dog.breeds}</p>
          <ul>{dog.name}'s Qualities:
            <p className='tags'>{dog.tags}</p>
          </ul>
        </div>
        <div className="inquire-container">
          <h3 className='inquiry'>Interested in {dog.name}?</h3>
          {dog.contact.email && <p className='sub-details'>email: {dog.contact.email}</p>}
          {dog.contact.phone && <p className='sub-details'>phone: {dog.contact.phone}</p>}
        </div>
      </main>
    </div>
  );
}

export default DogDetails;

DogDetails.propTypes = {
  allDogs: PropTypes.arrayOf(dogShape).isRequired,
};