import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';

const HomePageCarousel = () => {
  return (
    <div>
      <div>
      <Carousel
        className='carousel-wrapper'
        autoPlay = {true}
        infiniteLoop = {true}
        interval = {3000}
        showThumbs={false}
        showStatus={false}
        style={{
          textAlign: 'center',
          maxWidth: '850px',
          maxHeight: '500px',
          margin: '20px auto',
        }} >  
         <div>
          <img src='/images/lodgeSign.jpg' alt='Exterior of lodge with sign with members lounge'/>
        </div>
        <div>
          <img src='/images/function-hall-weymouth.jpg' alt='Weymouth Function Hall'/>
        </div>
        <div>
          <img src='/images/exterior.jpg' alt='Exterior of Lodge'/>
        </div>
        <div>
          <img src='/images/baby-shower.jpg' alt='Baby Shower Setup'/>
        </div>
        <div>
          <img src='/images/tables.jpg' alt='Large setup with tables'/>
        </div>
      </Carousel>
      </div>
    </div>
  );
};

export default HomePageCarousel;