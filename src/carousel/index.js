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
          <img src='/images/number1.jpg' alt='dennis headshot two'/>
        </div>
        <div>
          <img src='/images/interior.jpg' alt='dennis headshot four'/>
        </div>
        <div>
          <img src='/images/exterior.jpg' alt='dennis headshot five'/>
        </div>
        <div>
          <img src='/images/baby-shower.jpg' alt='dennis headshot one'/>
        </div>
        <div>
          <img src='/images/tables.jpg' alt='dennis headshot three'/>
        </div>
      </Carousel>
      </div>
    </div>
  );
};

export default HomePageCarousel;