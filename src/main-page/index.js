import './main-page.css';
import HomePageCarousel from "../carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {

  return (
    <div>
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <div className='d-flex justify-content-center'>
            <h1 className='tagline'><strong>Weymouth Sons of Italy</strong></h1>
        </div>
        <div className='d-flex justify-content-center'>
            <h3 className='under-tag-line'><i>Lodge No. 278 </i></h3>
        </div>
        <div className='d-flex justify-content-center'>
            <h3 className='under-tag-line'>Function Hall Available for Rent</h3>
        </div>
        <div className='d-flex justify-content-center'>
            <h3 className='under-tag-line'>54 Whitman St</h3>
        </div>
        <div className='d-flex justify-content-center'>
            <h3 className='under-tag-line'>Weymouth, MA 02189</h3>
        </div>    
        <div className='d-flex justify-content-center'>
            <h3 className='under-tag-line'>Hours 11AM- 11PM daily</h3>
        </div>
      </div>
      <HomePageCarousel></HomePageCarousel>
    </div>  
  );
}

export default App;