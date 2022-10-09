import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import {Routes,Route} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Slider from './components/Slider';
import data from './data/data';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReview from './components/ProductReview';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app__conatiner">
        <PreNavbar />
        <Navbar />
        <Slider key={data.banner.start} start={data.banner.start} />
        <Offers  offer={data.offer}/>
        <Heading text="STAR PRODUCTS" />
        <StarProduct />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu /> 
        <Routes>
          <Route exact path='/' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
          <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
          <Route exact path='/device' element={<HotAccessories music={data.hotAccessories.smartDevice} musicCover={data.hotAccessoriesCover.smartDevice} />} />
          <Route exact path='/home' element={<HotAccessories music={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.home} />} />
          <Route exact path='/lifestyle' element={<HotAccessories music={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle} />} />
          <Route exact path='/accessories' element={<HotAccessories music={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories} />} />
        </Routes>
        <Heading text="PRODUCT REVIEWS" />
        <ProductReview reviews={data.productReviews} />
        <Heading text="VIDEOS" />
        <Videos Videos={data.videos} />
        <Heading text="IN THE PRESS" />
       <Banner  banner={data.banner}/>
       <Footer footer={data.footer} />
      </div>
    </Router>
  );
}

export default App;
