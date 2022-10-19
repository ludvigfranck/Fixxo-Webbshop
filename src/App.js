import './App.min.css';
import Banners from './sections/Banners';
import FeaturedProducts from './sections/FeaturedProducts';
import Flashsale from './sections/Flashsale';
import Header from './sections/Header';

function App() {
  return (
    <>
      <Header />
      <FeaturedProducts />
      <Banners />
      <Flashsale />
    </>
  );
}

export default App;